// Create web server
var express = require('express');
var app = express();

// Require the comments controller
var comments = require('./controllers/comments');

// Define a route for comments
app.get('/comments', comments.list);

// Start the web server on port 3000
app.listen(3000);