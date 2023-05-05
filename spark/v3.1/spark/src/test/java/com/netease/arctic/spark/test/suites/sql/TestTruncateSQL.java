package com.netease.arctic.spark.test.suites.sql;

import com.netease.arctic.ams.api.properties.TableFormat;
import com.netease.arctic.spark.test.Asserts;
import com.netease.arctic.spark.test.SparkTableTestBase;
import com.netease.arctic.spark.test.extensions.EnableCatalogSelect;
import com.netease.arctic.spark.test.helper.TableFiles;
import com.netease.arctic.spark.test.helper.TestTableHelper;
import org.apache.hadoop.fs.FileStatus;
import org.apache.spark.sql.Dataset;
import org.apache.spark.sql.Row;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.Arguments;
import org.junit.jupiter.params.provider.MethodSource;

import java.util.List;
import java.util.stream.Stream;

@EnableCatalogSelect
@EnableCatalogSelect.SelectCatalog(byTableFormat = true)
public class TestTruncateSQL extends SparkTableTestBase {

  public static Stream<Arguments> testTruncateTable() {
    return Stream.of(
        Arguments.of(TableFormat.MIXED_HIVE, ", PRIMARY KEY(id)", ""),
        Arguments.of(TableFormat.MIXED_HIVE, "", ""),
        Arguments.of(TableFormat.MIXED_ICEBERG, ", PRIMARY KEY(id)", ""),
        Arguments.of(TableFormat.MIXED_ICEBERG, "", ""),
        Arguments.of(TableFormat.MIXED_HIVE, ", PRIMARY KEY(id)", " PARTITIONED BY (day)"),
        Arguments.of(TableFormat.MIXED_HIVE, "", " PARTITIONED BY (day)"),
        Arguments.of(TableFormat.MIXED_ICEBERG, ", PRIMARY KEY(id)", " PARTITIONED BY (day)"),
        Arguments.of(TableFormat.MIXED_ICEBERG, "", " PARTITIONED BY (day)")
    );
  }

  @DisplayName("Test `test truncate table`")
  @ParameterizedTest
  @MethodSource
  public void testTruncateTable(TableFormat format, String primaryKeyDDL, String partitionDDL) {
    String sqlText = "CREATE TABLE " + target() + " ( \n" +
        "id int, data string, day string " + primaryKeyDDL + " ) using " +
        provider(format)  + partitionDDL;
    sql(sqlText);
    sql("insert into " +
        target().database + "." + target().table +
        " values (1, 'a', 'a'), (2, 'b', 'b'), (3, 'c', 'c')");
    Assertions.assertEquals(3, TestTableHelper.listFiles(loadTable()).size());
    sql("truncate table " + target().database + "." + target().table);
    Dataset<Row> sql = sql("select * from " +
        target().database + "." + target().table);
    Assertions.assertEquals(0, sql.collectAsList().size());
    Assertions.assertEquals(3, TestTableHelper.listFiles(loadTable()).size());
  }
}
