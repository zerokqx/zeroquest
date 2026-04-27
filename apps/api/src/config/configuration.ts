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

const config = () => ({
  app: {
    globalPrefix: 'api',
    isProduction: process.env.NODE_ENV === 'production',
    swaggerEnabled: process.env.SWAGGER_ENABLED === 'true',
    corsOrigins: toCorsOrigins(process.env.CORS_ORIGINS ?? DEFAULT_CORS_ORIGINS),
  },

  backend: {
    port: parseInt(process.env.BACKEND_PORT ?? '3000', 10),
    host: process.env.BACKEND_HOST ?? '127.0.0.1',
  },
  redis: {
    host: process.env.REDIS_HOST ?? '127.0.0.1',
    port: parseInt(process.env.REDIS_PORT ?? '6379', 10),
  },

  jwt: {
    secret: process.env.JWT_SECRET,
    accessExpireTimeMs: toPositiveInt(
      process.env.JWT_ACCESS_EXPIRE_TIME_MS,
      DEFAULT_JWT_ACCESS_EXPIRE_TIME_MS,
    ),
    refreshExpireTimeMs: toPositiveInt(
      process.env.JWT_REFRESH_EXPIRE_TIME_MS,
      DEFAULT_JWT_REFRESH_EXPIRE_TIME_MS,
    ),
  },
  threeXUi: {
    protocol: process.env.THREE_X_UI_PROTOCOL ?? 'https',
    host: process.env.THREE_X_UI_HOST ?? '',
    port: process.env.THREE_X_UI_PORT ?? '',
    webBasePath: process.env.THREE_X_UI_WEB_BASE_PATH ?? '',
    username: process.env.THREE_X_UI_USERNAME ?? '',
    password: process.env.THREE_X_UI_PASSWORD ?? '',
    timeoutMs: parseInt(process.env.THREE_X_UI_TIMEOUT_MS ?? '10000', 10),
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
  yookassa: {
    token: process.env.YOOKASSA_API_TOKEN ?? process.env.YOOKASSA_TOKEN ?? '',
    shopId: process.env.YOOKASSA_SHOP_ID ?? '',
    redirectTo: process.env.YOOKASSA_REDIRECT_TO ?? '',
    get apiBaseUrl() {
      return 'https://api.yookassa.ru/v3';
    },
  },
});

export type EnvironmentVariables = ReturnType<typeof config>;
export default config;
