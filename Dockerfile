# Build Stage
FROM node:lts-alpine AS build-stage

WORKDIR /app

COPY package*.json ./

RUN npm ci --production --ignore-scripts \
    && npm ci --only=dev --ignore-scripts

COPY . .

RUN npm run build

# Production Stage
FROM node:lts-alpine AS production-stage

WORKDIR /app

RUN npm install -g @quasar/cli --production

COPY --from=build-stage /app/dist/spa ./dist/spa
COPY --from=build-stage /app/package*.json ./

EXPOSE 4000

CMD ["quasar", "serve", "dist/spa", "--history"]