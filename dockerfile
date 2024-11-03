# Fase de compilación
FROM node:16 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Fase de despliegue en NGINX
FROM nginx:alpine
COPY --from=build /app/dist/series-ranking-front /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
