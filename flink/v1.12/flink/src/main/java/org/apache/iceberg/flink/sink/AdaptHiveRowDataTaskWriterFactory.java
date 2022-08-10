package org.apache.iceberg.flink.sink;

import com.netease.arctic.flink.write.AdaptHiveFlinkAppenderFactory;
import org.apache.flink.table.data.RowData;
import org.apache.flink.table.types.logical.RowType;
import org.apache.iceberg.FileFormat;
import org.apache.iceberg.PartitionKey;
import org.apache.iceberg.PartitionSpec;
import org.apache.iceberg.Schema;
import org.apache.iceberg.Table;
import org.apache.iceberg.flink.RowDataWrapper;
import org.apache.iceberg.io.FileAppenderFactory;
import org.apache.iceberg.io.FileIO;
import org.apache.iceberg.io.OutputFileFactory;
import org.apache.iceberg.io.PartitionedFanoutWriter;
import org.apache.iceberg.io.TaskWriter;
import org.apache.iceberg.io.UnpartitionedWriter;
import org.apache.iceberg.relocated.com.google.common.base.Preconditions;
import org.apache.iceberg.util.ArrayUtil;

import java.util.List;

public class AdaptHiveRowDataTaskWriterFactory implements TaskWriterFactory<RowData> {
  private final Table table;
  private final Schema schema;
  private final RowType flinkSchema;
  private final PartitionSpec spec;
  private final FileIO io;
  private final long targetFileSizeBytes;
  private final FileFormat format;
  private final List<Integer> equalityFieldIds;
  private final FileAppenderFactory<RowData> appenderFactory;

  private transient OutputFileFactory outputFileFactory;

  public AdaptHiveRowDataTaskWriterFactory(Table table,
      RowType flinkSchema,
      long targetFileSizeBytes,
      FileFormat format,
      List<Integer> equalityFieldIds) {
    this.table = table;
    this.schema = table.schema();
    this.flinkSchema = flinkSchema;
    this.spec = table.spec();
    this.io = table.io();
    this.targetFileSizeBytes = targetFileSizeBytes;
    this.format = format;
    this.equalityFieldIds = equalityFieldIds;

    if (equalityFieldIds == null || equalityFieldIds.isEmpty()) {
      this.appenderFactory = new AdaptHiveFlinkAppenderFactory(schema, flinkSchema, table.properties(), spec);
    } else {
      // TODO provide the ability to customize the equality-delete row schema.
      this.appenderFactory = new AdaptHiveFlinkAppenderFactory(schema, flinkSchema, table.properties(), spec,
          ArrayUtil.toIntArray(equalityFieldIds), schema, null);
    }
  }

  @Override
  public void initialize(int taskId, int attemptId) {
    this.outputFileFactory = OutputFileFactory.builderFor(table, taskId, attemptId).build();
  }

  @Override
  public TaskWriter<RowData> create() {
    Preconditions.checkNotNull(outputFileFactory,
        "The outputFileFactory shouldn't be null if we have invoked the initialize().");

    if (equalityFieldIds == null || equalityFieldIds.isEmpty()) {
      // Initialize a task writer to write INSERT only.
      if (spec.isUnpartitioned()) {
        return new UnpartitionedWriter<>(spec, format, appenderFactory, outputFileFactory, io, targetFileSizeBytes);
      } else {
        return new AdaptHiveRowDataTaskWriterFactory.RowDataPartitionedFanoutWriter(spec, format,
            appenderFactory, outputFileFactory, io, targetFileSizeBytes, schema, flinkSchema);
      }
    } else {
      // Initialize a task writer to write both INSERT and equality DELETE.
      if (spec.isUnpartitioned()) {
        return new UnpartitionedDeltaWriter(spec, format, appenderFactory, outputFileFactory, io,
            targetFileSizeBytes, schema, flinkSchema, equalityFieldIds);
      } else {
        return new PartitionedDeltaWriter(spec, format, appenderFactory, outputFileFactory, io,
            targetFileSizeBytes, schema, flinkSchema, equalityFieldIds);
      }
    }
  }

  private static class RowDataPartitionedFanoutWriter extends PartitionedFanoutWriter<RowData> {

    private final PartitionKey partitionKey;
    private final RowDataWrapper rowDataWrapper;

    RowDataPartitionedFanoutWriter(PartitionSpec spec, FileFormat format, FileAppenderFactory<RowData> appenderFactory,
        OutputFileFactory fileFactory, FileIO io, long targetFileSize, Schema schema,
        RowType flinkSchema) {
      super(spec, format, appenderFactory, fileFactory, io, targetFileSize);
      this.partitionKey = new PartitionKey(spec, schema);
      this.rowDataWrapper = new RowDataWrapper(flinkSchema, schema.asStruct());
    }

    @Override
    protected PartitionKey partition(RowData row) {
      partitionKey.partition(rowDataWrapper.wrap(row));
      return partitionKey;
    }
  }
}
