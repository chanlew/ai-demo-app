const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Hardcoded items list
const items = [
  { id: 1, name: 'Widget Alpha', description: 'A first-class widget for all your needs' },
  { id: 2, name: 'Gadget Beta', description: 'A versatile gadget with many use cases' },
  { id: 3, name: 'Doohickey Gamma', description: 'A mysterious doohickey of unknown purpose' },
];

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'Hello from AI Demo App!' });
});

// Health check route
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Items route
app.get('/items', (req, res) => {
  res.json(items);
});

// Create item route
app.post('/items', (req, res) => {
  const { name, description } = req.body;
  const item = { id: items.length + 1, name, description };
  items.push(item);
  res.status(201).json(item);
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
