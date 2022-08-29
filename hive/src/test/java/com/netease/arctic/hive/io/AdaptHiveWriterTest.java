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

package com.netease.arctic.hive.io;

import com.google.common.collect.Sets;
import com.netease.arctic.hive.HiveTableTestBase;
import com.netease.arctic.hive.io.writer.AdaptHiveGenericTaskWriterBuilder;
import com.netease.arctic.hive.table.HiveLocationKind;
import com.netease.arctic.io.writer.GenericBaseTaskWriter;
import com.netease.arctic.io.writer.GenericChangeTaskWriter;
import com.netease.arctic.table.ArcticTable;
import com.netease.arctic.table.BaseLocationKind;
import com.netease.arctic.table.ChangeLocationKind;
import com.netease.arctic.table.LocationKind;
import com.netease.arctic.table.WriteOperationKind;
import org.apache.iceberg.Files;
import org.apache.iceberg.Schema;
import org.apache.iceberg.data.Record;
import org.apache.iceberg.data.parquet.AdaptHiveGenericParquetReaders;
import org.apache.iceberg.io.CloseableIterable;
import org.apache.iceberg.io.TaskWriter;
import org.apache.iceberg.io.WriteResult;
import org.apache.iceberg.parquet.AdaptHiveParquet;
import org.junit.Assert;
import org.junit.Test;

import java.io.IOException;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Set;

public class AdaptHiveWriterTest extends HiveTableTestBase {

  @Test
  public void testWriteTypeFromOperateKind(){
    {
      AdaptHiveGenericTaskWriterBuilder builder = AdaptHiveGenericTaskWriterBuilder
          .builderFor(testKeyedHiveTable)
          .withTransactionId(1);

      Assert.assertTrue(builder.buildWriter(ChangeLocationKind.INSTANT) instanceof GenericChangeTaskWriter);
      Assert.assertTrue(builder.buildWriter(BaseLocationKind.INSTANT) instanceof GenericBaseTaskWriter);
      Assert.assertTrue(builder.buildWriter(HiveLocationKind.INSTANT) instanceof GenericBaseTaskWriter);

      Assert.assertTrue(builder.buildWriter(WriteOperationKind.APPEND) instanceof GenericChangeTaskWriter);
      Assert.assertTrue(builder.buildWriter(WriteOperationKind.OVERWRITE) instanceof GenericBaseTaskWriter);
      Assert.assertTrue(builder.buildWriter(WriteOperationKind.MINOR_OPTIMIZE) instanceof GenericBaseTaskWriter);
      Assert.assertTrue(builder.buildWriter(WriteOperationKind.MAJOR_OPTIMIZE) instanceof GenericBaseTaskWriter);
      Assert.assertTrue(builder.buildWriter(WriteOperationKind.FULL_OPTIMIZE) instanceof GenericBaseTaskWriter);
    }
    {
      AdaptHiveGenericTaskWriterBuilder builder = AdaptHiveGenericTaskWriterBuilder
          .builderFor(testHiveTable)
          .withTransactionId(1);

      Assert.assertTrue(builder.buildWriter(BaseLocationKind.INSTANT) instanceof GenericBaseTaskWriter);
      Assert.assertTrue(builder.buildWriter(HiveLocationKind.INSTANT) instanceof GenericBaseTaskWriter);

      Assert.assertTrue(builder.buildWriter(WriteOperationKind.APPEND) instanceof GenericBaseTaskWriter);
      Assert.assertTrue(builder.buildWriter(WriteOperationKind.OVERWRITE) instanceof GenericBaseTaskWriter);
      Assert.assertTrue(builder.buildWriter(WriteOperationKind.MAJOR_OPTIMIZE) instanceof GenericBaseTaskWriter);
      Assert.assertTrue(builder.buildWriter(WriteOperationKind.FULL_OPTIMIZE) instanceof GenericBaseTaskWriter);
    }
  }

  @Test
  public void testKeyedTableChangeWriteByLocationKind() throws IOException {
    testWrite(testKeyedHiveTable, ChangeLocationKind.INSTANT, HiveTestRecords.changeInsertRecords(), "change");
  }

