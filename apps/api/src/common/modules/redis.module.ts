import { Global, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Redis from 'ioredis';
import { EnvironmentVariables } from '@/config/configuration';

@Global()
@Module({
  providers: [
    {
      provide: Redis,
      useFactory(config: ConfigService<EnvironmentVariables>) {
        const redis = config.get('redis', { infer: true });

        if (!redis?.host || !redis.port) {
          throw new Error('REDIS_HOST and REDIS_PORT must be set');
        }

        return new Redis({
          host: redis.host,
          port: redis.port,
        });
      },
      inject: [ConfigService],
    },
  ],
  exports: [Redis],
})
export class RedisModule {}
