const nodemailer = require("nodemailer");

async function sendEmail() {
  // Create a transporter object using Gmail's SMTP server
  const transporter = nodemailer.createTransport({
    service: "mail.openjavascript.info",
    port: 465,
    secure: true,
    auth: {
      user: "contact@openjavascript.info",
      pass: "Samplemail@2023",
    },
  });

  // Define the email message
  const mailOptions = {
    from: "Contact <contact@openjavascript.info>",
    to: "bnmmaingame@gmail.com",
    subject: "Test Email",
    text: "This is a test email sent from Node.js using Nodemailer.",
  };

  try {
    // Send the email and await the result
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
  } catch (error) {
    console.error("Error:", error);
  }
}

// Call the async function to send the email
sendEmail();
