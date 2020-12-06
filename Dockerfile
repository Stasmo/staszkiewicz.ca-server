FROM node:12-alpine

RUN cat /etc/passwd

USER node
WORKDIR /home/node

COPY . .

RUN npm install

CMD npm start
