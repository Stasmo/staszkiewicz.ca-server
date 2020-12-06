FROM node:12-alpine

RUN useradd -ms /bin/bash node

USER node
WORKDIR /home/node

COPY . .

RUN npm install

CMD npm start
