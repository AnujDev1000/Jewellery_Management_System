import React, { useContext } from 'react'
import { Route, Routes } from "react-router-dom"

// components
import Login from '../pages/Login';
import Register from '../pages/Register';
import Navigater from '../components/Navigate';

// context
import { AuthContext } from '../context/AuthContext';


const UserRoutes = () => {
    const { user } = useContext(AuthContext)

    return (
        <Routes>
            <Route path="/" element={!user ? <Login /> : <Navigater path="/home" command="Exists" />} />
            <Route path="/register" element={!user ? <Register /> : <Navigater path="/home" command="Exists" />} />
        </Routes>
    )
}

export default UserRoutes
