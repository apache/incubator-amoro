/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.netease.arctic.trace;

import com.netease.arctic.AmsClient;
import com.netease.arctic.ams.api.CommitMetaProducer;
import com.netease.arctic.ams.api.Constants;
import com.netease.arctic.ams.api.TableChange;
import com.netease.arctic.ams.api.TableCommitMeta;
import com.netease.arctic.table.ArcticTable;
import com.netease.arctic.table.ChangeTable;
import com.netease.arctic.table.KeyedTable;
import com.netease.arctic.table.UnkeyedTable;
import com.netease.arctic.utils.ConvertStructUtil;
import com.netease.arctic.utils.SnapshotFileUtil;
import org.apache.iceberg.DataFile;
import org.apache.iceberg.DeleteFile;
import org.apache.iceberg.Snapshot;
import org.apache.iceberg.SnapshotSummary;
import org.apache.iceberg.Table;
import org.apache.iceberg.exceptions.CommitFailedException;
import org.apache.iceberg.relocated.com.google.common.collect.Lists;
import org.apache.iceberg.util.PropertyUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

/**
 * Implementation of {@link TableTracer}, trace table changes and report changes to ams when committing ignore errors.
 */
public class AmsTableTracer implements TableTracer {

  private static final Logger LOG = LoggerFactory.getLogger(AmsTableTracer.class);

  private final ArcticTable table;
  private final String innerTable;
  private final AmsClient client;

  private String action;
  private Map<String, String> properties;
  private final Map<String, String> snapshotSummary = new HashMap<>();
  private InternalTableChange defaultTableChange;
  private final Map<Long, AmsTableTracer.InternalTableChange> transactionSnapshotTableChanges = new LinkedHashMap<>();

  public AmsTableTracer(UnkeyedTable table, String action, AmsClient client) {
    this.innerTable = table instanceof ChangeTable ?
        Constants.INNER_TABLE_CHANGE : Constants.INNER_TABLE_BASE;
    this.table = table;
    this.action = action;
    this.client = client;
  }

  public AmsTableTracer(KeyedTable table, String action, AmsClient client) {
    this.table = table;
    this.innerTable = null;
    this.client = client;
  }

  public AmsTableTracer(UnkeyedTable table, AmsClient client) {
    this(table, null, client);
  }

  @Override
  public void addDataFile(DataFile dataFile) {
    getDefaultChange().addDataFile(dataFile);
  }

  @Override
  public void deleteDataFile(DataFile dataFile) {
    getDefaultChange().deleteDataFile(dataFile);
  }

  @Override
  public void addDeleteFile(DeleteFile deleteFile) {
    getDefaultChange().addDeleteFile(deleteFile);
  }

  @Override
  public void deleteDeleteFile(DeleteFile deleteFile) {
    getDefaultChange().deleteDeleteFile(deleteFile);
  }

  private InternalTableChange getDefaultChange() {
    if (defaultTableChange == null) {
      defaultTableChange = new InternalTableChange();
    }
    return defaultTableChange;
  }

  public void addTransactionTableSnapshot(Long snapshotId, AmsTableTracer.InternalTableChange internalTableChange) {
    transactionSnapshotTableChanges.putIfAbsent(snapshotId, internalTableChange);
  }

  public ArcticTable table() {
    return table;
  }

  public String innerTable() {
    return innerTable;
  }

  @Override
  public void commit() {
    TableCommitMeta commitMeta = new TableCommitMeta();
    commitMeta.setTableIdentifier(table.id().buildTableIdentifier());
    commitMeta.setAction(action);
    String commitMetaSource = PropertyUtil.propertyAsString(snapshotSummary,
        com.netease.arctic.trace.SnapshotSummary.SNAPSHOT_PRODUCER,
        com.netease.arctic.trace.SnapshotSummary.SNAPSHOT_PRODUCER_DEFAULT);
    commitMeta.setCommitMetaProducer(CommitMetaProducer.valueOf(commitMetaSource));
    commitMeta.setCommitTime(System.currentTimeMillis());
    boolean update = false;
    boolean threw = false;

    if (defaultTableChange != null) {
      Table traceTable;
      if (table.isUnkeyedTable()) {
        traceTable = table.asUnkeyedTable();
      } else {
        throw new IllegalStateException("can't apply table change on keyed table.");
      }

      Optional<TableChange> tableChange =
          defaultTableChange.toTableChange(table, traceTable.currentSnapshot(), innerTable);
      if (tableChange.isPresent()) {
        commitMeta.addToChanges(tableChange.get());
        update = true;
      }
    }
    if (transactionSnapshotTableChanges.size() > 0) {
      transactionSnapshotTableChanges.forEach((snapshotId, internalTableChange) -> {
        if (table.isUnkeyedTable()) {
          Snapshot snapshot = table.asUnkeyedTable().snapshot(snapshotId);
          Optional<TableChange> tableChange = internalTableChange.toTableChange(table, snapshot, innerTable);
          tableChange.ifPresent(commitMeta::addToChanges);
        }
      });
      update = true;
    }
    if (this.properties != null) {
      commitMeta.setProperties(this.properties);
      update = true;
      threw = true;
    }
    if (!update) {
      return;
    }

    try {
      client.tableCommit(commitMeta);
    } catch (Throwable t) {
      LOG.warn("trace table commit failed", t);
      if (threw) {
        throw new CommitFailedException(t, "commit table change failed");
      }
    }
  }

