import React, { useContext, useEffect } from 'react'
import { BrowserRouter } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PagesRoutes from './routes/PagesRoutes';
import UserRoutes from './routes/UserRoutes';
import { useGetCategories } from './hooks/useCategories'
import { useGetEmployees } from './hooks/useEmployees'
import { useGetOrders } from './hooks/useOrders'
import { useGetSuppliers } from "./hooks/useSuppliers"
import { useGetProducts } from "./hooks/useProducts"
import { Context, ContextProvider } from './context/Context';
 
const App = () => {


  return(
    <div className="app">
      <ToastContainer autoClose={2000} theme="colored" hideProgressBar={true} />
      <BrowserRouter>
        <UserRoutes /> 
        <ContextProvider>
          <PagesRoutes />
        </ContextProvider>
      </BrowserRouter>
    </div>
  )
}

export default App;
