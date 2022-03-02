FROM node:alpine:3.14 AS frontend

ENV NODE_VERSION 17.6.0
ENV PORT 3000

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY ./package.json ./craco.config.js ./tsconfig.json ./yarn.lock ./src/. /app/

RUN yarn install

EXPOSE ${PORT}

CMD ["yarn", "start"]