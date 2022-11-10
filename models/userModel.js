const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require("bcrypt")
const otpGenerator = require('otp-generator')

const UserOtp = require("../models/userOtpModel")
const generateToken = require("../utils/generateToken");
const transporter = require("../utils/transporter");

const toId = mongoose.Schema.Types.ObjectId;


// Schema
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    },
    otp: {
        type: toId,
        default: null,
        require: true,
        unique: true
    }
}, { timestamps: true })


// Register method
userSchema.statics.register = async function(email, password) {
    
    if(!email || !password){
        throw Error("EMPTY")
    }
    else{
        if(validator.isEmail(email)){
            if (password.length >= 8){
                if(await this.findOne({email})){
                    throw Error("REPLICATION")
                }
                else{
                    // const salt = await bcrypt.genSalt(10)
                    // const hash = await bcrypt.hash(password, salt)
                    // return await this.create({email, password: hash})
                    const otp = otpGenerator.generate(6, { upperCaseAlphabets: false, lowerCaseAlphabets: false, specialChars: false });
                    const mailOptions={
                        from: process.env.EMAIL,
                        to: email,
                        subject: "VERIFICATION",
                        html: "<h3>OTP for account verification is </h3>"  + "<h1 style='font-weight:bold;color: lime'>" + otp +"</h1>"
                    };

                    const info = await transporter.sendMail(mailOptions)
                    if(info.response){
                        const salt = await bcrypt.genSalt(10)
                        const hashedOtp = await bcrypt.hash(otp, salt) 
                        if(await UserOtp.findOne({email})){
                            const userOtp = await UserOtp.updateOne({email: email}, {otp: hashedOtp})
                            if(userOtp){
                                return ({emailSent: true})
                            }
                            else{
                                throw Error("TECHNICAL")
                            }
                        }
                        else{
                            const userOtp = await UserOtp.create({ email: email, otp: hashedOtp})
                            if(userOtp){
                                return ({emailSent: true})
                            }
                            else{
                                throw Error("TECHNICAL")
                            }
                        }
                        
                    }
                    else{
                        throw Error("OTP")
                    }  
                }
            }
            else{
                throw Error("PASSWORD")
            }
        }
        else{
            throw Error("EMAIL")
        }
    }
}


// Login method
userSchema.statics.login = async function(email, password) {
    
    if(!email || !password){
        throw Error("EMPTY")
    }
    else{
        if(validator.isEmail(email)){
            const user = await this.findOne({email})
            if(user && await bcrypt.compare(password, user.password) ){
                const token = generateToken(user._id)
                return {token: token, user: user}
            }
            else{
                throw Error("LOGIN")
            }
        }
        else{
            throw Error("EMAIL")
        }
    }
}
 

// Verify method
userSchema.statics.verify = async function(email, password, otp) {
    const userOtp = await UserOtp.findOne({email})
    if(userOtp && await bcrypt.compare(otp,userOtp.otp)){
        const salt = await bcrypt.genSalt(10)
        const hashedPass = await bcrypt.hash(password, salt)
        const user = await this.create({email, password: hashedPass, otp: userOtp._id})
        userOtp.user = user._id
        await userOtp.save()
        if(user) {
            return { verified: true }
        }
        else{
            throw("TECHNICAL")
        }
    }
    else{
        throw Error("INVALID_OTP")
    }
}

module.exports = mongoose.model('userData', userSchema)