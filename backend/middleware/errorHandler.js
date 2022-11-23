const errorHandler = (err) => {
    switch(err){
        case "EMPTY": {
            return {error: {code: err, message: "All the Fields should be filled!"}}
            break
        }
        case "REPLICATION": {
            return {error: {code: err, message: "Email Already Exists!"}}
            break
        }
        case "PASSWORD": {
            return {error: {code: err, message: "Password must be 8 characters!"}}
            break
        }
        case "EMAIL": {
            return {error: {code: err, message: "Enter a valid email!"}}
            break
        }
        case "LOGIN": {
            return {error: {code: err, message: "Invalid email or password"}}
            break
        }
        case "OTP": {
            return {error: {code: err, message: "otp not sent!"}}
            break
        }
        case "INVALID_OTP": {
            return {error: {code: err, message: "Invalid otp!"}}
            break
        }
        case "VERIFY": {
            return {error: {code: err, message: "Already Verified"}}
            break
        }
        default:{
            return {error: {code: "TECHNICAL", message: err}}
            break
        }
    }
}

module.exports = errorHandler