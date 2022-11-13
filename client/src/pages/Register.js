import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import useSignup from '../hooks/useSignup'
import useVerify from '../hooks/useVerify'

const Register = () => {
    const { signup } = useSignup()
    const { verify } = useVerify()
    const navigate = useNavigate()
    
    const [error, setError] = useState({})
    const [inputs, setInputs] = useState({email: String, password: String, cPassword: String, firstName:String, lastName: String, otp:String, emailSent: false})

    const handleSubmit = async (e) => {
        e.preventDefault()

        setInputs({...inputs, emailSent: false})
        console.log(inputs)
        const user = await signup(inputs.email, inputs.password, inputs.firstName, inputs.lastName)
        if(user.error){
            console.log(user.error)
        }
        else{
            setInputs({...inputs, emailSent: true})
            
        }
    }

    const handleSubmitOtp = async (e) => {
        e.preventDefault()
        if(inputs.emailSent){
            const userVerify = await verify(inputs.email, inputs.password, inputs.firstName, inputs.lastName, inputs.otp)
            if(userVerify.error){
                console.log(userVerify.error)
            }
            else{
                setInputs({email: String, password: String, cPassword: String, firstName:String, lastName: String, otp:String, emailSent: false})
                navigate("/")
            }
        }

    }

    return (
        <div className="register">
            <form>
                <input type="text" placeholder="firstname" onChange={(e) => setInputs({...inputs, firstName:e.target.value})} value={inputs.firstName} />
                <br/>
                <input type="text" placeholder="lastname" onChange={(e) => setInputs({...inputs, lastName:e.target.value})} value={inputs.lastName} />
                <br/>
                <input type="text" placeholder="email" onChange={(e) => setInputs({...inputs, email:e.target.value})} value={inputs.email} />
                <br/>
                <input type="password" placeholder="password" onChange={(e) => setInputs({...inputs, password:e.target.value})} value={inputs.password} />
                <br/>
                <input type="password" placeholder="conformPassword" onChange={(e) => setInputs({...inputs, cPassword:e.target.value})} value={inputs.cPassword} />
                <br/>
                <button onClick={handleSubmit} >register</button>
            </form>
            {inputs.emailSent ? 
                    <form>
                        <br/>
                        <input type="text" placeholder="Enter Otp..." onChange={(e) => setInputs({...inputs, otp:e.target.value})} value={inputs.otp} />
                        <br/>
                        <button onClick={handleSubmitOtp} >submit</button>
                        <button onClick={handleSubmit} >resend</button>
                    </form> 
                    :null
            }
            
        </div>
    )
}

export default Register
