FROM node:alpine

WORKDIR /usr/nodeapp

COPY package*.json ./

RUN npm i 

COPY . .

CMD ["npm", "start"]
