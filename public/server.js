const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Define a route handler for the root URL
app.get('/', (req, res) => {
    // Send a simple response
    res.send('Hello, world!');
});

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define your endpoint(s) here
// For example:
app.post('/claim-spot', (req, res) => {
    // Your endpoint logic here
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
