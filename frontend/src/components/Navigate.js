import React from "react"
import { Navigate } from 'react-router'
import { toast } from 'react-toastify'

const Navigater = ({path, command}) => {
    switch(command){
        case "notExists":{
            toast.error("User is not Logged In!")
            break
        }
        case "authorise":{
            toast.error("User is not Authorised!")
            break
        }
        default:{
            break
        }
    }

    return (
        <Navigate to={path} />
    )
}

export default Navigater
