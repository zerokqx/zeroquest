import { registerAs } from '@nestjs/config';
import { env } from 'process';

const parsePositiveInt = (value: string | undefined, envName: string) => {
  const parsed = Number.parseInt(value ?? '', 10);
  if (!Number.isFinite(parsed) || parsed <= 0) {
    throw new Error(`Environment variable ${envName} must be a positive integer`);
  }
  return parsed;
};

const getRequiredEnv = (value: string | undefined, envName: string) => {
  const normalized = value?.trim();
  if (!normalized) {
    throw new Error(`Missing required environment variable: ${envName}`);
  }
  return normalized;
};

export const redisConfig = registerAs('redis', () => ({
  host: getRequiredEnv(env.REDIS_HOST, 'REDIS_HOST'),
  port: parsePositiveInt(env.REDIS_PORT, 'REDIS_PORT'),
  password: env.REDIS_PASSWORD?.trim() ?? '',
  url: getRequiredEnv(env.REDIS_URL, 'REDIS_URL'),
}));
