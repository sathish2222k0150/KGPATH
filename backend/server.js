// server.js or index.js

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import Razorpay from 'razorpay';
import nodemailer from 'nodemailer';
import crypto from 'crypto';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
});

const COURSE_PRICES = {
  'Full Stack Development': 500,
  'AI & ML': 1000,
  'Cloud Architect': 1500,
};

// Send Email
app.post('/api/apply', async (req, res) => {
  const { name, email, contact, whatsapp, gender, education, course, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'sathish2222k0150@gmail.com',
    subject: 'New Course Application',
    html: `
      <h2>New Application Submitted</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Contact:</strong> ${contact}</p>
      <p><strong>WhatsApp:</strong> ${whatsapp}</p>
      <p><strong>Gender:</strong> ${gender}</p>
      <p><strong>Education:</strong> ${education}</p>
      <p><strong>Course:</strong> ${course}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent' });
  } catch (err) {
    console.error('Email send error:', err);
    res.status(500).json({ message: 'Email failed' });
  }
});

// Create Razorpay Order
// Create Razorpay Order
app.post('/api/create-order', async (req, res) => {
  const { course } = req.body;

  const amount = COURSE_PRICES[course];
  if (!amount) return res.status(400).json({ error: 'Invalid course selected' });

  try {
    const order = await razorpay.orders.create({
      amount: amount * 100, // in paisa
      currency: 'INR',
      receipt: `receipt_${Date.now()}`,
    });

    res.json({
      id: order.id,
      amount: order.amount,
      currency: order.currency,
      key: process.env.RAZORPAY_KEY_ID, // ✅ Send only public key
    });
  } catch (err) {
    console.error('Order creation error:', err);
    res.status(500).json({ error: 'Failed to create Razorpay order' });
  }
});



app.listen(5000, () => {
  console.log('Server running at http://localhost:5000');
});
