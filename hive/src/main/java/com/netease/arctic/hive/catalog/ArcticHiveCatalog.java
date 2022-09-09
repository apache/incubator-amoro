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

package com.netease.arctic.hive.catalog;

import com.netease.arctic.AmsClient;
import com.netease.arctic.ams.api.CatalogMeta;
import com.netease.arctic.ams.api.NoSuchObjectException;
import com.netease.arctic.ams.api.TableMeta;
import com.netease.arctic.ams.api.properties.MetaTableProperties;
import com.netease.arctic.catalog.BaseArcticCatalog;
import com.netease.arctic.hive.CachedHiveClientPool;
import com.netease.arctic.hive.HMSClient;
import com.netease.arctic.hive.HiveTableProperties;
import com.netease.arctic.hive.table.KeyedHiveTable;
import com.netease.arctic.hive.table.UnkeyedHiveTable;
import com.netease.arctic.hive.utils.HiveSchemaUtil;
import com.netease.arctic.hive.utils.HiveTableUtil;
import com.netease.arctic.io.ArcticFileIO;
import com.netease.arctic.io.ArcticHadoopFileIO;
import com.netease.arctic.table.BaseKeyedTable;
import com.netease.arctic.table.ChangeTable;
import com.netease.arctic.table.TableBuilder;
import com.netease.arctic.table.TableIdentifier;
import com.netease.arctic.table.TableProperties;
import org.apache.hadoop.hive.metastore.HiveMetaStoreClient;
import org.apache.hadoop.hive.metastore.TableType;
import org.apache.hadoop.hive.metastore.api.Database;
import org.apache.iceberg.FileFormat;
import org.apache.iceberg.PartitionField;
import org.apache.iceberg.Schema;
import org.apache.iceberg.Table;
import org.apache.iceberg.exceptions.NoSuchTableException;
import org.apache.iceberg.mapping.MappingUtil;
import org.apache.iceberg.mapping.NameMappingParser;
import org.apache.iceberg.relocated.com.google.common.base.Preconditions;
import org.apache.iceberg.util.PropertyUtil;
import org.apache.thrift.TException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

/**
 * Implementation of {@link com.netease.arctic.catalog.ArcticCatalog} to support Hive table as base store.
 */
public class ArcticHiveCatalog extends BaseArcticCatalog {

  private static final Logger LOG = LoggerFactory.getLogger(ArcticHiveCatalog.class);

  private CachedHiveClientPool hiveClientPool;

  @Override
  public void initialize(
      AmsClient client, CatalogMeta meta, Map<String, String> properties) {
    super.initialize(client, meta, properties);
    this.hiveClientPool = new CachedHiveClientPool(tableMetaStore, properties);
  }

  @Override
  public List<String> listDatabases() {
    try {
      return hiveClientPool.run(HiveMetaStoreClient::getAllDatabases);
    } catch (TException | InterruptedException e) {
      throw new RuntimeException("Failed to list databases", e);
    }
  }

  @Override
  public void createDatabase(String databaseName) {
    try {
      hiveClientPool.run(client -> {
        Database database = new Database();
        database.setName(databaseName);
        client.createDatabase(database);
        return null;
      });
    } catch (TException | InterruptedException e) {
      throw new RuntimeException("Failed to create database:" + databaseName, e);
    }
  }

  @Override
  public void dropDatabase(String databaseName) {
    try {
      hiveClientPool.run(client -> {
        client.dropDatabase(databaseName,
            false /* deleteData */,
            false /* ignoreUnknownDb */,
            false /* cascade */);
        return null;
      });
    } catch (TException | InterruptedException e) {
      throw new RuntimeException("Failed to drop database:" + databaseName, e);
    }
  }

