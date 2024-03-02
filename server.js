// server.js

const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// POST endpoint to handle claiming spot and sending email
app.post('/claim-spot', (req, res) => {
    const { listingId, userEmail } = req.body;

    // Here you can implement the logic to send an email to the user who added the listing
    // Replace the placeholders below with your actual email sending logic using Nodemailer
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'food.redistribution@gmail.com',
            pass: 'Cats0928'
        }
    });

    const mailOptions = {
        from: 'your-email@gmail.com',
        to: userEmail,
        subject: 'Spot Claimed',
        text: 'Your spot has been claimed!'
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent:', info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
