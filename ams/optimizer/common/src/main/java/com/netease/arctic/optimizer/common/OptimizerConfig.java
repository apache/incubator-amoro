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

package com.netease.arctic.optimizer.common;

import static com.netease.arctic.api.OptimizerProperties.OPTIMIZER_CACHE_ENABLED_DEFAULT;
import static com.netease.arctic.api.OptimizerProperties.OPTIMIZER_CACHE_MAX_ENTRY_SIZE_DEFAULT;
import static com.netease.arctic.api.OptimizerProperties.OPTIMIZER_CACHE_MAX_TOTAL_SIZE_DEFAULT;
import static com.netease.arctic.api.OptimizerProperties.OPTIMIZER_CACHE_TIMEOUT_DEFAULT;

import com.netease.arctic.api.OptimizerProperties;
import org.apache.iceberg.relocated.com.google.common.base.MoreObjects;
import org.kohsuke.args4j.CmdLineException;
import org.kohsuke.args4j.CmdLineParser;
import org.kohsuke.args4j.Option;

import java.io.Serializable;

/** Common config of Optimizer, it can be extended for custom Optimizer. */
public class OptimizerConfig implements Serializable {

  @Option(
      name = "-a",
      aliases = "--" + OptimizerProperties.AMS_OPTIMIZER_URI,
      usage = "The ams url",
      required = true)
  private String amsUrl;

  @Option(
      name = "-p",
      aliases = "--" + OptimizerProperties.OPTIMIZER_EXECUTION_PARALLEL,
      usage = "Optimizer execution parallel",
      required = true)
  private int executionParallel;

  /** @deprecated This parameter is deprecated and will be removed in version 0.7.0. */
  @Deprecated
  @Option(
      name = "-m",
      aliases = "--" + OptimizerProperties.OPTIMIZER_MEMORY_SIZE,
      usage = "Optimizer memory size(MB)")
  private int memorySize;

  @Option(
      name = "-g",
      aliases = "--" + OptimizerProperties.OPTIMIZER_GROUP_NAME,
      usage = "Group name optimizer belong",
      required = true)
  private String groupName;

  @Option(
      name = "-hb",
      aliases = "--" + OptimizerProperties.OPTIMIZER_HEART_BEAT_INTERVAL,
      usage = "Heart beat interval with ams(ms), default 10s")
  private long heartBeat = 10000; // 10 s

  @Option(
      name = "-eds",
      aliases = "--" + OptimizerProperties.OPTIMIZER_EXTEND_DISK_STORAGE,
      usage = "Whether extend storage to disk, default false")
  private boolean extendDiskStorage = false;

  @Option(
      name = "-dsp",
      aliases = "--" + OptimizerProperties.OPTIMIZER_DISK_STORAGE_PATH,
      usage = "Disk storage path")
  private String diskStoragePath;

  @Option(
      name = "-msz",
      aliases = "--" + OptimizerProperties.OPTIMIZER_MEMORY_STORAGE_SIZE,
      usage = "Memory storage size limit when extending disk storage(MB), default 512MB")
  private long memoryStorageSize = 512; // 512 M

  @Option(name = "-id", aliases = "--" + OptimizerProperties.RESOURCE_ID, usage = "Resource id")
  private String resourceId;

  @Option(
      name = "-ce",
      aliases = "--" + OptimizerProperties.OPTIMIZER_CACHE_ENABLED,
      usage = "Whether cache position delete files, default true")
  private boolean cacheEnabled = OPTIMIZER_CACHE_ENABLED_DEFAULT;

  @Option(
      name = "-ct",
      aliases = "--" + OptimizerProperties.OPTIMIZER_CACHE_TIMEOUT,
      usage = "Cache timeout")
  private long cacheTimeout = OPTIMIZER_CACHE_TIMEOUT_DEFAULT; // 10 Min

