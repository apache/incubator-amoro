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

package com.netease.arctic.catalog;

import com.netease.arctic.ams.api.TableFormat;
import com.netease.arctic.table.TableIdentifier;

/**
 * result of {@link CatalogOperations#listTables(String)}, include basic information about table.
 */
public class CatalogTableMeta {

  private final String catalog;
  private final String database;
  private final String table;
  private final TableFormat format;

  public CatalogTableMeta(String catalog, String database, String table, TableFormat format) {
    this.catalog = catalog;
    this.database = database;
    this.table = table;
    this.format = format;
  }

  public TableFormat getFormat() {
    return format;
  }

  public String getTable() {
    return table;
  }

  public String getDatabase() {
    return database;
  }

  public String getCatalog() {
    return catalog;
  }

  public TableIdentifier toIdentifier() {
    return TableIdentifier.of(catalog, database, table);
  }
}