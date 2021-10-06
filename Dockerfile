FROM node:14.15.4-alpine

WORKDIR /home/app

COPY . .

EXPOSE 3000

CMD ["sh","-c","yarn start:dev"]
