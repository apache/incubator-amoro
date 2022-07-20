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

package com.netease.arctic.trino;

import com.netease.arctic.trino.keyed.KeyedConnectorSplitManager;
import com.netease.arctic.trino.keyed.KeyedTableHandle;
import com.netease.arctic.trino.unkeyed.IcebergSplitManager;
import io.trino.spi.connector.ConnectorMetadata;
import io.trino.spi.connector.ConnectorSession;
import io.trino.spi.connector.ConnectorSplitManager;
import io.trino.spi.connector.ConnectorSplitSource;
import io.trino.spi.connector.ConnectorTableHandle;
import io.trino.spi.connector.ConnectorTransactionHandle;
import io.trino.spi.connector.Constraint;
import io.trino.spi.connector.DynamicFilter;
import javax.inject.Inject;

/**
 * {@link ArcticConnectorSplitManager} is a Union {@link ConnectorSplitManager} contain
 * {@link KeyedConnectorSplitManager}  and
 * {@link IcebergSplitManager}.
 * This is final {@link ConnectorSplitManager} provided to Trino
 */
public class ArcticConnectorSplitManager implements ConnectorSplitManager {

  private KeyedConnectorSplitManager keyedConnectorSplitManager;

  private IcebergSplitManager icebergSplitManager;

  @Inject
  public ArcticConnectorSplitManager(
      KeyedConnectorSplitManager keyedConnectorSplitManager,
      IcebergSplitManager icebergSplitManager) {
    this.keyedConnectorSplitManager = keyedConnectorSplitManager;
    this.icebergSplitManager = icebergSplitManager;
  }

  @Override
  public ConnectorSplitSource getSplits(
      ConnectorTransactionHandle transaction, ConnectorSession session,
      ConnectorTableHandle table, SplitSchedulingStrategy splitSchedulingStrategy,
      DynamicFilter dynamicFilter, Constraint constraint) {
    if (table instanceof KeyedTableHandle) {
      return keyedConnectorSplitManager.getSplits(transaction, session,
          table, splitSchedulingStrategy,
          dynamicFilter, constraint);
    } else {
      return icebergSplitManager.getSplits(transaction, session,
          table, splitSchedulingStrategy,
          dynamicFilter, constraint);
    }
  }
}
