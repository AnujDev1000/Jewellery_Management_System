import React from 'react'
import { BrowserRouter } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PagesRoutes from './routes/PagesRoutes';
import UserRoutes from './routes/UserRoutes';
 
const App = () => {

  return(
    <div className="app">
      <ToastContainer autoClose={2000} theme="colored" hideProgressBar={true} />
      <BrowserRouter>
        <UserRoutes />
        <div className="pages container">
          <PagesRoutes />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
