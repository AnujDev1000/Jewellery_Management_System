import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router'
import { AuthContext } from '../context/AuthContext'
import useLogin from '../hooks/useLogin'

const Login = () => {
    const navigate = useNavigate()
    const [inputs, setInputs] = useState({email: String, password: String})
    const { login } = useLogin()
    const { dispatch } = useContext(AuthContext)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const user = await login(inputs.email, inputs.password)
        if(user.error){
            console.log(user.error)
        }
        else{
            localStorage.setItem("user", JSON.stringify(user))
            dispatch({command: "LOGIN", payload: user})
            setInputs({email: String, password: String})
            navigate("/home")
            
        }
    }

    return (
        <div className="login">
            <form>
                <input type="text" placeholder="email" onChange={(e) => setInputs({...inputs, email:e.target.value})} value={inputs.email} />
                <br/>
                <input type="password" placeholder="password" onChange={(e) => setInputs({...inputs, password:e.target.value})} value={inputs.password} />
                <br/>
                <button onClick={handleSubmit}>login</button>
            </form>
        </div>
    )
}

export default Login
