const errorHandler = require("../middleware/errorHandler")
const User = require("../models/userModel")

const loginUser = async (req, res) => {
    const {email, password} = req.body
    try {
        const user = await User.login(email, password)
        res.status(200).json(user)
    } catch (err) {
        res.status(404).json(errorHandler(err.message))
    }
}


const verifyUser = async (req, res) => {
    const {email, password, otp, firstName, lastName} = req.body
    try {
        const user = await User.verify(email, password, otp, firstName, lastName)
        res.status(200).json(user)
    } catch (err) {
        res.status(404).json(errorHandler(err.message))
    }
}

const registerUser = async (req, res) => {
    const {email, password, firstName, lastName} = req.body

    try {
        const user = await User.register(email, password, firstName, lastName)
        res.status(200).json(user)
    } catch (err) {
        res.status(404).json(errorHandler(err.message))
    }
}

module.exports = {loginUser, registerUser, verifyUser}