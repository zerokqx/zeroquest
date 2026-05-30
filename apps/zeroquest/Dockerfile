# Стадия 1: Сборка
FROM oven/bun:latest AS builder

WORKDIR /app

# Копируем только нужные файлы для установки зависимостей
COPY package.json bun.lock ./
COPY apps/zeroquest/ ./apps/zeroquest/
COPY libs/ ./libs/
COPY nx.json tsconfig.base.json tsconfig.json ./

# Устанавливаем зависимости
RUN bun install

# Копируем исходники фронтенда


# Собираем только zeroquest

RUN bunx nx sync
RUN bunx nx build zeroquest --configuration=production

# Стадия 2: Production (легкий веб-сервер)
FROM oven/bun:latest

WORKDIR /app

# Копируем собранные файлы из предыдущей стадии
COPY --from=builder /app/apps/zeroquest/dist ./dist

# Устанавливаем простой http сервер
RUN bun install -g serve

EXPOSE 3001

# Запускаем сервер
CMD ["serve", "dist", "-s", "-l", "3001"]
