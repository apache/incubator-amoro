package com.netease.arctic.server.catalog;

import com.netease.arctic.ams.api.CatalogMeta;
import com.netease.arctic.ams.api.properties.CatalogMetaProperties;
import com.netease.arctic.catalog.IcebergCatalogWrapper;
import com.netease.arctic.io.ArcticFileIO;
import com.netease.arctic.io.ArcticFileIOAdapter;
import com.netease.arctic.server.ArcticManagementConf;
import com.netease.arctic.server.iceberg.InternalTableOperations;
import com.netease.arctic.server.persistence.mapper.TableMetaMapper;
import com.netease.arctic.server.table.TableMetadata;
import com.netease.arctic.server.utils.Configurations;
import com.netease.arctic.server.utils.IcebergTableUtils;
import com.netease.arctic.table.ArcticTable;
import org.apache.iceberg.BaseTable;
import org.apache.iceberg.TableOperations;
import org.apache.iceberg.catalog.TableIdentifier;
import org.apache.iceberg.io.FileIO;

public class InternalIcebergCatalogImpl extends MixedCatalogImpl {
  final int httpPort;

  protected InternalIcebergCatalogImpl(CatalogMeta metadata, Configurations serverConfiguration) {
    super(metadata);
    this.httpPort = serverConfiguration.getInteger(ArcticManagementConf.HTTP_SERVER_PORT);
  }


  @Override
  public CatalogMeta getMetadata() {
    CatalogMeta meta = super.getMetadata();
    meta.putToCatalogProperties(CatalogMetaProperties.HTTP_PORT, String.valueOf(httpPort));
    return meta;
  }

  @Override
  public ArcticTable loadTable(String database, String tableName) {
    TableMetadata tableMetadata = getAs(TableMetaMapper.class, mapper ->
        mapper.selectTableMetaByName(getMetadata().getCatalogName(), database, tableName));
    if (tableMetadata == null) {
      return null;
    }
    FileIO io = IcebergTableUtils.newIcebergFileIo(getMetadata());
    ArcticFileIO fileIO = new ArcticFileIOAdapter(io);
    TableOperations ops = InternalTableOperations.buildForLoad(tableMetadata, io);
    BaseTable table = new BaseTable(ops, TableIdentifier.of(database, tableName).toString());
    return new IcebergCatalogWrapper.BasicIcebergTable(
        com.netease.arctic.table.TableIdentifier.of(name(), database, tableName),
        table, fileIO, getMetadata().getCatalogProperties()
    );
  }
}
