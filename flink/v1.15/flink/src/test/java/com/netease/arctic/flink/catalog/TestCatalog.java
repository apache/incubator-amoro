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

package com.netease.arctic.flink.catalog;

import static com.netease.arctic.ams.api.MockArcticMetastoreServer.TEST_CATALOG_NAME;
import static org.apache.flink.table.api.config.TableConfigOptions.TABLE_DYNAMIC_TABLE_OPTIONS_ENABLED;

import com.netease.arctic.TableTestHelper;
import com.netease.arctic.ams.api.TableFormat;
import com.netease.arctic.catalog.BasicCatalogTestHelper;
import com.netease.arctic.catalog.CatalogTestBase;
import com.netease.arctic.flink.catalog.factories.ArcticCatalogFactoryOptions;
import com.netease.arctic.table.TableIdentifier;
import org.apache.flink.api.common.restartstrategy.RestartStrategies;
import org.apache.flink.configuration.Configuration;
import org.apache.flink.runtime.state.StateBackend;
import org.apache.flink.runtime.state.filesystem.FsStateBackend;
import org.apache.flink.streaming.api.CheckpointingMode;
import org.apache.flink.streaming.api.environment.CheckpointConfig;
import org.apache.flink.streaming.api.environment.StreamExecutionEnvironment;
import org.apache.flink.table.api.EnvironmentSettings;
import org.apache.flink.table.api.TableResult;
import org.apache.flink.table.api.bridge.java.StreamTableEnvironment;
import org.apache.flink.types.Row;
import org.apache.flink.util.CloseableIterator;
import org.apache.flink.util.CollectionUtil;
import org.apache.iceberg.flink.MiniClusterResource;
import org.apache.iceberg.relocated.com.google.common.collect.Lists;
import org.apache.iceberg.relocated.com.google.common.collect.Maps;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.TemporaryFolder;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ExecutionException;

public class TestCatalog extends CatalogTestBase {
  private static final Logger LOG = LoggerFactory.getLogger(TestCatalog.class);

  public TestCatalog() {
    super(new BasicCatalogTestHelper(TableFormat.MIXED_ICEBERG));
  }

  @Rule public TemporaryFolder tempFolder = new TemporaryFolder();
  protected Map<String, String> props;

  private static final String DB = TableTestHelper.TEST_DB_NAME;
  private static final String TABLE = TableTestHelper.TEST_TABLE_NAME;
  private volatile StreamExecutionEnvironment env = null;
  private volatile StreamTableEnvironment tEnv = null;

  @Before
  public void before() throws Exception {
    props = Maps.newHashMap();
    props.put("type", ArcticCatalogFactoryOptions.IDENTIFIER);
    props.put(ArcticCatalogFactoryOptions.METASTORE_URL.key(), getCatalogUrl());
  }

  @Test
  public void testDDL() throws IOException {
    sql("CREATE CATALOG arcticCatalog WITH %s", toWithClause(props));
    sql("USE CATALOG arcticCatalog");
    sql("CREATE DATABASE arcticCatalog." + DB);

    sql(
        "CREATE TABLE arcticCatalog."
            + DB
            + "."
            + TABLE
            + " ("
            + " id INT,"
            + " name STRING,"
            + " t TIMESTAMP,"
            + " PRIMARY KEY (id) NOT ENFORCED "
            + ") PARTITIONED BY(t) "
            + " WITH ("
            + " 'connector' = 'arctic'"
            + ")");
    sql("USE  arcticCatalog." + DB);
    sql("SHOW tables");

    Assert.assertTrue(
        getCatalog().loadTable(TableIdentifier.of(TEST_CATALOG_NAME, DB, TABLE)).isKeyedTable());
    sql("DROP TABLE " + DB + "." + TABLE);

    sql("DROP DATABASE " + DB);

    Assert.assertTrue(CollectionUtil.isNullOrEmpty(getCatalog().listDatabases()));
    sql("USE CATALOG default_catalog");
    sql("DROP CATALOG arcticCatalog");
  }

  @Test
  public void testDML() throws IOException {
    sql(
        "CREATE TABLE "
            + TABLE
            + " ("
            + " id INT,"
            + " name STRING,"
            + " t TIMESTAMP,"
            + " PRIMARY KEY (id) NOT ENFORCED "
            + ") PARTITIONED BY(t) "
            + " WITH ("
            + " 'connector' = 'datagen',"
            + " 'fields.id.kind'='sequence',"
            + " 'fields.id.start'='1',"
            + " 'fields.id.end'='1'"
            + ")");

    sql("CREATE CATALOG arcticCatalog WITH %s", toWithClause(props));
    sql("USE CATALOG arcticCatalog");
    sql("CREATE DATABASE arcticCatalog." + DB);
    sql(
        "CREATE TABLE arcticCatalog."
            + DB
            + "."
            + TABLE
            + " ("
            + " id INT,"
            + " name STRING,"
            + " t TIMESTAMP,"
            + " PRIMARY KEY (id) NOT ENFORCED "
            + ") PARTITIONED BY(t) "
            + " WITH ("
            + " 'connector' = 'arctic'"
            + ")");

    sql(
        "INSERT INTO arcticCatalog."
            + DB
            + "."
            + TABLE
            + " SELECT * FROM default_catalog.default_database."
            + TABLE);
    List<Row> rows =
        sql(
            "SELECT * FROM arcticCatalog."
                + DB
                + "."
                + TABLE
                + " /*+ OPTIONS("
                + "'streaming'='false'"
                + ") */");
    Assert.assertEquals(1, rows.size());

    sql("DROP TABLE " + DB + "." + TABLE);
    sql("DROP DATABASE " + DB);
    sql("DROP TABLE default_catalog.default_database." + TABLE);
    sql("DROP DATABASE arcticCatalog");
    sql("SHOW CATALOGS");
    sql("USE CATALOG default_catalog");
    sql("DROP CATALOG arcticCatalog");
  }

