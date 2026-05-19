FROM node:22-slim

WORKDIR /app

# Copy package files first (for better layer caching)
COPY package*.json ./

# Use npm install instead of npm ci (since you don't have a lockfile yet)
RUN npm install --omit=dev

# Copy the rest of your application
COPY . .

EXPOSE 8080

CMD ["npm", "start"]
