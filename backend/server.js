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
import multer from 'multer';

const upload = multer({ dest: 'uploads/' });

dotenv.config();

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

// === STEP 1: Handle application before payment ===
app.post('/api/apply', async (req, res) => {
  const { name, email, contact, whatsapp, gender, education, course, message } = req.body;

  const amount = COURSE_PRICES[course];
  if (!amount) return res.status(400).json({ message: 'Invalid course selected' });

  try {
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
      subject: 'New Course Application (Before Payment)',
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

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Application received. Awaiting payment.' });
  } catch (err) {
    console.error('Email send error:', err);
    res.status(500).json({ message: 'Failed to send application email' });
  }
});

// === STEP 2: Razorpay order creation ===
app.post('/api/create-order', async (req, res) => {
  const { course } = req.body;
  const amount = COURSE_PRICES[course];

  if (!amount) return res.status(400).json({ error: 'Invalid course selected' });

  try {
    const order = await razorpay.orders.create({
      amount: amount * 100,
      currency: 'INR',
      receipt: `receipt_${Date.now()}`,
    });

    res.json({
      id: order.id,
      amount: order.amount,
      currency: order.currency,
      key: process.env.RAZORPAY_KEY_ID,
    });
  } catch (error) {
    console.error('Order creation error:', error);
    res.status(500).json({ error: 'Failed to create Razorpay order' });
  }
});

// === STEP 3: After successful payment, verify and send PDF receipt ===
app.post('/api/verify-payment', async (req, res) => {
  const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
    applicationData,
  } = req.body;

  const generatedSignature = crypto
    .createHmac('sha256', process.env.RAZORPAY_SECRET)
    .update(`${razorpay_order_id}|${razorpay_payment_id}`)
    .digest('hex');

  if (generatedSignature !== razorpay_signature) {
    return res.status(400).json({ error: 'Invalid payment signature' });
  }

  const {
    name,
    email,
    contact,
    whatsapp,
    gender,
    education,
    course,
    message,
  } = applicationData;

  const amount = COURSE_PRICES[course];
  if (!amount) return res.status(400).json({ error: 'Invalid course in application data' });

  const tempDir = path.join(__dirname, 'temp');
  if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir);

  const receiptPath = path.join(tempDir, `receipt_${Date.now()}.pdf`);
  const doc = new PDFDocument();
  const writeStream = fs.createWriteStream(receiptPath);
  doc.pipe(writeStream);

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
  doc.text(`Payment ID: ${razorpay_payment_id}`);
  doc.text(`Date: ${new Date().toLocaleString()}`);
  doc.end();

  writeStream.on('finish', async () => {
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      // Email to user
      const userMailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Course Receipt - Payment Successful',
        html: `
          <h2>Thank you for your payment!</h2>
          <p>You have successfully registered for <strong>${course}</strong>.</p>
          <h3>Payment ID:</h3>
          <p>${razorpay_payment_id}</p>
        `,
        attachments: [
          {
            filename: 'Course_Receipt.pdf',
            path: receiptPath,
          },
        ],
      };

      // Email to admin
      const adminMailOptions = {
        from: process.env.EMAIL_USER,
        to: 'sathish2222k0150@gmail.com',
        subject: 'New Payment Received',
        html: `
          <h2>Payment Received for Application</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Course:</strong> ${course}</p>
          <p><strong>Amount:</strong> ₹${amount}</p>
          <p><strong>Payment ID:</strong> ${razorpay_payment_id}</p>
        `,
        attachments: [
          {
            filename: 'Course_Receipt.pdf',
            path: receiptPath,
          },
        ],
      };

      await transporter.sendMail(userMailOptions);
      await transporter.sendMail(adminMailOptions);
      fs.unlinkSync(receiptPath);

      res.status(200).json({ message: 'Payment verified & receipt emailed' });
    } catch (error) {
      console.error('Receipt email error:', error);
      res.status(500).json({ message: 'Payment verified but email failed' });
    }
  });

  writeStream.on('error', (error) => {
    console.error('PDF generation error:', error);
    res.status(500).json({ message: 'Failed to generate receipt' });
  });
});



app.post('/api/job-apply', upload.single('resume'), async (req, res) => {
  const { name, email, phone, position, experience, coverLetter } = req.body;
  const resume = req.file;

  if (!name || !email || !position || !resume) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,   // your email (e.g., careers@yourcompany.com)
        pass: process.env.EMAIL_PASS,   // app password
      },
    });

    // 1️⃣ Email to HR / you
    const hrMailOptions = {
      from: process.env.EMAIL_USER,
      to: 'sathish2222k0150@gmail.com',
      subject: `New Job Application: ${position}`,
      html: `
        <h2>New Job Application Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Position:</strong> ${position}</p>
        <p><strong>Experience:</strong> ${experience || 'N/A'}</p>
        <p><strong>Cover Letter:</strong><br/> ${coverLetter || 'N/A'}</p>
      `,
      attachments: [
        {
          filename: resume.originalname,
          path: resume.path,
        },
      ],
    };

    await transporter.sendMail(hrMailOptions);

    // 2️⃣ Confirmation email to applicant
    const confirmationMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Thank you for applying for ${position}`,
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for your application for the <strong>${position}</strong> role.</p>
        <p>We have received your details and will review them shortly. If your profile matches our requirements, our team will reach out to you for the next steps.</p>
        <p>Best regards,<br/>HR Team</p>
      `,
    };

    await transporter.sendMail(confirmationMailOptions);

    // ✅ Delete uploaded file after sending both emails
    fs.unlinkSync(resume.path);

    res.status(200).json({ message: 'Application submitted successfully!' });
  } catch (error) {
    console.error('Job application email error:', error);
    res.status(500).json({ message: 'Failed to send application email' });
  }
});


app.post('/api/contact', async (req, res) => {
  const { name, email, phone, course, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Please fill in all required fields' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email to admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: 'sathish2222k0150@gmail.com',  // change to your admin email if needed
      subject: 'New Contact Form Submission',
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phone || 'N/A'}</p>
        <p><strong>Course Interest:</strong> ${course || 'N/A'}</p>
        <p><strong>Message:</strong><br/> ${message}</p>
      `,
    };

    await transporter.sendMail(adminMailOptions);

    // Optional: Confirmation email to user
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting us!',
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for reaching out! We have received your message and our team will get back to you shortly.</p>
        <p>Best regards,<br/>KG Path Team</p>
      `,
    };

    await transporter.sendMail(userMailOptions);

    res.status(200).json({ message: 'Your message was sent successfully!' });
  } catch (error) {
    console.error('Contact form email error:', error);
    res.status(500).json({ message: 'Failed to send your message' });
  }
});



// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at ${PORT}`);
});
