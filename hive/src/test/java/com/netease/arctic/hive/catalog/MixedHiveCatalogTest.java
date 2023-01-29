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

import com.google.common.collect.Maps;
import com.netease.arctic.TableTestHelpers;
import com.netease.arctic.ams.api.CatalogMeta;
import com.netease.arctic.ams.api.properties.TableFormat;
import com.netease.arctic.catalog.CatalogTestHelpers;
import com.netease.arctic.catalog.MixedCatalogTest;
import com.netease.arctic.hive.TestHMS;
import org.apache.iceberg.PartitionSpec;
import org.junit.ClassRule;
import org.junit.runner.RunWith;
import org.junit.runners.JUnit4;

import java.util.Map;

@RunWith(JUnit4.class)
public class MixedHiveCatalogTest extends MixedCatalogTest {

  @ClassRule
  public static TestHMS TEST_HMS = new TestHMS();

  @Override
  protected CatalogMeta buildCatalogMeta() {
    Map<String, String> properties = Maps.newHashMap();
    return CatalogTestHelpers.buildHiveCatalogMeta(TEST_CATALOG_NAME,
        properties, TEST_HMS.getHiveConf());
  }

  public MixedHiveCatalogTest() {
    super(TableFormat.MIXED_HIVE);
  }

  @Override
  protected PartitionSpec getCreateTableSpec() {
    return TableTestHelpers.IDENTIFY_SPEC;
  }
}
