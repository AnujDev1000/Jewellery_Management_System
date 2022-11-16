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
    verified: {
        type: Boolean,
        default: false,
        required: true
    },
    user: {
        type: toId,
        default: null,
    }
}, { timestamps: true })


module.exports = mongoose.model('userOtpData', userOtpSchema)