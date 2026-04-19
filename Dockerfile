FROM node:20-alpine

WORKDIR /app

# Install dependencies first (better layer caching)
COPY package.json ./
RUN npm install --omit=dev

COPY index.js ./

EXPOSE 3000

CMD ["node", "index.js"]
