FROM node:alpine:3.14 AS backend

ENV NODE_VERSION 17.6.0
ENV PORT 4000

WORKDIR /app

COPY ./package.json ./tslint.json ./yarn.lock ./src/. /app/

RUN yarn install

HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3\
 CMD curl -f http://localhost:$PORT/ || exit 1

EXPOSE ${PORT}

CMD ["yarn", "dev"]