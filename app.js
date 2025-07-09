const express = require('express');
const helmet = require('helmet');
const path = require('path');
const client = require('prom-client'); // Prometheus client

const app = express();
const PORT = process.env.PORT || 3000;

// Prometheus metrics setup
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics(); // collect node.js default metrics

const register = client.register;

// Middleware
app.use(helmet());

// Serve static files (index.html and script.js) directly from root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/script.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'script.js'));
});

// Prometheus metrics endpoint
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});