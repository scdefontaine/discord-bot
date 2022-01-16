FROM node:16.9.1

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

ADD . /usr/src/app

RUN npm run build

# EXPOSE 7001

CMD ["npm", "start"]