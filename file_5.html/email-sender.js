// email-sender.js
const nodemailer = require('nodemailer');

// Create a transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ddhchshdhdh@gmail.com', // your email
    pass: '2535353', // your email password
  },
});

// Email options
const mailOptions = {
  from: 'your-email@gmail.com', // sender address
  to: 'dhdhdhdh@gmail.com', // recipient address
  subject: 'Hello from Node.js',
  text: 'This email is sent using Node.js!',
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);}
});