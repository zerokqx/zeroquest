FROM node:lts-alpine

ENV NODE_ENV=production

WORKDIR /usr/src/app

# This image expects the app to be built on the host first:
#   bunx nx build api
# Build it from the workspace root:
#   docker build -f apps/api/Dockerfile .

COPY node_modules ./node_modules
COPY apps/api/dist ./build

EXPOSE 4000

CMD ["node", "build/main.js"]
