import { registerAs } from '@nestjs/config';
import { env } from 'process';

const parsePositiveInt = (value: string | undefined, envName: string) => {
  const parsed = Number.parseInt(value ?? '', 10);
  if (!Number.isFinite(parsed) || parsed <= 0) {
    throw new Error(`Environment variable ${envName} must be a positive integer`);
  }
  return parsed;
};

export const redisConfig = registerAs('redis', () => ({
  host: env.REDIS_HOST,
  port: parsePositiveInt(env.REDIS_PORT, 'REDIS_PORT'),
}));
