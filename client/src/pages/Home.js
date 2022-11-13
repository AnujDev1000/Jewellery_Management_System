import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import useLogout from '../hooks/useLogout'

const Home = () => {
    const { logout } = useLogout()
    const { user } = useContext(AuthContext)
    const getUser = () => {
        console.log(user.user)
    }

    return (
        <div>
            <h1>Home</h1>
            <button onClick={logout}>logout</button>
            <button onClick={getUser}>user</button>
        </div>
    )
}

export default Home

