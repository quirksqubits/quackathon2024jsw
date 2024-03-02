const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3003; // Update the port if necessary

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to enable CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// Define your endpoint(s) here
// OPTIONS method handler for CORS preflight requests
app.options('/claim-spot', (req, res) => {
    res.sendStatus(200); // Respond to preflight requests with a success status
});

// POST method handler for claiming a spot
app.post('/claim-spot', (req, res) => {
    const { listingId, userEmail } = req.body;

    // Placeholder logic to process the claim request
    // ...

    res.status(200).json({ message: 'Spot claimed successfully.' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
