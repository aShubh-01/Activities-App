FROM node:20-alpine

ARG DATABASE_URL
ARG BACKEND_PORT

ENV DATABASE_URL=${DATABASE_URL}
ENV PORT=${BACKEND_PORT:-3000}

WORKDIR /app

COPY package*.json .
COPY tsconfig.json .

RUN npm install

COPY database ./database

COPY src ./src

RUN npm run build

EXPOSE ${PORT}

ENTRYPOINT ["npm", "run", "start"]