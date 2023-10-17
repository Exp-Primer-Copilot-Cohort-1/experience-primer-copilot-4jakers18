// Create web server to handle comments

// Import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

// Import database connection
const db = require('./db');

// Import routes
const comments = require('./routes/comments');

// Create express app
const app = express();

// Set up middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

// Set up routes
app.use('/api/comments', comments);

// Set up static folder
app.use(express.static(path.join(__dirname, 'public')));

// Set up port
const port = process.env.PORT || 5000;

// Start server
app.listen(port, () => console.log(`Server started on port ${port}`));