  @Override
  protected void doDropTable(TableMeta meta, boolean purge) {
    super.doDropTable(meta, purge);
    try {
      hiveClientPool.run(client -> {
        client.dropTable(meta.getTableIdentifier().getDatabase(),
            meta.getTableIdentifier().getTableName(),
            purge /* deleteData */,
            false /* ignoreUnknownTab */);
        return null;
      });
    } catch (TException | InterruptedException e) {
      throw new RuntimeException("Failed to drop table:" + meta.getTableIdentifier(), e);
    }
  }

  public void dropTableButNotDropHiveTable(TableIdentifier tableIdentifier) {
    TableMeta meta;
    try {
      meta = client.getTable(tableIdentifier.buildTableIdentifier());
    } catch (NoSuchObjectException e) {
      throw new NoSuchTableException(e, "load table failed %s.", tableIdentifier);
    } catch (TException e) {
      throw new IllegalStateException(String.format("failed load table %s.", tableIdentifier), e);
    }
    super.doDropTable(meta, false);
  }

  @Override
  public TableBuilder newTableBuilder(
      TableIdentifier identifier, Schema schema) {
    return new ArcticHiveTableBuilder(identifier, schema);
  }

  @Override
  protected KeyedHiveTable loadKeyedTable(TableMeta tableMeta) {
    TableIdentifier tableIdentifier = TableIdentifier.of(tableMeta.getTableIdentifier());
    String tableLocation = checkLocation(tableMeta, MetaTableProperties.LOCATION_KEY_TABLE);
    String baseLocation = checkLocation(tableMeta, MetaTableProperties.LOCATION_KEY_BASE);
    String changeLocation = checkLocation(tableMeta, MetaTableProperties.LOCATION_KEY_CHANGE);

    ArcticFileIO fileIO = new ArcticHadoopFileIO(tableMetaStore);
    Table baseIcebergTable = tableMetaStore.doAs(() -> tables.load(baseLocation));
    UnkeyedHiveTable baseTable = new UnkeyedHiveTable(tableIdentifier,
        useArcticTableOperations(baseIcebergTable, baseLocation, fileIO, tableMetaStore.getConfiguration()),
        fileIO, tableLocation, client, hiveClientPool, false);

    Table changeIcebergTable = tableMetaStore.doAs(() -> tables.load(changeLocation));
    ChangeTable changeTable = new BaseKeyedTable.ChangeInternalTable(tableIdentifier,
        useArcticTableOperations(changeIcebergTable, changeLocation, fileIO, tableMetaStore.getConfiguration()),
        fileIO, client);
    return new KeyedHiveTable(tableMeta, tableLocation,
        buildPrimaryKeySpec(baseTable.schema(), tableMeta), client, hiveClientPool, baseTable, changeTable);
  }

  @Override
  protected UnkeyedHiveTable loadUnKeyedTable(TableMeta tableMeta) {
    TableIdentifier tableIdentifier = TableIdentifier.of(tableMeta.getTableIdentifier());
    String baseLocation = checkLocation(tableMeta, MetaTableProperties.LOCATION_KEY_BASE);
    String tableLocation = checkLocation(tableMeta, MetaTableProperties.LOCATION_KEY_TABLE);
    Table table = tableMetaStore.doAs(() -> tables.load(baseLocation));
    ArcticFileIO arcticFileIO = new ArcticHadoopFileIO(tableMetaStore);
    return new UnkeyedHiveTable(tableIdentifier, useArcticTableOperations(table, baseLocation,
        arcticFileIO, tableMetaStore.getConfiguration()), arcticFileIO, tableLocation, client, hiveClientPool);
  }

  public HMSClient getHMSClient() {
    return hiveClientPool;
  }

  class ArcticHiveTableBuilder extends BaseArcticTableBuilder {

    public ArcticHiveTableBuilder(TableIdentifier identifier, Schema schema) {
      super(identifier, schema);
    }

    boolean allowExsitedHiveTable = false;

