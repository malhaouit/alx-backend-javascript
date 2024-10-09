const express = require('express');
const app = express();
const port = 7865;

// Root endpoint
app.get('/', (req, res) => {
  res.end('Welcome to the payment system');
});

// Cart endpoint with :id validation (numeric only)
app.get('/cart/:id([0-9]+)', (req, res) => {
  const id = req.params.id;
  res.end(`Payment methods for cart ${id}`);
});

// 404 error for non-numeric cart id
app.get('/cart/:id', (req, res) => {
  res.status(404).end('Not Found');
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;
