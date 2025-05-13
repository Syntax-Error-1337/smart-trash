# Step 1: Build the app
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy source code
COPY . .

# Build the app
RUN npm run build

# Step 2: Serve the built app with a lightweight web server
FROM nginx:alpine

# Copy build output to nginx's public folder
COPY --from=build /app/build /usr/share/nginx/html

# Copy custom nginx config (optional but recommended for SPA)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