    @Override
    public TableBuilder withProperty(String key, String value) {
      if (key.equals(HiveTableProperties.ALLOW_HIVE_TABLE_EXISTED) && value.equals("true")) {
        allowExsitedHiveTable = true;
      } else {
        this.properties.put(key, value);
      }
      return this;
    }

    @Override
    protected void doCreateCheck() {

      super.doCreateCheck();
      try {
        if (allowExsitedHiveTable) {
          LOG.info("No need to check hive table exist");
        } else {
          org.apache.hadoop.hive.metastore.api.Table hiveTable =
              hiveClientPool.run(client -> client.getTable(
                  identifier.getDatabase(),
                  identifier.getTableName()));
          if (hiveTable != null) {
            throw new IllegalArgumentException("Table is already existed in hive meta store:" + identifier);
          }
        }
      } catch (org.apache.hadoop.hive.metastore.api.NoSuchObjectException noSuchObjectException) {
        // ignore this exception
      } catch (TException | InterruptedException e) {
        throw new RuntimeException("Failed to check table exist:" + identifier, e);
      }
      if (!partitionSpec.isUnpartitioned()) {
        for (PartitionField partitionField : partitionSpec.fields()) {
          if (!partitionField.transform().isIdentity()) {
            throw new IllegalArgumentException("Unsupported partition transform:" +
                partitionField.transform().toString());
          }
          Preconditions.checkArgument(schema.columns().indexOf(schema.findField(partitionField.sourceId())) >=
              (schema.columns().size() - partitionSpec.fields().size()), "Partition field should be at last of " +
              "schema");
        }
      }
    }

    @Override
    protected KeyedHiveTable createKeyedTable(TableMeta meta) {
      TableIdentifier tableIdentifier = TableIdentifier.of(meta.getTableIdentifier());
      String tableLocation = checkLocation(meta, MetaTableProperties.LOCATION_KEY_TABLE);
      String baseLocation = checkLocation(meta, MetaTableProperties.LOCATION_KEY_BASE);
      String changeLocation = checkLocation(meta, MetaTableProperties.LOCATION_KEY_CHANGE);
      String hiveLocation = HiveTableUtil.hiveRootLocation(tableLocation);

      meta.putToProperties(TableProperties.TABLE_CREATE_TIME, String.valueOf(System.currentTimeMillis()));
      meta.putToProperties(org.apache.iceberg.TableProperties.FORMAT_VERSION, "2");
      meta.putToProperties(HiveTableProperties.BASE_HIVE_LOCATION_ROOT, hiveLocation);
      // default 1 day
      meta.putToProperties(TableProperties.FULL_OPTIMIZE_TRIGGER_MAX_INTERVAL, "86400000");

      ArcticFileIO fileIO = new ArcticHadoopFileIO(tableMetaStore);
      Table baseIcebergTable = tableMetaStore.doAs(() -> {
        try {
          Table createTable = tables.create(schema, partitionSpec, meta.getProperties(), baseLocation);
          createTable.updateProperties().set(org.apache.iceberg.TableProperties.DEFAULT_NAME_MAPPING,
              NameMappingParser.toJson(MappingUtil.create(createTable.schema()))).commit();
          return createTable;
        } catch (Exception e) {
          throw new IllegalStateException("create base table failed", e);
        }
      });
      UnkeyedHiveTable baseTable = new UnkeyedHiveTable(tableIdentifier,
          useArcticTableOperations(baseIcebergTable, baseLocation, fileIO, tableMetaStore.getConfiguration()),
          fileIO, tableLocation, client, hiveClientPool, false);

      Table changeIcebergTable = tableMetaStore.doAs(() -> {
        try {
          Table createTable =  tables.create(schema, partitionSpec, meta.getProperties(), changeLocation);
          createTable.updateProperties().set(org.apache.iceberg.TableProperties.DEFAULT_NAME_MAPPING,
              NameMappingParser.toJson(MappingUtil.create(createTable.schema()))).commit();
          return createTable;
        } catch (Exception e) {
          throw new IllegalStateException("create change table failed", e);
        }
      });
      ChangeTable changeTable = new BaseKeyedTable.ChangeInternalTable(tableIdentifier,
          useArcticTableOperations(changeIcebergTable, changeLocation, fileIO, tableMetaStore.getConfiguration()),
          fileIO, client);

      Map<String, String> metaProperties = meta.properties;
      try {
        hiveClientPool.run(client -> {
          if (allowExsitedHiveTable) {
            org.apache.hadoop.hive.metastore.api.Table hiveTable = client.getTable(tableIdentifier.getDatabase(),
                tableIdentifier.getTableName());
            Map<String, String> hiveParameters = hiveTable.getParameters();
            hiveParameters.putAll(constructProperties());
            hiveTable.setParameters(hiveParameters);
            client.alter_table(tableIdentifier.getDatabase(), tableIdentifier.getTableName(), hiveTable);
          } else {
            org.apache.hadoop.hive.metastore.api.Table hiveTable = newHiveTable(meta);
            hiveTable.setSd(HiveTableUtil.storageDescriptor(schema, partitionSpec, hiveLocation,
                FileFormat.valueOf(PropertyUtil.propertyAsString(metaProperties, TableProperties.DEFAULT_FILE_FORMAT,
                    TableProperties.DEFAULT_FILE_FORMAT_DEFAULT).toUpperCase(Locale.ENGLISH))));
            setProToHive(hiveTable);
            client.createTable(hiveTable);
          }
          return null;
        });
      } catch (TException | InterruptedException e) {
        throw new RuntimeException("Failed to create hive table:" + meta.getTableIdentifier(), e);
      }
      return new KeyedHiveTable(meta, tableLocation,
          primaryKeySpec, client, hiveClientPool, baseTable, changeTable);
    }

