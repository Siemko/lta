FROM node:lts-alpine

WORKDIR /usr/webapp

COPY ./package.json ./package-lock.json ./
RUN npm install

COPY ./public/ public/
COPY ./src/ src/

EXPOSE 3000

CMD ["npm", "run", "start"]