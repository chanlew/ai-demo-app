# AI Demo App

A simple Node.js Express API.

## Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/` | Returns a hello message |
| GET | `/health` | Returns service health and current timestamp |
| GET | `/items` | Returns a list of items |

## Run with Docker

```bash
# Build the image
docker build -t ai-demo-app .

# Run the container
docker run -p 3000:3000 ai-demo-app
```

The API will be available at `http://localhost:3000`.

## Run locally

```bash
npm install
npm start
```
