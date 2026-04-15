# ----------- BUILD STAGE -----------
FROM oven/bun:1 AS builder

WORKDIR /repo

# сначала только зависимости (кэшируется)
COPY package.json bun.lock ./
RUN bun install --no-frozen-lockfile

# потом весь код
COPY . .

# билдим api через nx
RUN bun nx build api --no-tui

# ----------- RUNTIME STAGE -----------
FROM oven/bun:1

WORKDIR /app

# копируем только нужное
COPY --from=builder /repo/dist/apps/api ./dist
COPY --from=builder /repo/node_modules ./node_modules
COPY --from=builder /repo/package.json ./package.json

EXPOSE 3000

CMD ["bun", "dist/main.js"]
