import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import useLogout from '../hooks/useLogout'

const Home = () => {
    const { logout } = useLogout()
    const { user } = useContext(AuthContext)

    return (
        <div>
            {/* <button onClick={logout}>logout</button> */}

        </div>
    )
}

export default Home

