package com.netease.arctic.server.manager;

import com.netease.arctic.ams.api.AmoroPlugin;
import com.netease.arctic.ams.api.PluginManager;

import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.ServiceLoader;
import java.util.concurrent.ConcurrentHashMap;

/**
 * Plugin manager based on SPI
 * @param <T> plugin type
 */
public abstract class SpiPluginManager<T extends AmoroPlugin> implements PluginManager<T> {

  private final Map<String, T> installedPlugins = new ConcurrentHashMap<>();
  private final ServiceLoader<T> pluginLoader;

  public SpiPluginManager() {
    this.pluginLoader = ServiceLoader.load(getPluginClass());
  }

  @SuppressWarnings("unchecked")
  private Class<T> getPluginClass() {
    try {
      Type type = getClass().getGenericSuperclass();
      ParameterizedType parameterizedType = (ParameterizedType) type;
      Type[] typeArguments = parameterizedType.getActualTypeArguments();
      return (Class<T>) typeArguments[0];
    } catch (Throwable throwable) {
      throw new IllegalStateException("Cannot determine service type for " +
          getClass().getName(), throwable);
    }
  }

  @Override
  public void install(String pluginName) {
    for (T plugin : pluginLoader) {
      if (plugin.name().equals(pluginName)) {
        installedPlugins.put(pluginName, plugin);
      }
    }
  }

  @Override
  public void uninstall(String pluginName) {
    installedPlugins.remove(pluginName);
  }

  @Override
  public List<T> list() {
    return new ArrayList<>(installedPlugins.values());
  }

  @Override
  public T get(String pluginName) {
    return installedPlugins.get(pluginName);
  }

  @Override
  public void close() {
    installedPlugins.clear();
  }
}
