import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify';

import { AuthContext } from '../context/AuthContext'
import useLogin from '../hooks/useLogin'

import back from "../assets/back2.jpg"
import LoginForm from '../components/LoginForm'

const Login = () => {
    const navigate = useNavigate()
    const [inputs, setInputs] = useState({email: String, password: String})
    const [errors , setErrors] = useState(null)
    const [loading , setLoading] = useState(false)
    const { login } = useLogin()
    const { dispatch } = useContext(AuthContext)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setErrors("")

        const user = await login(inputs.email, inputs.password)
        if(user.error){
            setErrors(user.error.error)
            console.log(errors)
            setLoading(false)
        }
        else{
            toast.success("Login Successful")
            sessionStorage.setItem("user", JSON.stringify({user: user}))
            dispatch({command: "LOGIN", payload: user})
            setInputs({email: String, password: String})
            setLoading(false)
            navigate("/home")
            
        }
    }

    return (
        <div className="login h-screen position-relative overflow-hidden">
            <div className="login-back">
                <img src={back} className="w-100 h-100 object-fit-cover position-absolute" alt=""/>
            </div>
            <div className="position-relative h-100">
                <div className="row h-100 align-items-center justify-content-center">
                    <div className="col-sm-8 col-md-4 col-lg-3">
                        <div className="login-form m-4 m-sm-0 p-3 bg-white rounded-3 border border border-light shadow-sm">  
                            <LoginForm inputs={inputs} setInputs={setInputs} handleSubmit={handleSubmit} loading={loading} />
                            {errors? 
                                <div className="alert alert-sm alert-danger alert-dismissible fade show m-0 mt-3 py-2" role="alert">
                                    {errors.message}
                                </div>: null
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
