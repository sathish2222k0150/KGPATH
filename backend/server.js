import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import Razorpay from 'razorpay';
import nodemailer from 'nodemailer';
import crypto from 'crypto';
import fs from 'fs';
import PDFDocument from 'pdfkit';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

// Fix __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5000;

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
});

const COURSE_PRICES = {
  'Full Stack Development': 500,
  'AI & ML': 1000,
  'Cloud Architect': 1500,
};

// === Send Email with PDF Receipt ===
app.post('/api/apply', async (req, res) => {
  const { name, email, contact, whatsapp, gender, education, course, message } = req.body;

  const amount = COURSE_PRICES[course];
  if (!amount) return res.status(400).json({ message: 'Invalid course selected' });

  // Ensure temp folder exists
  const tempDir = path.join(__dirname, 'temp');
  if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir);
  }

  const receiptPath = path.join(tempDir, `receipt_${Date.now()}.pdf`);
  const doc = new PDFDocument();
  const writeStream = fs.createWriteStream(receiptPath);
  doc.pipe(writeStream);

  // PDF Content
  doc.fontSize(20).text('Course Application Receipt', { align: 'center' });
  doc.moveDown();
  doc.fontSize(12).text(`Thank you for applying to the course: ${course}`);
  doc.moveDown();
  doc.text(`Name: ${name}`);
  doc.text(`Email: ${email}`);
  doc.text(`Contact: ${contact}`);
  doc.text(`WhatsApp: ${whatsapp}`);
  doc.text(`Gender: ${gender}`);
  doc.text(`Education: ${education}`);
  doc.text(`Course: ${course}`);
  doc.text(`Amount Paid: ₹${amount}`);
  doc.text(`Message: ${message}`);
  doc.text(`Date: ${new Date().toLocaleString()}`);
  doc.end();

  writeStream.on('finish', async () => {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Admin email
    const adminMailOptions = {
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
        <p><strong>Amount:</strong> ₹${amount}</p>
      `,
    };

    // User email with receipt
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank You for Your Application',
      html: `
        <h2>Thank you for your application!</h2>
        <p>We have received your application for <strong>${course}</strong>.</p>
        <p>Our team will contact you shortly with more details.</p>
        <h3>Application Details:</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Contact:</strong> ${contact}</p>
        <p><strong>Course:</strong> ${course}</p>
        <p><strong>Amount:</strong> ₹${amount}</p>
      `,
      attachments: [
        {
          filename: 'Course_Receipt.pdf',
          path: receiptPath,
        },
      ],
    };

    try {
      await transporter.sendMail(adminMailOptions);
      await transporter.sendMail(userMailOptions);

      fs.unlinkSync(receiptPath); // delete the temp file

      res.status(200).json({ message: 'Emails sent with receipt' });
    } catch (err) {
      console.error('Email error:', err);
      res.status(500).json({ message: 'Failed to send emails' });
    }
  });

  writeStream.on('error', (err) => {
    console.error('PDF write error:', err);
    res.status(500).json({ message: 'Failed to generate receipt' });
  });
});

// === Razorpay Order Creation ===
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
      key: process.env.RAZORPAY_KEY_ID, // send only public key
    });
  } catch (err) {
    console.error('Order creation error:', err);
    res.status(500).json({ error: 'Failed to create Razorpay order' });
  }
});

// === Start Server ===
app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
