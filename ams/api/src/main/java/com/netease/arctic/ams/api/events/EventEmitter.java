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

package com.netease.arctic.ams.api.events;

import com.netease.arctic.ams.api.ActivePlugin;

import java.util.Set;

/**
 * This is an interface defining a reporter, which users can implement to notify event to a
 * monitoring system.
 */
public interface EventEmitter extends ActivePlugin {

  /**
   * Emit metrics to the monitoring system
   *
   * @param event {@link Event} to emit.
   */
  void emit(Event<?> event);

  /**
   * Return the eventType set this event emitter accepts.
   *
   * @return the event type set this emitter accepts.
   */
  Set<EventType<?>> accepts();
}