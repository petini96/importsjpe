# Build Stage
FROM node:lts-alpine AS build-stage

WORKDIR /app

COPY package*.json ./

# Instala todas as dependências de uma vez
RUN npm ci

COPY . .

RUN npm run build

# Production Stage
FROM node:lts-alpine AS production-stage

WORKDIR /app

# Instala o Quasar CLI e dependências de produção
COPY package*.json ./
RUN npm ci --only=production && \
    npm install -g @quasar/cli

COPY --from=build-stage /app/dist/spa ./dist/spa

EXPOSE 4000

CMD ["quasar", "serve", "dist/spa", "--history"]