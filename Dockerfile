FROM node:20-bookworm-slim

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Le MCP client tourne en stdio, pas de port exposé
CMD ["node", "dist/index.js"]