  @Option(
      name = "-cmes",
      aliases = "--" + OptimizerProperties.OPTIMIZER_CACHE_MAX_ENTRY_SIZE,
      usage = "Cache max entry size, default 64MB")
  private long cacheMaxEntrySize = OPTIMIZER_CACHE_MAX_ENTRY_SIZE_DEFAULT;

  @Option(
      name = "-cmts",
      aliases = "--" + OptimizerProperties.OPTIMIZER_CACHE_MAX_TOTAL_SIZE,
      usage = "Cache max total size, default 128MB")
  private long cacheMaxTotalSize = OPTIMIZER_CACHE_MAX_TOTAL_SIZE_DEFAULT;

  public OptimizerConfig() {}

  public OptimizerConfig(String[] args) throws CmdLineException {
    CmdLineParser parser = new CmdLineParser(this);
    parser.parseArgument(args);
  }

  public String getAmsUrl() {
    return amsUrl;
  }

  public void setAmsUrl(String amsUrl) {
    this.amsUrl = amsUrl;
  }

  public long getHeartBeat() {
    return heartBeat;
  }

  public void setHeartBeat(long heartBeat) {
    this.heartBeat = heartBeat;
  }

  public int getExecutionParallel() {
    return executionParallel;
  }

  public void setExecutionParallel(int executionParallel) {
    this.executionParallel = executionParallel;
  }

  public int getMemorySize() {
    return memorySize;
  }

  public void setMemorySize(int memorySize) {
    this.memorySize = memorySize;
  }

  public String getGroupName() {
    return groupName;
  }

  public void setGroupName(String groupName) {
    this.groupName = groupName;
  }

  public long getMemoryStorageSize() {
    return memoryStorageSize;
  }

  public void setMemoryStorageSize(long memoryStorageSize) {
    this.memoryStorageSize = memoryStorageSize;
  }

  public boolean isExtendDiskStorage() {
    return extendDiskStorage;
  }

  public void setExtendDiskStorage(boolean extendDiskStorage) {
    this.extendDiskStorage = extendDiskStorage;
  }

  public String getDiskStoragePath() {
    return diskStoragePath;
  }

  public void setDiskStoragePath(String diskStoragePath) {
    this.diskStoragePath = diskStoragePath;
  }

  public String getResourceId() {
    return resourceId;
  }

  public void setResourceId(String resourceId) {
    this.resourceId = resourceId;
  }

  public boolean isCacheEnabled() {
    return cacheEnabled;
  }

  public void setCacheEnabled(boolean cacheEnabled) {
    this.cacheEnabled = cacheEnabled;
  }

  public long getCacheTimeout() {
    return cacheTimeout;
  }

  public void setCacheTimeout(long cacheTimeout) {
    this.cacheTimeout = cacheTimeout;
  }

  public long getCacheMaxEntrySize() {
    return cacheMaxEntrySize;
  }

  public void setCacheMaxEntrySize(long cacheMaxEntrySize) {
    this.cacheMaxEntrySize = cacheMaxEntrySize;
  }

  public long getCacheMaxTotalSize() {
    return cacheMaxTotalSize;
  }

  public void setCacheMaxTotalSize(long cacheMaxTotalSize) {
    this.cacheMaxTotalSize = cacheMaxTotalSize;
  }

  @Override
  public String toString() {
    return MoreObjects.toStringHelper(this)
        .add("amsUrl", amsUrl)
        .add("executionParallel", executionParallel)
        .add("memorySize", memorySize)
        .add("groupName", groupName)
        .add("heartBeat", heartBeat)
        .add("extendDiskStorage", extendDiskStorage)
        .add("rocksDBBasePath", diskStoragePath)
        .add("memoryStorageSize", memoryStorageSize)
        .add("resourceId", resourceId)
        .add("cacheEnabled", cacheEnabled)
        .add("cacheTimeout", cacheTimeout)
        .add("cacheMaxEntrySize", cacheMaxEntrySize)
        .add("cacheMaxTotalSize", cacheMaxTotalSize)
        .toString();
  }
}
