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

package org.apache.amoro.server.dashboard.model;

import java.io.Serializable;
import java.util.Objects;

public class TableRuntimeBean implements Serializable {
  private static final long serialVersionUID = 1L;

  private Long tableId;

  private String catalogName;

  private String dbName;

  private String tableName;

  private long currentSnapshotId;

  private long currentChangeSnapshotId;

  private long lastOptimizedSnapshotId;

  private long lastOptimizedChangeSnapshotId;

  private long lastMajorOptimizingTime;

  private long lastMinorOptimizingTime;

  private long lastFullOptimizingTime;

  private String optimizingStatus;

  private long optimizingStatusStartTime;

  private long optimizingProcessId;

  private String optimizerGroup;

  private String tableConfig;

  private String optimizingConfig;

  private String pendingInput;

  public TableRuntimeBean(
      Long tableId,
      String catalogName,
      String dbName,
      String tableName,
      long currentSnapshotId,
      long currentChangeSnapshotId,
      long lastOptimizedSnapshotId,
      long lastOptimizedChangeSnapshotId,
      long lastMajorOptimizingTime,
      long lastMinorOptimizingTime,
      long lastFullOptimizingTime,
      String optimizingStatus,
      long optimizingStatusStartTime,
      long optimizingProcessId,
      String optimizerGroup,
      String tableConfig,
      String optimizingConfig,
      String pendingInput) {
    this.tableId = tableId;
    this.catalogName = catalogName;
    this.dbName = dbName;
    this.tableName = tableName;
    this.currentSnapshotId = currentSnapshotId;
    this.currentChangeSnapshotId = currentChangeSnapshotId;
    this.lastOptimizedSnapshotId = lastOptimizedSnapshotId;
    this.lastOptimizedChangeSnapshotId = lastOptimizedChangeSnapshotId;
    this.lastMajorOptimizingTime = lastMajorOptimizingTime;
    this.lastMinorOptimizingTime = lastMinorOptimizingTime;
    this.lastFullOptimizingTime = lastFullOptimizingTime;
    this.optimizingStatus = optimizingStatus;
    this.optimizingStatusStartTime = optimizingStatusStartTime;
    this.optimizingProcessId = optimizingProcessId;
    this.optimizerGroup = optimizerGroup;
    this.tableConfig = tableConfig;
    this.optimizingConfig = optimizingConfig;
    this.pendingInput = pendingInput;
  }

  public TableRuntimeBean() {}

  public Long getTableId() {
    return tableId;
  }

  public void setTableId(Long tableId) {
    this.tableId = tableId;
  }

  public String getCatalogName() {
    return catalogName;
  }

  public void setCatalogName(String catalogName) {
    this.catalogName = catalogName;
  }

  public String getDbName() {
    return dbName;
  }

  public String getTableName() {
    return tableName;
  }

  public void setTableName(String tableName) {
    this.tableName = tableName;
  }

  public void setDbName(String dbName) {
    this.dbName = dbName;
  }

  public long getCurrentSnapshotId() {
    return currentSnapshotId;
  }

  public void setCurrentSnapshotId(long currentSnapshotId) {
    this.currentSnapshotId = currentSnapshotId;
  }

  public long getCurrentChangeSnapshotId() {
    return currentChangeSnapshotId;
  }

  public long getLastOptimizedSnapshotId() {
    return lastOptimizedSnapshotId;
  }

  public void setLastOptimizedSnapshotId(long lastOptimizedSnapshotId) {
    this.lastOptimizedSnapshotId = lastOptimizedSnapshotId;
  }

  public void setCurrentChangeSnapshotId(long currentChangeSnapshotId) {
    this.currentChangeSnapshotId = currentChangeSnapshotId;
  }

  public long getLastOptimizedChangeSnapshotId() {
    return lastOptimizedChangeSnapshotId;
  }

  public void setLastOptimizedChangeSnapshotId(long lastOptimizedChangeSnapshotId) {
    this.lastOptimizedChangeSnapshotId = lastOptimizedChangeSnapshotId;
  }

  public long getLastMajorOptimizingTime() {
    return lastMajorOptimizingTime;
  }

  public void setLastMajorOptimizingTime(long lastMajorOptimizingTime) {
    this.lastMajorOptimizingTime = lastMajorOptimizingTime;
  }

  public long getLastMinorOptimizingTime() {
    return lastMinorOptimizingTime;
  }

  public void setLastMinorOptimizingTime(long lastMinorOptimizingTime) {
    this.lastMinorOptimizingTime = lastMinorOptimizingTime;
  }

  public long getLastFullOptimizingTime() {
    return lastFullOptimizingTime;
  }

