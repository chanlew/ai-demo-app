const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

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

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
