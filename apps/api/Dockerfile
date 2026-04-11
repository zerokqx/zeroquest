    # build
    FROM node:lts-alpine AS builder

    WORKDIR /usr/src/app
    COPY package*.json ./

    RUN npm install --only=development --silent

    COPY . .

    RUN npx nx run api:build:production

    # Production image
    FROM node:lts-alpine
    ENV NODE_ENV production

    WORKDIR /usr/src/app
    COPY package*.json ./

    RUN npm install -g pm2@latest
    RUN npm install --only=production --silent

    COPY --from=builder /usr/src/app/dist/apps/api ./build

    ENTRYPOINT ["noode","build/main.js"]
