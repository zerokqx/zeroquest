import { DynamicModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { resolve } from 'path';

import { redisConfig } from '../config/redis';

const ROOT_ENV_FILE_PATHS = [
  resolve(process.cwd(), '.env.local'),
  resolve(process.cwd(), '.env'),
];

type ConfigFactory = () => Record<string, unknown>;

@Module({})
export class ZeroquestConfigModule {
  static forRoot(load: ConfigFactory[] = []): DynamicModule {
    return {
      module: ZeroquestConfigModule,
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
          expandVariables: true,
          envFilePath: ROOT_ENV_FILE_PATHS,
          load,
        }),
        ConfigModule.forFeature(redisConfig),
      ],
      exports: [ConfigModule],
    };
  }
}
