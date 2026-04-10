
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
    expires: (process.env.JWT_EXPIRES_TIME ?? '30m')  ,
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
