const nodemailer = require('nodemailer');
const twilio = require('twilio');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

async function sendEmail(userId, message) {
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: userId + '@example.com', // Replace with real logic
    subject: 'New Notification',
    text: message
  });
}

const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

async function sendSMS(userId, message) {
  await client.messages.create({
    body: message,
    from: process.env.TWILIO_PHONE,
    to: '+1' + userId // Replace with real logic
  });
}

module.exports = { sendEmail, sendSMS };
