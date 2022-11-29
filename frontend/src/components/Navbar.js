import React, { useContext } from 'react'
import { GiBigDiamondRing } from "react-icons/gi"

import { AuthContext } from '../context/AuthContext'
import useLogout from '../hooks/useLogout'

const Navbar = () => {
    const { logout } = useLogout()
    const { user } = useContext(AuthContext)

    return (
        <nav className="navbar navbar-dark">
            <div className="container-fluid bg-primary rounded p-2">
                <a className="navbar-brand d-flex align-items-end text-white" href="/home">
                    <span className="text-uppercase fs fw-bold">G</span>
                    <GiBigDiamondRing className="fs-2 " />
                    <span className="text-uppercase fs fw-bold">ld</span>
                </a>
                    {/* {user.isAdmin ? "Admin" : "Employee"} */}
                <div className="user d-flex align-items-center justify-content-center ">
                    <span className="pe-2 text-white">Admin</span>
                    <button className="btn btn-warning" onClick={logout}>logout</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