  @Test
  public void testAlterTable() throws Exception {
    final String keyTable = "test_key_table";
    final String unKeyTable = "test_unkey_table";
    sql("CREATE CATALOG arcticCatalog WITH %s", toWithClause(props));
    sql("USE CATALOG arcticCatalog");
    sql("CREATE DATABASE arcticCatalog." + DB);
    sql(
        "CREATE TABLE arcticCatalog."
            + DB
            + "."
            + keyTable
            + " ("
            + " id INT,"
            + " name STRING,"
            + " t TIMESTAMP,"
            + " PRIMARY KEY (id) NOT ENFORCED "
            + ") PARTITIONED BY(t) "
            + " WITH ("
            + " 'connector' = 'arctic'"
            + ")");
    sql(
        "CREATE TABLE arcticCatalog."
            + DB
            + "."
            + unKeyTable
            + " ("
            + " id INT,"
            + " name STRING,"
            + " t TIMESTAMP"
            + ") PARTITIONED BY(t) "
            + " WITH ("
            + " 'connector' = 'arctic',"
            + " 'self-optimizing.enabled' = 'false'"
            + ")");
    sql("USE  arcticCatalog." + DB);

    sql(
        "ALTER TABLE arcticCatalog."
            + DB
            + "."
            + keyTable
            + " "
            + "SET ( 'self-optimizing.enabled' = 'true')");
    sql(
        "ALTER TABLE arcticCatalog."
            + DB
            + "."
            + keyTable
            + " "
            + "SET ( 'self-optimizing.group' = 'flink')");
    sql(
        "ALTER TABLE arcticCatalog."
            + DB
            + "."
            + keyTable
            + " "
            + "SET ( 'write.upsert.enabled' = 'true')");
    Map<String, String> keyTableProperties =
        getCatalog().loadTable(TableIdentifier.of(TEST_CATALOG_NAME, DB, keyTable)).properties();
    Assert.assertEquals(keyTableProperties.get("self-optimizing.enabled"), "true");
    Assert.assertEquals(keyTableProperties.get("self-optimizing.group"), "flink");
    Assert.assertEquals(keyTableProperties.get("write.upsert.enabled"), "true");

    sql(
        "ALTER TABLE arcticCatalog."
            + DB
            + "."
            + unKeyTable
            + " "
            + "SET ( 'write.metadata.delete-after-commit.enabled' = 'false')");
    Map<String, String> unKeyTableProperties =
        getCatalog().loadTable(TableIdentifier.of(TEST_CATALOG_NAME, DB, unKeyTable)).properties();
    Assert.assertEquals(
        unKeyTableProperties.get("write.metadata.delete-after-commit.enabled"), "false");
  }

  protected List<Row> sql(String query, Object... args) {
    TableResult tableResult = getTableEnv().executeSql(String.format(query, args));
    tableResult
        .getJobClient()
        .ifPresent(
            c -> {
              try {
                c.getJobExecutionResult().get();
              } catch (InterruptedException | ExecutionException e) {
                throw new RuntimeException(e);
              }
            });
    try (CloseableIterator<Row> iter = tableResult.collect()) {
      List<Row> results = Lists.newArrayList(iter);
      return results;
    } catch (Exception e) {
      LOG.warn("Failed to collect table result", e);
      return null;
    }
  }

  protected StreamTableEnvironment getTableEnv() {
    if (tEnv == null) {
      synchronized (this) {
        if (tEnv == null) {
          this.tEnv =
              StreamTableEnvironment.create(
                  getEnv(), EnvironmentSettings.newInstance().inStreamingMode().build());
          Configuration configuration = tEnv.getConfig().getConfiguration();
          // set low-level key-value options
          configuration.setString(TABLE_DYNAMIC_TABLE_OPTIONS_ENABLED.key(), "true");
        }
      }
    }
    return tEnv;
  }

  protected StreamExecutionEnvironment getEnv() {
    if (env == null) {
      synchronized (this) {
        if (env == null) {
          StateBackend backend =
              new FsStateBackend(
                  "file:///" + System.getProperty("java.io.tmpdir") + "/flink/backend");
          env =
              StreamExecutionEnvironment.getExecutionEnvironment(
                  MiniClusterResource.DISABLE_CLASSLOADER_CHECK_CONFIG);
          env.setParallelism(1);
          env.getCheckpointConfig().setCheckpointingMode(CheckpointingMode.EXACTLY_ONCE);
          env.getCheckpointConfig().setCheckpointInterval(300);
          env.getCheckpointConfig()
              .enableExternalizedCheckpoints(
                  CheckpointConfig.ExternalizedCheckpointCleanup.RETAIN_ON_CANCELLATION);
          env.setStateBackend(backend);
          env.setRestartStrategy(RestartStrategies.noRestart());
        }
      }
    }
    return env;
  }

  public static String toWithClause(Map<String, String> props) {
    StringBuilder builder = new StringBuilder();
    builder.append("(");
    int propCount = 0;
    for (Map.Entry<String, String> entry : props.entrySet()) {
      if (propCount > 0) {
        builder.append(",");
      }
      builder
          .append("'")
          .append(entry.getKey())
          .append("'")
          .append("=")
          .append("'")
          .append(entry.getValue())
          .append("'");
      propCount++;
    }
    builder.append(")");
    return builder.toString();
  }
}
