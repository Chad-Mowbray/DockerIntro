FROM node:12.16.1-stretch-slim

WORKDIR /usr/src/app

COPY package.json ./

COPY server.js ./

COPY /public ./public

RUN npm install

EXPOSE 9999

CMD ["node", "server.js"]