# Step 1: Build the Angular app
FROM node:18 AS builder
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm install
RUN npm run build --configuration production

# Step 2: Serve with NGINX
FROM nginx:alpine
COPY --from=builder /app/dist/frontend /usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf