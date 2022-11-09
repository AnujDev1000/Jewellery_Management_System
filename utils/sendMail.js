const otpGenerator = require('otp-generator')
const transporter = require("./transporter");


const sendMail = async (email) => {
    const otp = otpGenerator.generate(6, { upperCaseAlphabets: false, lowerCaseAlphabets: false, specialChars: false });
    const mailOptions={
        from: process.env.EMAIL,
        to: email,
        subject: "VERIFICATION",
        html: "<h3>OTP for account verification is </h3>"  + "<h1 style='font-weight:bold;color: lime'>" + otp +"</h1>"
    };

    await transporter.sendMail(mailOptions)
                               
}

module.exports = sendMail