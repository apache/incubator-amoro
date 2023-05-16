package com.netease.arctic.server.exception;

import com.netease.arctic.ams.api.ArcticException;
import com.netease.arctic.ams.api.BlockableOperation;
import com.netease.arctic.ams.api.CatalogMeta;
import com.netease.arctic.ams.api.InvalidObjectException;
import com.netease.arctic.ams.api.MetaException;
import com.netease.arctic.ams.api.NoSuchObjectException;
import com.netease.arctic.ams.api.TableCommitMeta;
import com.netease.arctic.ams.api.TableIdentifier;
import com.netease.arctic.server.table.ServerTableIdentifier;
import org.apache.thrift.TException;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

public class ArcticRuntimeException extends RuntimeException {

  private static final Map<Class<? extends ArcticRuntimeException>, Integer> CODE_MAP = new HashMap<>();

  static {
    CODE_MAP.put(PersistenceException.class, 1000);
    CODE_MAP.put(ObjectNotExistsException.class, 1001);
    CODE_MAP.put(AlreadyExistsException.class, 1002);
    CODE_MAP.put(IllegalMetadataException.class, 1003);

    CODE_MAP.put(TaskNotFoundException.class, 2001);
    CODE_MAP.put(DuplicateRuntimeException.class, 2002);
    CODE_MAP.put(OptimizingClosedException.class, 2003);
    CODE_MAP.put(IllegalTaskStateException.class, 2004);
    CODE_MAP.put(PluginAuthException.class, 2005);
    CODE_MAP.put(PluginRetryAuthException.class, 2006);
  }

  private static final int UNDEFINED = -1;

  private final int errorCode;
  private final String errorName;

  protected ArcticRuntimeException() {
    this.errorCode = Optional.ofNullable(CODE_MAP.get(getClass())).orElse(UNDEFINED);
    this.errorName = getClass().getSimpleName();
  }

  protected ArcticRuntimeException(String message) {
    super(message);
    this.errorCode = Optional.ofNullable(CODE_MAP.get(getClass())).orElse(UNDEFINED);
    this.errorName = getClass().getSimpleName();
  }

  protected ArcticRuntimeException(Throwable throwable) {
    super(throwable);
    this.errorCode = Optional.ofNullable(CODE_MAP.get(getClass())).orElse(UNDEFINED);
    this.errorName = getClass().getSimpleName();
  }

  protected ArcticRuntimeException(String message, Throwable throwable) {
    super(message, throwable);
    this.errorCode = Optional.ofNullable(CODE_MAP.get(getClass())).orElse(UNDEFINED);
    this.errorName = getClass().getSimpleName();
  }

  public int getErrorCode() {
    return errorCode;
  }

  public String getErrorName() {
    return errorName;
  }

  private ArcticException transform() {
    return new ArcticException(errorCode, errorName, getMessage());
  }

  protected static String getObjectName(TableIdentifier tableIdentifier) {
    return new StringBuilder().append("Table ")
            .append(tableIdentifier.getCatalog())
            .append('.')
            .append(tableIdentifier.getDatabase())
            .append('.')
            .append(tableIdentifier.getTableName())
            .toString();
  }

  protected static String getObjectName(ServerTableIdentifier tableIdentifier) {
    return new StringBuilder().append("Table ")
            .append(tableIdentifier.getCatalog())
            .append('.')
            .append(tableIdentifier.getDatabase())
            .append('.')
            .append(tableIdentifier.getTableName())
            .toString();
  }

  public static ArcticException transformThrift(Throwable throwable) {
    return buildArcticException(throwable).transform();
  }

  public static TException transformCompatibleException(Throwable throwable) {
    return transformLegacyException(throwable);
  }

  private static ArcticRuntimeException buildArcticException(Throwable throwable) {
    if (throwable instanceof ArcticRuntimeException) {
      return (ArcticRuntimeException) throwable;
    } else {
      return new UndefinedException(throwable);
    }
  }

  private static TException transformLegacyException(Throwable throwable) {
    if (throwable.getClass().equals(ObjectNotExistsException.class)) {
      return new NoSuchObjectException(throwable.getMessage());
    } else if (throwable.getClass().equals(AlreadyExistsException.class)) {
      return new com.netease.arctic.ams.api.AlreadyExistsException(throwable.getMessage());
    } else if (throwable.getClass().equals(IllegalMetadataException.class) || throwable.getClass().equals(PersistenceException.class)) {
      return new MetaException(throwable.getMessage());
    } else if (throwable.getClass().equals(IllegalArgumentException.class)) {
      return new InvalidObjectException(throwable.getMessage());
    }
    return new TException(throwable.getMessage());
  }
}
