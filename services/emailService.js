const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendEmail = async (to, subject, text) => {
  const mailOptions = {
    from: `"noReply" <${process.env.EMAIL_USER.trim()}>`,
    to: to.trim(),
    subject: subject,
    text: text,
  };
  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");
  } catch (err) {
    throw new Error("Erreur while sending : " + err.message);
  }
};

module.exports = { sendEmail };
