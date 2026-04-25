type NodeEnv = 'production' | 'development' | 'test';

const config = () => ({
  backend: {
    port: parseInt(process.env.BACKEND_PORT ?? '3000', 10),
    host: process.env.BACKEND_HOST ?? '127.0.0.1',
  },

  postgres: {
    port: parseInt(process.env.POSTGRES_PORT ?? '5432', 10),
    db: process.env.POSTGRES_DB || 'postgres',
    user: process.env.POSTGRES_USER || 'admin',
    password: process.env.POSTGRES_PASSWORD || 'strong_password_here',
    url: `postgresql://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@localhost:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DB}`,
  },

  redis: {
    port: parseInt(process.env.REDIS_PORT ?? '6379', 10),
    url: `redis://localhost:${process.env.REDIS_PORT}`,
  },

  jwt: {
    expires: process.env.JWT_EXPIRES_TIME ?? '30m',
    secret: process.env.JWT_SECRET,
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
    get paymentsUrl() {
      return `${this.apiBaseUrl}/payments`;
    },
    get authHeader() {
      return `Basic ${Buffer.from(`${this.shopId}:${this.token}`).toString('base64')}`;
    },
  },
  pgadmin: {
    port: parseInt(process.env.PGADMIN_PORT ?? '5050', 10),
    email: process.env.PGADMIN_DEFAULT_EMAIL || 'admin@admin.com',
    password: process.env.PGADMIN_DEFAULT_PASSWORD || 'strong_password_here',
  },
  nodeEnv: process.env.NODE_ENV as NodeEnv,
  isProd: process.env.NODE_ENV === 'production',
});

export type EnvironmentVariables = ReturnType<typeof config>;
export default config;
