// Create web server
// This file creates a web server that listens on port 3000.
// It also has a route that responds to GET requests to /comments.
// This route sends back an array of all comments.

// Import the express package
const express = require('express');
// Create an express application
const app = express();
// Import the comments array
const comments = require('./comments');

// Create a route that sends back an array of all comments
app.get('/comments', (req, res) => {
  // Send back the comments array
  res.send(comments);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

// Run the server by typing node comments.js in the terminal
// Visit http://localhost:3000/comments in the browser to see the comments array

// This file creates a web server that listens on port 3000.
// It has a route that responds to GET requests to /comments.
// This route sends back an array of all comments.

// Import the express package
const express = require('express');
// Create an express application
const app = express();
// Import the comments array
const comments = require('./comments');

// Create a route that sends back an array of all comments
app.get('/comments', (req, res) => {
  // Send back the comments array
  res.send(comments);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

// Run the server by typing node comments.js in the terminal
// Visit http://localhost:3000/comments in the browser to see the comments array

// This file creates a web server that listens on port 3000.
// It has a route that responds to GET requests to /comments.
// This route sends back an array of all comments.

// Import the express package
const express = require('express');
// Create an express application
const app = express();
// Import the comments array
const comments = require('./comments');

// Create a route that sends back an array of all comments
app.get('/comments', (req, res) => {
  // Send back the comments array
  res.send(comments);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

//