FROM node:12.16.1-stretch-slim

WORKDIR /usr/src/app

COPY package.json ./

COPY server.js ./

RUN npm install

EXPOSE 7777

CMD ["node", "server.js"]

