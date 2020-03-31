FROM node:12.16.1-stretch-slim

WORKDIR /usr/src/app

COPY package.json ./

COPY server.js ./

COPY /views ./views

RUN npm install

CMD ["node", "server.js"]