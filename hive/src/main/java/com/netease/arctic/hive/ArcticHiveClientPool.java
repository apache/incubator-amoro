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

package com.netease.arctic.hive;

import com.netease.arctic.table.TableMetaStore;
import org.apache.hadoop.hive.conf.HiveConf;
import org.apache.hadoop.hive.metastore.HiveMetaStoreClient;
import org.apache.iceberg.hive.HiveClientPool;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * Extended implementation of {@link HiveClientPool} with {@link TableMetaStore} to support authenticated hive
 * cluster.
 */
public class ArcticHiveClientPool extends HiveClientPool {
  private final TableMetaStore metaStore;
  private static final Logger LOG = LoggerFactory.getLogger(ArcticHiveClientPool.class);

  public ArcticHiveClientPool(TableMetaStore tableMetaStore, int poolSize) {
    super(poolSize, tableMetaStore.getConfiguration());
    this.metaStore = tableMetaStore;
  }

  @Override
  protected HiveMetaStoreClient newClient() {
    return metaStore.doAs(() -> super.newClient());
  }

  @Override
  protected HiveMetaStoreClient reconnect(HiveMetaStoreClient client) {
    try {
      return metaStore.doAs(() -> super.reconnect(client));
    } catch (Exception e) {
      LOG.error("hive metastore client reconnected failed", e);
      throw e;
    }
  }
}