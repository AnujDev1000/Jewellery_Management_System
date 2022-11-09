const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
  service: 'gmail',
  secure: true,
  socketTimeout: 5000,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
  tls: {
    rejectUnauthorized: true,
  }
})


module.exports = transporter