    @Override
    protected UnkeyedHiveTable createUnKeyedTable(TableMeta meta) {
      TableIdentifier tableIdentifier = TableIdentifier.of(meta.getTableIdentifier());
      String baseLocation = checkLocation(meta, MetaTableProperties.LOCATION_KEY_BASE);
      String tableLocation = checkLocation(meta, MetaTableProperties.LOCATION_KEY_TABLE);
      String hiveLocation = HiveTableUtil.hiveRootLocation(tableLocation);

      meta.putToProperties(TableProperties.TABLE_CREATE_TIME, String.valueOf(System.currentTimeMillis()));
      meta.putToProperties(HiveTableProperties.BASE_HIVE_LOCATION_ROOT, hiveLocation);
      meta.putToProperties(org.apache.iceberg.TableProperties.FORMAT_VERSION, "2");

      Table table = tableMetaStore.doAs(() -> {
        try {
          Table createTable = tables.create(schema, partitionSpec, meta.getProperties(), baseLocation);
          // set name mapping using true schema
          createTable.updateProperties().set(org.apache.iceberg.TableProperties.DEFAULT_NAME_MAPPING,
              NameMappingParser.toJson(MappingUtil.create(createTable.schema()))).commit();
          return createTable;
        } catch (Exception e) {
          throw new IllegalStateException("create table failed", e);
        }
      });
      try {
        hiveClientPool.run(client -> {
          if (allowExsitedHiveTable) {
            org.apache.hadoop.hive.metastore.api.Table hiveTable = client.getTable(tableIdentifier.getDatabase(),
                tableIdentifier.getTableName());
            Map<String, String> hiveParameters = hiveTable.getParameters();
            hiveParameters.putAll(constructProperties());
            hiveTable.setParameters(hiveParameters);
            client.alter_table(tableIdentifier.getDatabase(), tableIdentifier.getTableName(), hiveTable);
          } else {
            org.apache.hadoop.hive.metastore.api.Table hiveTable = newHiveTable(meta);
            hiveTable.setSd(HiveTableUtil.storageDescriptor(schema, partitionSpec, hiveLocation,
                FileFormat.valueOf(PropertyUtil.propertyAsString(properties, TableProperties.BASE_FILE_FORMAT,
                    TableProperties.BASE_FILE_FORMAT_DEFAULT).toUpperCase(Locale.ENGLISH))));
            setProToHive(hiveTable);
            client.createTable(hiveTable);
          }
          return null;
        });
      } catch (TException | InterruptedException e) {
        throw new RuntimeException("Failed to create hive table:" + meta.getTableIdentifier(), e);
      }
      ArcticFileIO fileIO = new ArcticHadoopFileIO(tableMetaStore);
      return new UnkeyedHiveTable(tableIdentifier, useArcticTableOperations(table, baseLocation, fileIO,
          tableMetaStore.getConfiguration()), fileIO, tableLocation, client, hiveClientPool);
    }

