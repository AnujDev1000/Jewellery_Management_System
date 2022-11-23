import { useContext } from 'react'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { AuthContext } from '../context/AuthContext'

const useLogout = () => {
    const { dispatch } = useContext(AuthContext)
    const navigate = useNavigate()

    const logout = () => {
        toast.success("Logout Successful!")
        sessionStorage.removeItem("user")
        dispatch({command: "LOGOUT"})
        navigate("/")
    }

    return { logout }
}

export default useLogout
