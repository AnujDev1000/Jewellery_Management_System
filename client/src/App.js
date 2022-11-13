import React, { useContext } from 'react'

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { AuthContext } from './context/AuthContext';
import Home from "./pages/Home";
import Login from './pages/Login';
import Register from './pages/Register';
 
const App = () => {
  const { user } = useContext(AuthContext)

  return(
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={!user ? <Login /> : <Navigate to="/home" />} />
          <Route path="/register" element={!user ? <Register /> : <Navigate to="/home" />} />
          <Route path="/home" element={user ? <Home /> : <Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
