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

package com.netease.arctic.ams.server.optimize;

import com.netease.arctic.ams.api.NoSuchObjectException;
import com.netease.arctic.ams.server.service.ServiceContainer;
import com.netease.arctic.table.TableIdentifier;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class OptimizeCommitWorker implements Runnable {
  private static final Logger LOG = LoggerFactory.getLogger(OptimizeCommitWorker.class);
  private final String workerName;

  public OptimizeCommitWorker(int index) {
    this.workerName = "Optimize Committer Worker-" + index;
  }

  @Override
  public void run() {
    LOG.info("{} start work", workerName);
    TableIdentifier currentTable = null;
    try {
      Thread.sleep(10000);
      while (true) {
        try {
          TableIdentifier tableIdentifier = ServiceContainer.getOptimizeService().takeTableToCommit();
          currentTable = tableIdentifier;
          TableOptimizeItem tableItem = ServiceContainer.getOptimizeService().getTableOptimizeItem(tableIdentifier);
          LOG.info("{} start commit", tableIdentifier);
          tableItem.checkTaskExecuteTimeout();
          tableItem.commitOptimizeTasks();
        } catch (InterruptedException e) {
          throw e;
        } catch (NoSuchObjectException e) {
          LOG.error("{} can't find table, ignore and continue", workerName, e);
        } catch (Throwable t) {
          LOG.error("{} {} unexpected commit error ", workerName, currentTable, t);
        } finally {
          currentTable = null;
        }
      }
    } catch (InterruptedException e) {
      LOG.info("{} was interrupted", workerName);
    } finally {
      LOG.info("{} exit, current table {}", workerName, currentTable);
    }
  }
}
