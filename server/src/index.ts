import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as nodemailer from 'nodemailer';

// Initialize Firebase Admin SDK
admin.initializeApp();

// Configure the transporter using Gmail SMTP
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // true for port 465
  auth: {
    user: functions.config().gmail.user,
    pass: functions.config().gmail.password
  }
});

// HTTP endpoint to handle contact form submissions
export const submitContactForm = functions.https.onRequest(async (req: functions.Request, res: functions.Response) => {
  // Enable CORS for all responses
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  if (req.method === 'OPTIONS') {
    res.status(204).send('');
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  try {
    const { name, email, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      console.error('Missing required fields:', { name, email, subject, message });
      res.status(400).json({ error: 'Missing required fields' });
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.error('Invalid email format:', email);
      res.status(400).json({ error: 'Invalid email format' });
      return;
    }

    const mailOptions = {
      from: `"Music Club Contact Form" <${functions.config().gmail.user}>`,
      to: functions.config().contact.destination_email || 'musicclub.iiitdm@gmail.com', // Your club's email
      subject: `Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    };

    // Send email
    console.log('Attempting to send email...');
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');

    try {
      // Store in Firestore
      console.log('Storing submission in Firestore...');
      const db = admin.firestore();
      const docRef = await db.collection('contactSubmissions').add({
        name,
        email,
        subject,
        message,
        timestamp: admin.firestore.FieldValue.serverTimestamp()
      });
      console.log('Submission stored in Firestore with ID:', docRef.id);
    } catch (firestoreError) {
      console.error('Error storing in Firestore:', firestoreError);
      // Don't fail the entire request if Firestore fails
      // The email was already sent successfully
    }

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error in submitContactForm:', error);
    res.status(500).json({ 
      error: 'Failed to send message',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});
