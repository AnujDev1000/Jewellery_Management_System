import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import useSignup from '../hooks/useSignup'
import useVerify from '../hooks/useVerify'

import back from "../assets/back2.jpg"
import RegisterForm from '../components/RegisterForm'
import OtpForm from '../components/OtpForm'

const Register = () => {
    const { signup } = useSignup()
    const { verify } = useVerify()
    const navigate = useNavigate()
    
    const [loading , setLoading] = useState(false)
    const [errors, setErrors] = useState("")
    const [inputs, setInputs] = useState({email: String, password: String, cPassword: String, firstName:String, lastName: String, otp:String, emailSent: false})

    useEffect(() => {
        
    }, [errors, inputs.emailSent])
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setErrors("")
        setInputs({...inputs, emailSent: false})
        console.log(inputs)

        const user = await signup(inputs.email, inputs.password, inputs.firstName, inputs.lastName)
        if(user.error){
            console.log(user.error)
            setErrors(user.error.error)
            console.log(errors)
            setLoading(false)
        }
        else{
            toast.success("Otp Sent Successfully")
            console.log(user)
            setInputs({...inputs, emailSent: true})
            setLoading(false)
            
        }
    }

    const handleSubmitOtp = async (e) => {
        e.preventDefault()
        setLoading(true)
        setErrors("")

        if(inputs.emailSent){
            const userVerify = await verify(inputs.email, inputs.password, inputs.firstName, inputs.lastName, inputs.otp)
            if(userVerify.error){
                setErrors(userVerify.error.error)
                console.log(errors)
                setLoading(false)
            }
            else{
                toast.success("Otp Sent Successfully")
                setInputs({email: String, password: String, cPassword: String, firstName:String, lastName: String, otp:String, emailSent: false})
                setLoading(false)
                navigate("/")
            }
        }

    }

    return (
        <div className="register h-screen position-relative overflow-hidden">
            <div className="register-back">
                <img src={back} className="w-100 h-100 object-fit-cover position-absolute" alt=""/>
            </div>
            <div className="position-relative h-100">
                <div className="row h-100 align-items-center justify-content-center">
                    <div className="col-sm-8 col-md-4">
                        <div className="register-form m-4 m-sm-0 bg-white p-3 rounded-3 shadow-sm">   
                            {!inputs.emailSent ? 
                                    <RegisterForm inputs={inputs} setInputs={setInputs} handleSubmit={handleSubmit} loading={loading} />
                                    : 
                                    <OtpForm inputs={inputs} setInputs={setInputs} handleSubmit={handleSubmit} handleSubmitOtp={handleSubmitOtp} loading={loading} />
                            } 
                            {errors ?
                                <div className="alert alert-sm alert-danger alert-dismissible fade show m-0 mt-1 py-2" role="alert">
                                    {errors.message}
                                </div>  
                            :null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
