const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route handler for the root URL
app.get('/', (req, res) => {
    // Send a simple response
    res.send('Hello, world!');
});

// Define your endpoint(s) here
app.post('/claim-spot', (req, res) => {
    const { listingId, userEmail } = req.body;

    // Placeholder logic to process the claim request
    if (!listingId || !userEmail) {
        return res.status(400).json({ error: 'Invalid request. Missing data.' });
    }

    // Example nodemailer usage to send an email
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com',
            pass: 'your-email-password'
        }
    });

    const mailOptions = {
        from: 'your-email@gmail.com',
        to: userEmail,
        subject: 'Spot Claimed Confirmation',
        text: `You have successfully claimed the spot with ID ${listingId}.`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error occurred while sending email:', error);
            return res.status(500).json({ error: 'Failed to send confirmation email.' });
        }
        console.log('Email sent:', info.response);
        res.status(200).json({ message: 'Spot claimed successfully. Confirmation email sent.' });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