    private org.apache.hadoop.hive.metastore.api.Table newHiveTable(TableMeta meta) {
      final long currentTimeMillis = System.currentTimeMillis();

      org.apache.hadoop.hive.metastore.api.Table newTable = new org.apache.hadoop.hive.metastore.api.Table(
          meta.getTableIdentifier().getTableName(),
          meta.getTableIdentifier().getDatabase(),
          System.getProperty("user.name"),
          (int) currentTimeMillis / 1000,
          (int) currentTimeMillis / 1000,
          Integer.MAX_VALUE,
          null,
          HiveSchemaUtil.hivePartitionFields(schema, partitionSpec),
          new HashMap<>(),
          null,
          null,
          TableType.EXTERNAL_TABLE.toString());

      newTable.getParameters().put("EXTERNAL", "TRUE"); // using the external table type also requires this
      return newTable;
    }

    @Override
    protected String getDatabaseLocation() {
      try {
        return hiveClientPool.run(client -> client.getDatabase(identifier.getDatabase()).getLocationUri());
      } catch (TException | InterruptedException e) {
        throw new RuntimeException("Failed to get database location:" + identifier.getDatabase(), e);
      }
    }

    @Override
    protected void doRollbackCreateTable(TableMeta meta) {
      super.doRollbackCreateTable(meta);
      if (allowExsitedHiveTable) {
        LOG.info("No need to drop hive table");
        com.netease.arctic.ams.api.TableIdentifier tableIdentifier = meta.getTableIdentifier();
        try {
          hiveClientPool.run(client -> {
            org.apache.hadoop.hive.metastore.api.Table hiveTable = client.getTable(tableIdentifier.getDatabase(),
                tableIdentifier.getTableName());
            Map<String, String> hiveParameters = hiveTable.getParameters();
            hiveParameters.remove(HiveTableProperties.ARCTIC_TABLE_FLAG);
            client.alter_table(tableIdentifier.getDatabase(), tableIdentifier.getTableName(), hiveTable);
            return null;
          });
        } catch (TException | InterruptedException e) {
          LOG.warn("Failed to alter hive table while rolling back create table operation", e);
        }
      } else {
        try {
          hiveClientPool.run(client -> {
            client.dropTable(
                meta.getTableIdentifier().getDatabase(),
                meta.getTableIdentifier().getTableName(),
                true,
                true);
            return null;
          });
        } catch (TException | InterruptedException e) {
          LOG.warn("Failed to drop hive table while rolling back create table operation", e);
        }
      }
    }

    private void setProToHive(org.apache.hadoop.hive.metastore.api.Table hiveTable) {
      Map<String, String> parameters = constructProperties();
      hiveTable.setParameters(parameters);
    }

    private Map<String, String> constructProperties() {
      Map<String, String> parameters = new HashMap<>();
      parameters.put(HiveTableProperties.ARCTIC_TABLE_FLAG, "true");
      parameters.put(HiveTableProperties.ARCTIC_TABLE_PRIMARY_KEYS, primaryKeySpec.description());
      return parameters;
    }
  }
}
