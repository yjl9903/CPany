import type {
  IPlugin,
  LoadResult,
  ITransformPayload,
  IInstance
} from './plugin';
import { IContext, ILogger, createDefaultLogger } from './utils';

export interface ICreateOptions<T = any> {
  plugins?: Array<IPlugin | IPlugin[] | null | undefined>;
  context?: IContext;
  logger?: ILogger;
  config: T;
}

export interface CPanyInstance {
  logger: ILogger;
  context: IContext;
  load: (key: string) => Promise<LoadResult | null | undefined>;
  transform: <T extends ITransformPayload>(
    payload: T
  ) => Promise<LoadResult | null | undefined>;
}

export function createInstance<T>(option: ICreateOptions<T>): CPanyInstance {
  const logger: ILogger = option?.logger ?? createDefaultLogger();

  const plugins = (option?.plugins ?? [])
    .flat()
    .filter((plugin) => plugin !== undefined && plugin !== null) as IPlugin[];

  const loggerPrefixLength = ['instance']
    .concat(plugins.map((plugin) => plugin.name))
    .reduce((len, name) => Math.max(len, name.length), 0);
  const prefix = (name: string = 'instance') => {
    return '[ ' + name + ' '.repeat(loggerPrefixLength - name.length) + ' ]';
  };

  const context = option?.context ?? {};
  const instance: IInstance<T> = { logger, context, config: option.config };

  const isKeyInContext = (key: string) => {
    return key in context;
  };

  const loadFromContext = (key: string) => {
    return context[key];
  };

  const cacheToContext = (key: string, content: string) => {
    context[key] = content;
  };

  const load = async (key: string) => {
    if (isKeyInContext(key)) {
      return { key, content: loadFromContext(key) };
    }

    logger.info(`${prefix()} Fetch: ${key}`);

    for (const plugin of plugins) {
      if ('load' in plugin) {
        try {
          const result = await plugin.load<T>(key, instance);
          if (result !== undefined && result !== null) {
            logger.info(`${prefix(plugin.name)} Ok   : ${key}`);
            if (typeof result === 'string') {
              cacheToContext(key, result);
              return { key, content: result };
            } else {
              cacheToContext(result.key, result.content);
              return result;
            }
          }
        } catch (error) {
          logger.error(`${prefix(plugin.name)} Error: Fetch "${key}" fail`);
          return null;
        }
      }
    }

    logger.warning(`${prefix()} Error: No matching plugins for ${key}`);

    return undefined;
  };

  const transform = async <T extends ITransformPayload>(payload: T) => {
    logger.info(
      `${prefix()} Fetch: (id: ${payload.id}, type: ${payload.type})`
    );

    for (const plugin of plugins) {
      if ('transform' in plugin) {
        const key = plugin.resolveKey(payload);
        if (key === undefined || key === null) continue;
        if (isKeyInContext(key)) {
          return {
            key,
            content: loadFromContext(key)
          };
        }

        try {
          const result = await plugin.transform<any>(payload, instance);
          if (result !== undefined && result !== null) {
            logger.info(`${prefix(plugin.name)} Ok   : ${result.key}`);
            cacheToContext(result.key, result.content);
            return result;
          } else {
            logger.error(
              `[${plugin.name}] Error: has resolved id "${key}", but failed transforming`
            );
          }
        } catch (error) {
          logger.error(
            `${prefix(plugin.name)} Error: Fetch (id: ${payload.id}, type: ${
              payload.type
            }) fail`
          );
          return null;
        }
      }
    }

    logger.warning(
      `${prefix()} Error: No matching plugins for (id: ${payload.id}, type: ${
        payload.type
      })`
    );

    return undefined;
  };

  return {
    logger,
    context,
    load,
    transform
  };
}
