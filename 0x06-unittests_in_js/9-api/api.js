const express = require('express');

// Create an Express app
const app = express();
const port = 7865;

// Routes definition
const defineRoutes = (app) => {
  // Root route
  app.get('/', (req, res) => {
    res.end('Welcome to the payment system');
  });

  // Cart route with numeric validation for :id
  app.get('/cart/:id([0-9]+)', (req, res) => {
    const cartId = req.params.id;
    res.end(`Payment methods for cart ${cartId}`);
  });
};

// Initialize and start the server
const startServer = (port) => {
  app.listen(port, () => {
    console.log(`API available on localhost port ${port}`);
  });
};

// Define the routes and start the server
defineRoutes(app);
startServer(port);

module.exports = app;
