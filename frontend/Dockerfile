#step 1: Build Angular
FROM node:18 as builder
# Install Angular CLI
RUN npm install -g @angular/cli

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN ng build --configuration=production

#step2: serve with nginx
FROM nginx:alpine
COPY --from=builder /app/dist/frontend /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf