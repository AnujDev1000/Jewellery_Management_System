import React, { useContext } from 'react'
import { GiBigDiamondRing } from "react-icons/gi"

import { AuthContext } from '../context/AuthContext'
import useLogout from '../hooks/useLogout'

const Navbar = () => {
    const { logout } = useLogout()
    const { user } = useContext(AuthContext)

    return (
        <nav className="navbar navbar-dark my-2">
            <div className="container-fluid">
                <a className="navbar-brand d-flex align-items-end " href="/home">
                    <span className="text-uppercase fs text-gold fw-bold">G</span>
                    <GiBigDiamondRing className="fs-2 text-gold " />
                    <span className="text-uppercase fs text-gold fw-bold">ld</span>
                </a>
                    {/* {user.isAdmin ? "Admin" : "Employee"} */}
                <div className="user d-flex align-items-center justify-content-center ">
                    <span className="pe-2 text-danger">Admin</span>
                    <button className="btn btn-warning" onClick={logout}>logout</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
