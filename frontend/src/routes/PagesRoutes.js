import React, { useContext } from 'react'
import { Route, Routes } from "react-router-dom"

// Components
import Home from "../pages/Home";
import Navigater from '../components/Navigate';

// context
import { AuthContext } from '../context/AuthContext';

const PagesRoutes = () => {
    const { user } = useContext(AuthContext)

    return (
        <div className="layout">   
            <Routes>
                <Route path="/home" element={<Home />} />
                {/* {user ? <Home /> : <Navigater path="/" command="notExists" />} */}
            </Routes>
        </div>
    )
}

export default PagesRoutes