  @Override
  public void replaceProperties(Map<String, String> newProperties) {
    this.properties = newProperties;
  }

  @Override
  public void setSnapshotSummary(String key, String value) {
    snapshotSummary.put(key, value);
  }

  public void setAction(String action) {
    this.action = action;
  }

  public static class InternalTableChange {
    private final List<DataFile> addedFiles = Lists.newArrayList();
    private final List<DataFile> deletedFiles = Lists.newArrayList();
    private final List<DeleteFile> addedDeleteFiles = Lists.newArrayList();
    private final List<DeleteFile> deletedDeleteFiles = Lists.newArrayList();

    public InternalTableChange() {
    }

    public void addDataFile(DataFile dataFile) {
      addedFiles.add(dataFile);
    }

    public void deleteDataFile(DataFile dataFile) {
      deletedFiles.add(dataFile);
    }

    public void addDeleteFile(DeleteFile deleteFile) {
      addedDeleteFiles.add(deleteFile);
    }

    public void deleteDeleteFile(DeleteFile deleteFile) {
      deletedDeleteFiles.add(deleteFile);
    }

    /**
     * Build {@link TableChange} to report to ams.
     *
     * @param arcticTable arctic table which table change belongs
     * @param snapshot  the snapshot produced in this operation
     * @param innerTable  inner table name
     * @return table change
     */
    public Optional<TableChange> toTableChange(ArcticTable arcticTable, Snapshot snapshot, String innerTable) {
      if (addedFiles.size() > 0 || deletedFiles.size() > 0 || addedDeleteFiles.size() > 0 ||
          deletedDeleteFiles.size() > 0) {
        long currentSnapshotId = snapshot.snapshotId();
        long parentSnapshotId =
            snapshot.parentId() == null ? -1 : snapshot.parentId();
        Map<String, String> summary = snapshot.summary();
        long realAddedDataFiles = summary.get(SnapshotSummary.ADDED_FILES_PROP) == null ?
            0 : Long.parseLong(summary.get(SnapshotSummary.ADDED_FILES_PROP));
        long realDeletedDataFiles = summary.get(SnapshotSummary.DELETED_FILES_PROP) == null ?
            0 : Long.parseLong(summary.get(SnapshotSummary.DELETED_FILES_PROP));
        long realAddedDeleteFiles = summary.get(SnapshotSummary.ADDED_DELETE_FILES_PROP) == null ?
            0 : Long.parseLong(summary.get(SnapshotSummary.ADDED_DELETE_FILES_PROP));
        long readRemovedDeleteFiles = summary.get(SnapshotSummary.REMOVED_DELETE_FILES_PROP) == null ?
            0 : Long.parseLong(summary.get(SnapshotSummary.REMOVED_DELETE_FILES_PROP));

        List<com.netease.arctic.ams.api.DataFile> addFiles = new ArrayList<>();
        List<com.netease.arctic.ams.api.DataFile> deleteFiles = new ArrayList<>();
        if (realAddedDataFiles == addedFiles.size() && realDeletedDataFiles == deletedFiles.size() &&
            realAddedDeleteFiles == addedDeleteFiles.size() && readRemovedDeleteFiles == deletedDeleteFiles.size()) {
          addFiles =
              addedFiles.stream().map(file -> ConvertStructUtil.convertToAmsDatafile(file, arcticTable))
                  .collect(Collectors.toList());
          deleteFiles =
              deletedFiles.stream().map(file -> ConvertStructUtil.convertToAmsDatafile(file, arcticTable))
                  .collect(Collectors.toList());
          addFiles.addAll(addedDeleteFiles.stream()
              .map(file -> ConvertStructUtil.convertToAmsDatafile(file, arcticTable)).collect(Collectors.toList()));
          deleteFiles.addAll(deletedDeleteFiles.stream()
              .map(file -> ConvertStructUtil.convertToAmsDatafile(file, arcticTable)).collect(Collectors.toList()));
        } else {
          // tracer file change info is different from iceberg snapshot, should get iceberg real file change info
          SnapshotFileUtil.getSnapshotFiles(arcticTable, snapshot, addFiles, deleteFiles);
        }

        return Optional.of(new TableChange(innerTable, addFiles, deleteFiles, currentSnapshotId, parentSnapshotId));
      } else {
        return Optional.empty();
      }
    }
  }
}
