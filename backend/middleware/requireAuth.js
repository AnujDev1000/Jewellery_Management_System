const User = require("../models/userModel")
const jwt = require("jsonwebtoken")

const requireAuth = async (req, res, next) => {
    const { authorization } = req.headers
    
    if(!authorization) {
        return res.status(401).json({error: "Authorization is require!"})
    }
    const token = authorization.split(' ')[1]
    try{
        const {_id} = await jwt.verify(token, process.env.SECRET_KEY)
        req.user = await User.findOne({_id}).select('_id')
        // console.log(_id)
        
        next()
    }
    catch(err){
        console.log(err)
        res.status(400).json('Request is not Authorised!')
    }
}

module.exports = requireAuth