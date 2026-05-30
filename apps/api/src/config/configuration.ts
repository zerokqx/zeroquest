import { env } from 'process';

const DEFAULT_CORS_ORIGINS =
  'http://localhost:4200,http://127.0.0.1:4200,http://localhost:80,http://127.0.0.1:80';
const DEFAULT_JWT_ACCESS_EXPIRE_TIME_MS = 30 * 60 * 1000;
const DEFAULT_JWT_REFRESH_EXPIRE_TIME_MS = 30 * 24 * 60 * 60 * 1000;

const toCorsOrigins = (value: string) =>
  value
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean);

const toPositiveInt = (value: string | undefined, fallback: number) => {
  const parsed = Number.parseInt(value ?? '', 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
};

const getRequiredEnv = (name: string) => {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
};

const getRequiredPositiveIntEnv = (name: string) => {
  const value = getRequiredEnv(name);
  const parsed = Number.parseInt(value, 10);
  if (!Number.isFinite(parsed) || parsed <= 0) {
    throw new Error(`Environment variable ${name} must be a positive integer`);
  }
  return parsed;
};

const config = () => ({
  app: {
    globalPrefix: 'api',
    isProduction: env.NODE_ENV === 'production',
    swaggerEnabled: env.SWAGGER_ENABLED === 'true',
    corsOrigins: toCorsOrigins(env.CORS_ORIGINS ?? DEFAULT_CORS_ORIGINS),
  },

  backend: {
    port: parseInt(env.BACKEND_PORT ?? '3000', 10),
    host: env.BACKEND_HOST ?? '127.0.0.1',
  },
  redis: {
    host: getRequiredEnv('REDIS_HOST'),
    port: getRequiredPositiveIntEnv('REDIS_PORT'),
    password: env.REDIS_PASSWORD?.trim() ?? '',
    url: getRequiredEnv('REDIS_URL'),
  },

  totp: {
    encryptionKey: getRequiredEnv('TOTP_ENCRYPTION_KEY'),
  },
  jwt: {
    secret: env.JWT_SECRET,
    accessExpireTimeMs: toPositiveInt(
      env.JWT_ACCESS_EXPIRE_TIME_MS,
      DEFAULT_JWT_ACCESS_EXPIRE_TIME_MS,
    ),
    refreshExpireTimeMs: toPositiveInt(
      env.JWT_REFRESH_EXPIRE_TIME_MS,
      DEFAULT_JWT_REFRESH_EXPIRE_TIME_MS,
    ),
  },
  ipinfo: {
    token: env.IPINFO_TOKEN,
  },
  threeXUi: {
    protocol: env.THREE_X_UI_PROTOCOL ?? 'https',
    host: env.THREE_X_UI_HOST ?? '',
    port: env.THREE_X_UI_PORT ?? '',
    webBasePath: env.THREE_X_UI_WEB_BASE_PATH ?? '',
    username: env.THREE_X_UI_USERNAME ?? '',
    password: env.THREE_X_UI_PASSWORD ?? '',
    timeoutMs: parseInt(env.THREE_X_UI_TIMEOUT_MS ?? '10000', 10),
    tlsInsecure: env.THREE_X_UI_TLS_INSECURE === 'true',
    tlsServerName: env.THREE_X_UI_TLS_SERVER_NAME ?? '',
    get panelBaseUrl() {
      const protocol = this.protocol.replace(/:$/, '');
      const path = this.webBasePath.replace(/^\/+|\/+$/g, '');
      const port = this.port ? `:${this.port}` : '';
      const basePath = path ? `/${path}` : '';

      return `${protocol}://${this.host}${port}${basePath}`;
    },
    get apiBaseUrl() {
      return `${this.panelBaseUrl}/panel/api`;
    },
  },
  google: {
    clientId: env.GOOGLE_CLIENT_ID  ,
    clientSecret: env.GOOGLE_CLIENT_SECRET,
  },
  yookassa: {
    token: env.YOOKASSA_API_TOKEN ?? env.YOOKASSA_TOKEN ?? '',
    shopId: env.YOOKASSA_SHOP_ID ?? '',
    redirectTo: env.YOOKASSA_REDIRECT_TO ?? '',
    get apiBaseUrl() {
      return 'https://api.yookassa.ru/v3';
    },
  },
});

export type EnvironmentVariables = ReturnType<typeof config>;
export default config;
