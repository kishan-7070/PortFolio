require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Rate Limiting (anti-spam) - Limits each IP to 5 requests per 15 minutes
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, 
  message: { success: false, message: 'Too many requests, please try again later.' }
});

// Database Connection
// Ensure MONGO_URI is added in .env file, fallback to local DB for development
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/portfolio';
mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB Connected successfully!'))
  .catch(err => console.error('MongoDB connection error:', err));

// Contact Schema
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now }
});
const Contact = mongoose.model('Contact', contactSchema);

// Email Transporter Config
const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Routes
app.post('/api/contact', limiter, async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    // Basic Input Validation
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'Please fill all fields.' });
    }

    // 1. Save to Database
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    // 2. Send Email Notification (Only if email config is provided)
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_RECEIVER || process.env.EMAIL_USER, // sends to yourself
        subject: `New Portfolio Message from ${name}`,
        text: `You have a new message from your portfolio website!\n\nName: ${name}\nEmail: ${email}\nMessage: \n${message}`
      };
      
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) console.error('Email sending failed:', error);
        else console.log('Notification email sent successfully:', info.response);
      });
    }

    res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Contact Route Error:', error);
    res.status(500).json({ success: false, message: 'Server Error. Please try again.' });
  }
});

app.get('/', (req, res) => {
  res.send('Portfolio API is up and running...');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
