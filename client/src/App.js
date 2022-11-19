import React, { useContext } from 'react'

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import { AuthContext } from './context/AuthContext';
import Home from "./pages/Home";
import Login from './pages/Login';
import Register from './pages/Register';
 
const App = () => {
  const { user } = useContext(AuthContext)

  return(
    <div className="app">
      <ToastContainer autoClose={3000} theme="colored" position="top-center" hideProgressBar={true} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={!user ? <Login /> : <Navigate to="/home" />} />
          <Route path="/register" element={!user ? <Register /> : <Navigate to="/home" />} />
          <Route path="/home" element={user ? <Home /> : <Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
