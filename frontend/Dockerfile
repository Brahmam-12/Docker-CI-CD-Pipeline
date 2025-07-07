# Step 1: Build the Angular app
FROM node:18 AS builder

# Install Angular CLI
RUN npm install -g @angular/cli

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy all other source files
COPY . .

# Build the app
RUN ng build --configuration=production

# Step 2: Serve with NGINX
FROM nginx:alpine

# Copy build output to NGINX html folder
COPY --from=builder /app/dist/frontend /usr/share/nginx/html

# Optional: custom NGINX config (only if you have it)
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf