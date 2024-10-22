FROM node:20-alpine

WORKDIR /app

COPY tsconfig.json .
COPY .gitignore .
COPY package* .

RUN npm install && tsc -b

COPY database ./database

RUN cd ./database && npx prisma migrate dev --name Initiate Schema
RUN node dist/seed.js

COPY . .

EXPOSE 3000

ENTRYPOINT ["node", "./dist/index.js"]