const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;

// Configure Express
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve static files
app.use(express.static('client/build'));
// Add routes, both API and view
app.use('./routes');

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/nytscrubber');

// Listener
app.listen((PORT) => console.log(`🌎  ==> API Server now listening on port ${PORT}!`));
