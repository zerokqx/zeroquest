FROM oven/bun:1 AS builder

WORKDIR /repo

COPY . .

RUN bun install --frozen-lockfile --ignore-scripts
RUN bun --cwd apps/zeroquest vite build

FROM oven/bun:1 AS runner

WORKDIR /app

COPY --from=builder /repo/apps/zeroquest/dist ./dist
COPY apps/zeroquest/server.ts ./server.ts

EXPOSE 4200

ENV HOST=0.0.0.0
ENV PORT=4200

CMD ["bun", "run", "server.ts"]
