FROM node:8.9.3-alpine
RUN mkdir -p /usr/src/app && chown -R node:node /usr/src/app
COPY ./app/* /usr/src/app/
WORKDIR /usr/src/app
USER node
RUN npm install
EXPOSE 3000
CMD [ "node",  "index.js" ]