  public void setLastFullOptimizingTime(long lastFullOptimizingTime) {
    this.lastFullOptimizingTime = lastFullOptimizingTime;
  }

  public String getOptimizingStatus() {
    return optimizingStatus;
  }

  public void setOptimizingStatus(String optimizingStatus) {
    this.optimizingStatus = optimizingStatus;
  }

  public long getOptimizingStatusStartTime() {
    return optimizingStatusStartTime;
  }

  public void setOptimizingStatusStartTime(long optimizingStatusStartTime) {
    this.optimizingStatusStartTime = optimizingStatusStartTime;
  }

  public long getOptimizingProcessId() {
    return optimizingProcessId;
  }

  public void setOptimizingProcessId(long optimizingProcessId) {
    this.optimizingProcessId = optimizingProcessId;
  }

  public String getOptimizerGroup() {
    return optimizerGroup;
  }

  public void setOptimizerGroup(String optimizerGroup) {
    this.optimizerGroup = optimizerGroup;
  }

  public String getTableConfig() {
    return tableConfig;
  }

  public void setTableConfig(String tableConfig) {
    this.tableConfig = tableConfig;
  }

  public String getOptimizingConfig() {
    return optimizingConfig;
  }

  public void setOptimizingConfig(String optimizingConfig) {
    this.optimizingConfig = optimizingConfig;
  }

  public String getPendingInput() {
    return pendingInput;
  }

  public void setPendingInput(String pendingInput) {
    this.pendingInput = pendingInput;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (!(o instanceof TableRuntimeBean)) {
      return false;
    }
    TableRuntimeBean that = (TableRuntimeBean) o;
    return currentSnapshotId == that.currentSnapshotId
        && currentChangeSnapshotId == that.currentChangeSnapshotId
        && lastOptimizedSnapshotId == that.lastOptimizedSnapshotId
        && lastOptimizedChangeSnapshotId == that.lastOptimizedChangeSnapshotId
        && lastMajorOptimizingTime == that.lastMajorOptimizingTime
        && lastMinorOptimizingTime == that.lastMinorOptimizingTime
        && lastFullOptimizingTime == that.lastFullOptimizingTime
        && optimizingStatusStartTime == that.optimizingStatusStartTime
        && optimizingProcessId == that.optimizingProcessId
        && Objects.equals(tableId, that.tableId)
        && Objects.equals(catalogName, that.catalogName)
        && Objects.equals(dbName, that.dbName)
        && Objects.equals(tableName, that.tableName)
        && Objects.equals(optimizingStatus, that.optimizingStatus)
        && Objects.equals(optimizerGroup, that.optimizerGroup)
        && Objects.equals(tableConfig, that.tableConfig)
        && Objects.equals(optimizingConfig, that.optimizingConfig)
        && Objects.equals(pendingInput, that.pendingInput);
  }

  @Override
  public int hashCode() {
    return Objects.hash(
        tableId,
        catalogName,
        dbName,
        tableName,
        currentSnapshotId,
        currentChangeSnapshotId,
        lastOptimizedSnapshotId,
        lastOptimizedChangeSnapshotId,
        lastMajorOptimizingTime,
        lastMinorOptimizingTime,
        lastFullOptimizingTime,
        optimizingStatus,
        optimizingStatusStartTime,
        optimizingProcessId,
        optimizerGroup,
        tableConfig,
        optimizingConfig,
        pendingInput);
  }

  @Override
  public String toString() {
    return "TableRuntimeBean{"
        + "tableId='"
        + tableId
        + '\''
        + ", catalogName='"
        + catalogName
        + '\''
        + ", dbName='"
        + dbName
        + '\''
        + ", tableName='"
        + tableName
        + '\''
        + ", currentSnapshotId="
        + currentSnapshotId
        + ", currentChangeSnapshotId="
        + ", lastOptimizedSnapshotId="
        + lastOptimizedSnapshotId
        + currentChangeSnapshotId
        + ", lastOptimizedChangeSnapshotId="
        + lastOptimizedChangeSnapshotId
        + ", lastMajorOptimizingTime="
        + lastMajorOptimizingTime
        + ", lastMinorOptimizingTime="
        + lastMinorOptimizingTime
        + ", lastFullOptimizingTime="
        + lastFullOptimizingTime
        + ", optimizingStatus='"
        + optimizingStatus
        + '\''
        + ", optimizingStatusStartTime="
        + optimizingStatusStartTime
        + ", optimizingProcessId="
        + optimizingProcessId
        + ", optimizerGroup='"
        + optimizerGroup
        + '\''
        + ", tableConfig='"
        + tableConfig
        + '\''
        + ", optimizingConfig='"
        + optimizingConfig
        + '\''
        + ", pendingInput='"
        + pendingInput
        + '\''
        + '}';
  }
}
