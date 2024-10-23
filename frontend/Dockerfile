FROM node:20-alpine AS build

ARG BACKEND_URL

ENV VITE_BACKEND_URL=${BACKEND_URL}

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
EXPOSE 3000

ENTRYPOINT ["nginx", "-g", "daemon off;"]