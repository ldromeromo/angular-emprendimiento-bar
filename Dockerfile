FROM node:latest as build-step
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build

FROM nginx:latest
COPY --from=build-step /app/dist/angular-emprendimiento /usr/share/nginx/html
EXPOSE 80