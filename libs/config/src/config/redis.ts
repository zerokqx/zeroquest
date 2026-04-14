import { registerAs } from '@nestjs/config';
import { env } from 'process';

export const redisConfig = registerAs('redis', () => ({
  port: env.REDIS_PORT,
}));