  @Test
  public void testKeyedTableBaseWriteByLocationKind() throws IOException {
    testWrite(testKeyedHiveTable, BaseLocationKind.INSTANT, HiveTestRecords.baseRecords(), "base");
  }

  @Test
  public void testKeyedTableHiveWriteByLocationKind() throws IOException {
    testWrite(testKeyedHiveTable, HiveLocationKind.INSTANT, HiveTestRecords.baseRecords(), "hive");
  }

  @Test
  public void testUnPartitionKeyedTableChangeWriteByLocationKind() throws IOException {
    testWrite(testUnPartitionKeyedHiveTable, ChangeLocationKind.INSTANT, HiveTestRecords.changeInsertRecords(), "change");
  }

  @Test
  public void testUnPartitionKeyedTableBaseWriteByLocationKind() throws IOException {
    testWrite(testUnPartitionKeyedHiveTable, BaseLocationKind.INSTANT, HiveTestRecords.baseRecords(), "base");
  }

  @Test
  public void testUnPartitionKeyedTableHiveWriteByLocationKind() throws IOException {
    testWrite(testUnPartitionKeyedHiveTable, HiveLocationKind.INSTANT, HiveTestRecords.baseRecords(), "hive");
  }

  @Test
  public void testUnKeyedTableChangeWriteByLocationKind() throws IOException {
    try {
      testWrite(testHiveTable, ChangeLocationKind.INSTANT, HiveTestRecords.changeInsertRecords(), "change");
    }catch (Exception e){
      Assert.assertTrue(e instanceof IllegalArgumentException);
    }
  }

  @Test
  public void testUnKeyedTableBaseWriteByLocationKind() throws IOException {
    testWrite(testHiveTable, BaseLocationKind.INSTANT, HiveTestRecords.baseRecords(), "base");
  }

  @Test
  public void testUnKeyedTableHiveWriteByLocationKind() throws IOException {
    testWrite(testHiveTable, HiveLocationKind.INSTANT, HiveTestRecords.baseRecords(), "hive");
  }

  @Test
  public void testUnPartitionUnKeyedTableChangeWriteByLocationKind() throws IOException {
    try {
      testWrite(testUnPartitionHiveTable, ChangeLocationKind.INSTANT, HiveTestRecords.changeInsertRecords(), "change");
    }catch (Exception e){
      Assert.assertTrue(e instanceof IllegalArgumentException);
    }
  }

  @Test
  public void testUnPartitionUnKeyedTableBaseWriteByLocationKind() throws IOException {
    testWrite(testUnPartitionHiveTable, BaseLocationKind.INSTANT, HiveTestRecords.baseRecords(), "base");
  }

  @Test
  public void testUnPartitionUnKeyedTableHiveWriteByLocationKind() throws IOException {
    testWrite(testUnPartitionHiveTable, HiveLocationKind.INSTANT, HiveTestRecords.baseRecords(), "hive");
  }

  public void testWrite(ArcticTable table, LocationKind locationKind, List<Record> records, String pathFeature) throws IOException {
    AdaptHiveGenericTaskWriterBuilder builder = AdaptHiveGenericTaskWriterBuilder
        .builderFor(table)
        .withTransactionId(1);

    TaskWriter<Record> changeWrite = builder.buildWriter(locationKind);
    for (Record record: records) {
      changeWrite.write(record);
    }
    WriteResult complete = changeWrite.complete();
    Arrays.stream(complete.dataFiles()).forEach(s -> Assert.assertTrue(s.path().toString().contains(pathFeature)));
    Set<Record> readRecords = Sets.newHashSet();
    Arrays.stream(complete.dataFiles()).map(s -> readRecords.addAll(readParquet(
        table.schema(), s.path().toString())));
    Assert.assertEquals(Sets.newHashSet(records), readRecords);
  }

  private Set<Record> readParquet(Schema schema, String path){
    AdaptHiveParquet.ReadBuilder builder = AdaptHiveParquet.read(
            Files.localInput(path))
        .project(schema)
        .createReaderFunc(fileSchema -> AdaptHiveGenericParquetReaders.buildReader(schema, fileSchema, new HashMap<>()))
        .caseSensitive(false);

    CloseableIterable<Record> iterable = builder.build();
    return Sets.newHashSet(iterable.iterator());
  }
}
