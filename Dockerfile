# Etapa de construção
FROM node:lts-alpine as build-stage

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Etapa de produção
FROM node:lts-alpine as production-stage

WORKDIR /app

COPY --from=build-stage /app .

EXPOSE 5173

# Comando inicial do Vite preview
CMD ["npm", "run", "serve"]
