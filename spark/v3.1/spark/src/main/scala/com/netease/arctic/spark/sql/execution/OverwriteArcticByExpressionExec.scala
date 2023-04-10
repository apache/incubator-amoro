/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *  *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *  *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.netease.arctic.spark.sql.execution

import com.netease.arctic.spark.table.ArcticSparkTable
import org.apache.spark.SparkException
import org.apache.spark.sql.catalyst.InternalRow
import org.apache.spark.sql.connector.write.{SupportsOverwrite, SupportsTruncate}
import org.apache.spark.sql.execution.SparkPlan
import org.apache.spark.sql.execution.datasources.v2.{ArcticTableWriteExec, BatchWriteHelper}
import org.apache.spark.sql.sources.{AlwaysTrue, Filter}
import org.apache.spark.sql.util.CaseInsensitiveStringMap

case class OverwriteArcticByExpressionExec(
    table: ArcticSparkTable,
    deleteWhere: Array[Filter],
    writeOptions: CaseInsensitiveStringMap,
    queryInsert: SparkPlan,
    validateQuery: SparkPlan,
    refreshCache: () => Unit) extends ArcticTableWriteExec
  with BatchWriteHelper {

  private def isTruncate(filters: Array[Filter]): Boolean = {
    filters.length == 1 && filters(0).isInstanceOf[AlwaysTrue]
  }

  override protected def run(): Seq[InternalRow] = {
    validateData()
    val writtenRows = newWriteBuilder() match {
      case builder: SupportsTruncate if isTruncate(deleteWhere) =>
        writeInsert(builder.truncate().buildForBatch())

      case builder: SupportsOverwrite =>
        writeInsert(builder.overwrite(deleteWhere).buildForBatch())
      case _ =>
        throw new SparkException(s"Table does not support dynamic partition overwrite: $table")
    }
    refreshCache()
    writtenRows
  }

  override def query: SparkPlan = queryInsert

  override def left: SparkPlan = queryInsert

  override def right: SparkPlan = validateQuery
}
