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

package com.netease.arctic.server.table.executor;

import com.netease.arctic.AmoroTable;
import com.netease.arctic.TableSnapshot;
import com.netease.arctic.ams.api.TableFormat;
import com.netease.arctic.server.optimizing.OptimizingStatus;
import com.netease.arctic.server.optimizing.plan.OptimizingEvaluator;
import com.netease.arctic.server.table.TableManager;
import com.netease.arctic.server.table.TableRuntime;
import com.netease.arctic.table.ArcticTable;

/**
 * Service for expiring tables periodically.
 */
public class TableRuntimeRefreshExecutor extends BaseTableExecutor {

  // 1 minutes
  private final long interval;

  public TableRuntimeRefreshExecutor(TableManager tableRuntimes, int poolSize, long interval) {
    super(tableRuntimes, poolSize);
    this.interval = interval;
  }

  @Override
  protected boolean enabled(TableRuntime tableRuntime) {
    return tableRuntime.getFormat() == TableFormat.ICEBERG ||
        tableRuntime.getFormat() == TableFormat.MIXED_ICEBERG ||
        tableRuntime.getFormat() == TableFormat.MIXED_HIVE;
  }

  protected long getNextExecutingTime(TableRuntime tableRuntime) {
    return Math.min(tableRuntime.getOptimizingConfig().getMinorLeastInterval() * 4L / 5, interval);
  }

  @Override
  public void handleStatusChanged(TableRuntime tableRuntime, OptimizingStatus originalStatus) {
    if (originalStatus != null && originalStatus.equals(OptimizingStatus.COMMITTING) &&
        tableRuntime.getOptimizingStatus().equals(OptimizingStatus.IDLE)) {
      tryEvaluatingPendingInput(tableRuntime, loadTable(tableRuntime));
    }
  }

  private void tryEvaluatingPendingInput(TableRuntime tableRuntime, AmoroTable<?> table) {
    if (tableRuntime.isOptimizingEnabled() && !tableRuntime.getOptimizingStatus().isProcessing()) {
      OptimizingEvaluator evaluator = new OptimizingEvaluator(tableRuntime, (ArcticTable) table.originalTable());
      if (evaluator.isNecessary()) {
        OptimizingEvaluator.PendingInput pendingInput = evaluator.getPendingInput();
        logger.debug("{} optimizing is necessary and get pending input {}", tableRuntime.getTableIdentifier(),
            pendingInput);
        tableRuntime.setPendingInput(pendingInput);
      }
    }
  }

  @Override
  public void execute(TableRuntime tableRuntime) {
    try {
      TableSnapshot lastOptimizedSnapshot = tableRuntime.getLastOptimizedSnapshot();
      AmoroTable<?> table = loadTable(tableRuntime);
      tableRuntime.refresh(table);
      if (!lastOptimizedSnapshot.equals(tableRuntime.getCurrentSnapshot())) {
        tryEvaluatingPendingInput(tableRuntime, table);
      }
    } catch (Throwable throwable) {
      logger.error("Refreshing table {} failed.", tableRuntime.getTableIdentifier(), throwable);
    }
  }
}
