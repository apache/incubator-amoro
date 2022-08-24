package com.netease.arctic.spark.sql

import com.netease.arctic.spark.table.{ArcticSparkTable, SupportsUpsert}
import org.apache.spark.sql.connector.catalog.Table
import org.apache.spark.sql.catalyst.plans.logical.{LogicalPlan, SubqueryAlias}
import org.apache.spark.sql.execution.datasources.v2.DataSourceV2Relation

import scala.annotation.tailrec


object ArcticExtensionUtils {

  implicit class ArcticTableHelper(table: Table) {
    def asArcticTable: ArcticSparkTable = {
      table match {
        case arcticTable: ArcticSparkTable => arcticTable
        case _ => throw new IllegalArgumentException(s"$table is not an arctic table")
      }
    }

    def asUpsertWrite: SupportsUpsert = {
      table match {
        case arcticTable: SupportsUpsert => arcticTable
        case _ => throw new IllegalArgumentException(s"$table is not an upsert-able table")
      }
    }
  }

  implicit class ArcticRelationHelper(plan: LogicalPlan) {
    def asTableRelation: DataSourceV2Relation = {
      ArcticExtensionUtils.asTableRelation(plan)
    }
  }

  @tailrec
  def isArcticRelation(plan: LogicalPlan): Boolean = {
    def isArcticTable(relation: DataSourceV2Relation): Boolean = relation.table match {
      case _: ArcticSparkTable => true
      case _ => false
    }

    plan match {
      case s: SubqueryAlias => isArcticRelation(s.child)
      case r: DataSourceV2Relation => isArcticTable(r)
      case _ => false
    }
  }

  def asTableRelation(plan: LogicalPlan): DataSourceV2Relation = {
    plan match {
      case s: SubqueryAlias => asTableRelation(s.child)
      case r: DataSourceV2Relation => r
      case _ => throw new IllegalArgumentException("Expected a DataSourceV2Relation")
    }
  }

}
