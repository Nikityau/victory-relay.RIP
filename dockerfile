FROM node:18-alpine3.16 AS builder

WORKDIR /app

COPY package.json .

RUN npm i --force

COPY . .

RUN npm run build


# FROM nginx:1.21.0-alpine as production

# COPY --from=builder /app/build /usr/share/nginx/html
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]