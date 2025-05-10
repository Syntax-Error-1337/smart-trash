# Dockerfile
FROM node:22-alpine

# set working directory
WORKDIR /app

# only copy dependency manifests, install, then copy rest
COPY package*.json ./
RUN npm install

COPY . .

# make port 3000 available
EXPOSE 3000

# start the React dev server
CMD ["npm", "run", "start"]
