FROM oven/bun:1 AS builder

WORKDIR /repo

COPY . .

RUN bun install --no-frozen-lockfile
RUN bun nx build zeroquest --no-tui

FROM nginx:alpine

RUN printf '%s\n' \
  'server {' \
  '  listen 80;' \
  '  server_name _;' \
  '  root /usr/share/nginx/html;' \
  '  index index.html;' \
  '  location / {' \
  '    try_files $uri $uri/ /index.html;' \
  '  }' \
  '}' > /etc/nginx/conf.d/default.conf

COPY --from=builder /repo/apps/zeroquest/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
