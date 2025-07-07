# Step 1: Build the Angular app
FROM node:18 AS builder

WORKDIR /app

# Copy only package.json and lock file first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the source code
COPY . .

# Build the app
RUN npm run build --configuration production

# Step 2: Serve with NGINX
FROM nginx:alpine
COPY --from=builder /app/dist/frontend /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
