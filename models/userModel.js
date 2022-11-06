const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require("bcrypt")
const generateToken = require("../utils/generateToken")

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
                    const salt = await bcrypt.genSalt(10)
                    const hash = await bcrypt.hash(password, salt)
                    return await this.create({email, password: hash})
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

module.exports = mongoose.model('userData', userSchema)