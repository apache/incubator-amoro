package com.netease.arctic.formats.mixed.iceberg;

import com.netease.arctic.TableSnapshot;
import java.util.Optional;
import org.apache.iceberg.Snapshot;
import org.apache.iceberg.relocated.com.google.common.primitives.Longs;
import org.apache.iceberg.util.StructLikeMap;

public class MixedIcebergSnapshot implements TableSnapshot {

  private Optional<Snapshot> changeSnapshot;

  private Optional<Snapshot> baseSnapshot;

  public MixedIcebergSnapshot(
      Optional<org.apache.iceberg.Snapshot> changeSnapshot,
      Optional<org.apache.iceberg.Snapshot> baseSnapshot) {
    this.changeSnapshot = changeSnapshot;
    this.baseSnapshot = baseSnapshot;
  }

  @Override
  public long watermark() {
    return -1;
  }

  @Override
  public long commitTime() {
    Long changCommit = changeSnapshot.map(org.apache.iceberg.Snapshot::timestampMillis).orElse(-1L);
    Long baseCommit = baseSnapshot.map(org.apache.iceberg.Snapshot::timestampMillis).orElse(-1L);
    return Longs.max(changCommit, baseCommit);
  }

  public Optional<Snapshot> getChangeSnapshot() {
    return changeSnapshot;
  }

  public Optional<Snapshot> getBaseSnapshot() {
    return baseSnapshot;
  }

  public long getChangeSnapshotId() {
    return changeSnapshot.map(Snapshot::snapshotId).orElse(-1L);
  }

  public long getBaseSnapshotId() {
    return baseSnapshot.map(Snapshot::snapshotId).orElse(-1L);
  }

  @Override
  public String id() {
    return changeSnapshot.orElse(null) + "_" + baseSnapshot.orElse(null);
  }
}
