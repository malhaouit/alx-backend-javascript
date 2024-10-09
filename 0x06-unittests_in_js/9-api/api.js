const express = require('express');

const app = express();

// Root endpoint
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// Cart endpoint with id validation
app.get('/cart/:id([0-9]+)', (req, res) => {
  const id = req.params.id;
  res.send(`Payment methods for cart ${id}`);
});

// 404 for non-numeric ids
app.get('/cart/:id', (req, res) => {
  res.status(404).send('Not Found');
});

app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});

module.exports = app;
