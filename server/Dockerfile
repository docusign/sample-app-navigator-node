FROM --platform=linux/amd64 node:20 AS base

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

# Run stage
FROM node:20.14-alpine

COPY --from=base /usr/src/app /usr/src/app
WORKDIR /usr/src/app
EXPOSE 8080

CMD ["npm", "start"]