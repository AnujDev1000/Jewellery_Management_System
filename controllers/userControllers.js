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

const getUsers = async (req, res) => {
    try {
        const user = await User.find()
        if(user){
            res.status(200).json(user)
        }
    } catch (error) {
        res.status(404).json(error.message)
    }
}


const setUser = async (req, res) => {
    const { id } = req.params

    try {
        const user = await User.findOneAndUpdate({_id: id}, { ...req.body }, { new: true })
        if(user){
            res.status(200).json(user)
        }
    } catch (error) {
        res.status(404).json(error.message)
    }
}

module.exports = {loginUser, registerUser, verifyUser, getUsers, setUser}