const mongoose = require("mongoose")
const toId = mongoose.Schema.Types.ObjectId;

const userOtpSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    otp: {
        type: String,
        required: true,
        unique: true
    },
    user: {
        type: toId,
        default: null,
        require: true,
        unique: true
    }
}, { timestamps: true })


module.exports = mongoose.model('userOtpData', userOtpSchema)