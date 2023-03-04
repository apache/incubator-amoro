/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.netease.arctic.io;

import com.netease.arctic.table.TableIdentifier;

import java.time.LocalDate;

/**
 * Trash Manager for a table.
 */
public interface TableTrashManager {
  /**
   * Table identifier.
   * A TableTrashManager only handle files in this table's location.
   *
   * @return table identifier
   */
  TableIdentifier tableId();

  /**
   * Move a file to trash, not support directory.
   *
   * @param path the file path
   * @return true for success
   */
  boolean moveFileToTrash(String path);

  /**
   * If a file exist in trash, not support directory.
   *
   * @param path the file path
   * @return true if exist
   */
  boolean fileExistInTrash(String path);

  /**
   * Restore a file from trash, not support directory.
   *
   * @param path the file
   * @return true for success
   */
  boolean restoreFileFromTrash(String path);

  /**
   * Clean files from trash before expiration date (exclusive).
   *
   * @param expirationDate -
   */
  void cleanFiles(LocalDate expirationDate);
}
