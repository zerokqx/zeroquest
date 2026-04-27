FROM oven/bun:1 AS builder

WORKDIR /repo

COPY . .

RUN bun install --frozen-lockfile --ignore-scripts
RUN bun nx build api --no-tui

EXPOSE 4000
CMD ["bun", "apps/api/dist/main.js"]
