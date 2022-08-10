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

package com.netease.arctic.hive.table;

import com.netease.arctic.AmsClient;
import com.netease.arctic.ams.api.TableMeta;
import com.netease.arctic.hive.CachedHiveClientPool;
import com.netease.arctic.hive.ops.HiveSchemaUpdate;
import com.netease.arctic.hive.utils.HiveSchemaUtil;
import com.netease.arctic.io.ArcticFileIO;
import com.netease.arctic.op.UpdateKeyedTableProperties;
import com.netease.arctic.table.BaseKeyedTable;
import com.netease.arctic.table.BaseTable;
import com.netease.arctic.table.ChangeTable;
import com.netease.arctic.table.PrimaryKeySpec;
import com.netease.arctic.table.TableIdentifier;
import com.netease.arctic.trace.AmsTableTracer;
import com.netease.arctic.trace.TrackerOperations;
import org.apache.iceberg.Schema;
import org.apache.iceberg.Table;
import org.apache.iceberg.UpdateProperties;
import org.apache.iceberg.UpdateSchema;

/**
 * Implementation of {@link com.netease.arctic.table.KeyedTable} with Hive table as base store.
 */
public class KeyedHiveTable extends BaseKeyedTable {

  private CachedHiveClientPool hiveClientPool;

  public KeyedHiveTable(
      TableMeta tableMeta,
      String tableLocation,
      PrimaryKeySpec primaryKeySpec,
      AmsClient client,
      BaseTable baseTable, ChangeTable changeTable, CachedHiveClientPool hiveClientPool) {
    super(tableMeta, tableLocation, primaryKeySpec, client, baseTable, changeTable);
    this.hiveClientPool = hiveClientPool;
  }

  @Override
  public UpdateSchema updateSchema() {
    if (PrimaryKeySpec.noPrimaryKey().equals(primaryKeySpec())) {
      return baseTable().updateSchema();
    }
    return new HiveSchemaUpdate(this, hiveClientPool);
  }

  public static class HiveBaseInternalTable extends BaseInternalTable {

    public HiveBaseInternalTable(
        TableIdentifier tableIdentifier,
        Table baseIcebergTable,
        ArcticFileIO arcticFileIO,
        AmsClient client) {
      super(tableIdentifier, baseIcebergTable, arcticFileIO, client);
    }

    @Override
    public Schema schema() {
      return HiveSchemaUtil.hiveTableSchema(icebergTable.schema(), icebergTable.spec());
    }
  }
}
