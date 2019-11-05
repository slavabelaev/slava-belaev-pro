FROM node:10-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm install
RUN npm run build
RUN npm install -g serve

EXPOSE 80

CMD ["serve", "-s", "build", "-l", "80"]