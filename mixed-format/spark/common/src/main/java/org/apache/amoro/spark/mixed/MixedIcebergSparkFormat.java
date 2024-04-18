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

package org.apache.amoro.spark.mixed;

import org.apache.amoro.TableFormat;
import org.apache.amoro.spark.SparkTableFormat;
import org.apache.spark.sql.connector.catalog.Table;

/** Mixed Iceberg format implementation of spark table format */
public class MixedIcebergSparkFormat implements SparkTableFormat {
  @Override
  public TableFormat format() {
    return TableFormat.MIXED_ICEBERG;
  }

  @Override
  public boolean isSubTableName(String tableName) {
    return MixedTableStoreType.from(tableName) != null;
  }

  @Override
  public boolean isFormatOf(Table table) {
    return MixedFormatSparkUtil.isMixedIcebergTable(table);
  }
}
