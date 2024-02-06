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

package com.netease.arctic.server.utils;

import com.netease.arctic.IcebergFileEntry;
import com.netease.arctic.scan.TableEntriesScan;
import com.netease.arctic.server.ArcticServiceConstants;
import com.netease.arctic.server.table.BasicTableSnapshot;
import com.netease.arctic.server.table.KeyedTableSnapshot;
import com.netease.arctic.server.table.TableRuntime;
import com.netease.arctic.server.table.TableSnapshot;
import com.netease.arctic.table.ArcticTable;
import com.netease.arctic.utils.TableFileUtil;
import org.apache.commons.lang3.tuple.Pair;
import org.apache.iceberg.ContentFile;
import org.apache.iceberg.DeleteFile;
import org.apache.iceberg.FileContent;
import org.apache.iceberg.FileScanTask;
import org.apache.iceberg.ReachableFileUtil;
import org.apache.iceberg.Snapshot;
import org.apache.iceberg.Table;
import org.apache.iceberg.TableMetadata;
import org.apache.iceberg.TableScan;
import org.apache.iceberg.io.CloseableIterable;
import org.apache.iceberg.relocated.com.google.common.base.Predicate;
import org.apache.iceberg.relocated.com.google.common.collect.Iterables;
import org.apache.iceberg.relocated.com.google.common.collect.Lists;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.io.UncheckedIOException;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

public class IcebergTableUtil {

  private static final Logger LOG = LoggerFactory.getLogger(IcebergTableUtil.class);

  public static long getSnapshotId(Table table, boolean refresh) {
    Snapshot currentSnapshot = getSnapshot(table, refresh);
    if (currentSnapshot == null) {
      return ArcticServiceConstants.INVALID_SNAPSHOT_ID;
    } else {
      return currentSnapshot.snapshotId();
    }
  }

  public static TableSnapshot getSnapshot(ArcticTable arcticTable, TableRuntime tableRuntime) {
    if (arcticTable.isUnkeyedTable()) {
      return new BasicTableSnapshot(tableRuntime.getCurrentSnapshotId());
    } else {
      return new KeyedTableSnapshot(
          tableRuntime.getCurrentSnapshotId(), tableRuntime.getCurrentChangeSnapshotId());
    }
  }

  public static Snapshot getSnapshot(Table table, boolean refresh) {
    if (refresh) {
      table.refresh();
    }
    return table.currentSnapshot();
  }

  public static Optional<Snapshot> findFirstMatchSnapshot(
      Table table, Predicate<Snapshot> predicate) {
    List<Snapshot> snapshots = Lists.newArrayList(table.snapshots());
    Collections.reverse(snapshots);
    return Optional.ofNullable(Iterables.tryFind(snapshots, predicate).orNull());
  }

  public static Set<Long> findExpiredSnapshotIds(
      TableMetadata originalMetadata, TableMetadata updatedMetadata) {
    Set<Long> retainedSnapshots =
        updatedMetadata.snapshots().stream().map(Snapshot::snapshotId).collect(Collectors.toSet());
    return originalMetadata.snapshots().stream()
        .map(Snapshot::snapshotId)
        .filter(id -> !retainedSnapshots.contains(id))
        .collect(Collectors.toSet());
  }

  public static Set<Pair<String, FileContent>> getAllContentFile(Table table) {
    Set<Pair<String, FileContent>> validFiles = new HashSet<>();

    TableEntriesScan entriesScan =
        TableEntriesScan.builder(table)
            .includeFileContent(
                FileContent.DATA, FileContent.POSITION_DELETES, FileContent.EQUALITY_DELETES)
            .allEntries()
            .build();
    try (CloseableIterable<IcebergFileEntry> entries = entriesScan.entries()) {
      for (IcebergFileEntry entry : entries) {
        validFiles.add(
            Pair.of(
                TableFileUtil.getUriPath(entry.getFile().path().toString()),
                entry.getFile().content()));
      }
    } catch (IOException e) {
      throw new UncheckedIOException(e);
    }

    return validFiles;
  }

  public static Set<String> getAllContentFilePath(Table internalTable) {
    return getAllContentFile(internalTable).stream().map(Pair::getLeft).collect(Collectors.toSet());
  }

  public static Set<String> getAllStatisticsFilePath(Table table) {
    return ReachableFileUtil.statisticsFilesLocations(table).stream()
        .map(TableFileUtil::getUriPath)
        .collect(Collectors.toSet());
  }

  public static Set<DeleteFile> getDanglingDeleteFiles(Table internalTable) {
    if (internalTable.currentSnapshot() == null) {
      return Collections.emptySet();
    }
    Set<String> deleteFilesPath = new HashSet<>();
    TableScan tableScan = internalTable.newScan();
    try (CloseableIterable<FileScanTask> fileScanTasks = tableScan.planFiles()) {
      for (FileScanTask fileScanTask : fileScanTasks) {
        for (DeleteFile delete : fileScanTask.deletes()) {
          deleteFilesPath.add(delete.path().toString());
        }
      }
    } catch (IOException e) {
      LOG.error("table scan plan files error", e);
      return Collections.emptySet();
    }

    Set<DeleteFile> danglingDeleteFiles = new HashSet<>();
    TableEntriesScan entriesScan =
        TableEntriesScan.builder(internalTable)
            .useSnapshot(internalTable.currentSnapshot().snapshotId())
            .includeFileContent(FileContent.EQUALITY_DELETES, FileContent.POSITION_DELETES)
            .build();

    for (IcebergFileEntry entry : entriesScan.entries()) {
      ContentFile<?> file = entry.getFile();
      String path = file.path().toString();
      if (!deleteFilesPath.contains(path)) {
        danglingDeleteFiles.add((DeleteFile) file);
      }
    }

    return danglingDeleteFiles;
  }
}
