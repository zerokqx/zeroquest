// logger.config.ts
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import { utilities as nestWinstonModuleUtilities } from 'nest-winston';
import { existsSync, mkdirSync } from 'node:fs';

const DEFAULT_LOG_FOLDER = '/var/log/zeroquest';
const FALLBACK_LOG_FOLDER = `${process.cwd()}/logs/zeroquest`;

const resolveLogFolder = (): string | null => {
  const candidates = [
    process.env.ZEROQUEST_LOG_DIR,
    DEFAULT_LOG_FOLDER,
    FALLBACK_LOG_FOLDER,
    '/tmp/zeroquest-logs',
  ].filter((path): path is string => Boolean(path));

  for (const folder of candidates) {
    try {
      if (!existsSync(folder)) {
        mkdirSync(folder, { recursive: true });
      }
      return folder;
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      console.warn(`[logger] Cannot use "${folder}" for file logs: ${message}`);
    }
  }

  return null;
};

const LOG_FOLDER = resolveLogFolder();
const fileTransports =
  LOG_FOLDER === null
    ? []
    : [
        new winston.transports.File({
          filename: `${LOG_FOLDER}/error.log`,
          level: 'error',
        }),
        new winston.transports.File({
          filename: `${LOG_FOLDER}/combined.log`,
        }),
      ];

export const logger = WinstonModule.createLogger({
  level: 'silly',
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.timestamp(),
        nestWinstonModuleUtilities.format.nestLike('ZeroQuest', {
          prettyPrint: true,
          processId:true,
          colors: true,
        }),
      ),
    }),
    ...fileTransports,
  ],
});
