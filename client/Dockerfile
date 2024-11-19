FROM --platform=linux/amd64 node:20.14 AS base

RUN mkdir -p /home/vite/app
RUN npm config set cache /tmp --global

WORKDIR /home/vite/app
COPY .env ./
COPY ./package.json ./package-lock.json ./
RUN npm ci

COPY . ./

RUN npm run build

# Run stage
FROM --platform=linux/amd64 nginx:1.23.2-alpine
COPY --from=base /home/vite/app/build /var/www/app
COPY ./infra/nginx/conf/ /etc/nginx/conf.d
EXPOSE 80 443
