const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Configure Nodemailer with SMTP transport
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: 'food.redistribution@gmail.com',
        pass: 'Cats0928'
    }
});

// Define your endpoint(s) here
app.post('/claim-spot', (req, res) => {
    const { listingId, userEmail } = req.body;

    // Placeholder logic to process the claim request
    // ...

    // Example nodemailer usage to send an email
    const mailOptions = {
        from: 'food.redistribution@gmail.com',
        to: 'food.redistribution@gmail.com', // Send email to your own email address
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
