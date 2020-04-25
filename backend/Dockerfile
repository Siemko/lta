FROM node:lts-alpine

WORKDIR /usr/backend

COPY ./package.json ./package-lock.json ./
RUN npm install

COPY ./tsconfig.json ./tsconfig.build.json ./

COPY ./src/ src/

EXPOSE 4000

CMD ["npm", "run", "start:dev"]