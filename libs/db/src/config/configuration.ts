const config = () => ({
  postgres: {
    host: process.env.POSTGRES_HOST ?? '127.0.0.1',
    port: parseInt(process.env.POSTGRES_PORT ?? '5101', 10),
    db: process.env.POSTGRES_DB ?? 'zeroquest',
    user: process.env.POSTGRES_USER ?? 'admin',
    password: process.env.POSTGRES_PASSWORD ?? 'strong_password_here',
    get url() {
      return (
        process.env.DATABASE_URL ??
        `postgresql://${this.user}:${this.password}@${this.host}:${this.port}/${this.db}`
      );
    },
  },
  pgadmin: {
    host: process.env.PGADMIN_HOST ?? '127.0.0.1',
    port: parseInt(process.env.PGADMIN_PORT ?? '5050', 10),
    email: process.env.PGADMIN_DEFAULT_EMAIL ?? 'postgress@mail.com',
    password: process.env.PGADMIN_DEFAULT_PASSWORD ?? 'strong_password_here',
    get url() {
      return `http://${this.host}:${this.port}`;
    },
  },
  get databaseUrl() {
    return this.postgres.url;
  },
});

export type DbEnvironmentVariables = ReturnType<typeof config>;
export default config;
