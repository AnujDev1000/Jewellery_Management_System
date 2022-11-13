import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import { AuthContext } from '../context/AuthContext'

const useLogout = () => {
    const { dispatch } = useContext(AuthContext)
    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem("user")
        dispatch({command: "LOGOUT"})
        navigate("/")
    }

    return { logout }
}

export default useLogout
