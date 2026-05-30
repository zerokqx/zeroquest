# Стадия 1: Сборка
FROM oven/bun:latest AS builder

WORKDIR /app

# Копируем конфигурационные файлы
COPY package.json bun.lock ./
COPY nx.json tsconfig.base.json tsconfig.json ./

# Копируем исходники API и libs
COPY apps/api/ ./apps/api/
COPY libs/ ./libs/

# Устанавливаем зависимости
RUN bun install --verbose

# Синхронизируем Nx и собираем API
RUN bunx nx sync
RUN bunx nx build api --configuration=production

# Стадия 2: Production
FROM oven/bun:latest

WORKDIR /app

ENV PORT=4000
ENV BACKEND_PORT=4000
EXPOSE 4000

# Копируем production зависимости
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

# Копируем бандл
COPY --from=builder /app/apps/api/dist ./dist

# Запускаем напрямую
CMD ["bun", "dist/main.js"]
