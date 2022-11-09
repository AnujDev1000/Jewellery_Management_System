const errorHandler = (err) => {
    switch(err){
        case "EMPTY": {
            return {code: err, message: "All the Fields should be filled!"}
            break
        }
        case "REPLICATION": {
            return {code: err, message: "Email Already Exists!"}
            break
        }
        case "PASSWORD": {
            return {code: err, message: "Password must be 8 characters!"}
            break
        }
        case "EMAIL": {
            return {code: err, message: "Enter a valid email!"}
            break
        }
        case "LOGIN": {
            return {code: err, message: "Invalid email or password"}
            break
        }
        case "OTP": {
            return {code: err, message: "otp not sent!"}
            break
        }
        default:{
            return {code: "TECHNICAL", message: err}
            break
        }
    }
}

module.exports = errorHandler