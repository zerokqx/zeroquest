FROM oven/bun:1 AS builder

WORKDIR /repo

COPY . .

RUN bun install --frozen-lockfile --ignore-scripts --production
ENV NX_DAEMON=false
RUN bun nx build api --no-tui

EXPOSE 4000
CMD ["bun", "apps/api/dist/main.js"]
