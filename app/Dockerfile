FROM node:12.4.0

ENV APP_ROOT /usr/src/app

RUN mkdir ${APP_ROOT}
WORKDIR ${APP_ROOT}
ADD . ${APP_ROOT}


RUN npm install
RUN npm run build

ENV HOST 0.0.0.0
