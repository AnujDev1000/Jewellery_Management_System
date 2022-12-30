import React, { useContext } from 'react'
import { Route, Routes } from "react-router-dom"

// Components
import Home from "../pages/Home";
import Product from "../pages/Product";
import Sales from "../pages/Sales";
import Purchase from "../pages/Purchase";
import Categories from "../pages/Categories";
import Employees from "../pages/Employees";
import Suppliers from "../pages/Suppliers";
import Orders from "../pages/Orders";
import Bills from '../pages/Bills';
import Navigater from '../components/Navigate';

// context
import { AuthContext } from '../context/AuthContext';
import Users from '../pages/Users';
import { ContextProvider } from '../context/Context';

const PagesRoutes = () => {
    const { user } = useContext(AuthContext)

    return (  
            <div className="container">     
                <Routes>
                    <Route path="/home" element={ <ContextProvider><Home /></ContextProvider> } />
                    {/* <Route path="/home" element={user && user ? <ContextProvider><Home /></ContextProvider> : <Navigater path="/" command="notExists" />} /> */}
                    
                    <Route path="/products" element={ <ContextProvider><Product /></ContextProvider> } />
                    {/* <Route path="/products" element={user && user ? <ContextProvider><Product /></ContextProvider> : <Navigater path="/" command="authorise" />}/> */}
                    
                    <Route path="/sales" element={ <ContextProvider><Sales  /></ContextProvider> } />
                    {/* <Route path="/sales" element={user &&  user.isAdmin ? <ContextProvider><Sales  /></ContextProvider> : <Navigater path="/" command="authorise" />}/> */}
                    
                    <Route path="/users" element={ <ContextProvider><Users  /></ContextProvider> } />
                    {/* <Route path="/users" element={user &&  user.isAdmin ? <ContextProvider><Users  /></ContextProvider> : <Navigater path="/" command="authorise" />}/> */}
                    
                    <Route path="/purchase" element={ <ContextProvider><Purchase  /></ContextProvider> } />
                    {/* <Route path="/purchase" element={user &&  user.isAdmin ? <ContextProvider><Purchase  /></ContextProvider> : <Navigater path="/" command="authorise" />}/> */}
                    
                    <Route path="/categories" element={ <ContextProvider><Categories /></ContextProvider> } />
                    {/* <Route path="/categories" element={user &&  user ? <ContextProvider><Categories /></ContextProvider> : <Navigater path="/" command="authorise" />}/> */}
                    
                    <Route path="/bills" element={ <ContextProvider><Bills /></ContextProvider> } />
                    {/* <Route path="/bills" element={user &&  user ? <ContextProvider><Bills /></ContextProvider> : <Navigater path="/" command="authorise" />}/> */}
                    
                    <Route path="/employees" element={ <ContextProvider><Employees /></ContextProvider> } />
                    {/* <Route path="/employees" element={user &&  user.isAdmin ? <ContextProvider><Employees /></ContextProvider> : <Navigater path="/" command="authorise" />}/> */}
                    
                    <Route path="/suppliers" element={ <ContextProvider><Suppliers /></ContextProvider> } />
                    {/* <Route path="/suppliers" element={user &&  user ? <ContextProvider><Suppliers /></ContextProvider> : <Navigater path="/" command="authorise" />}/> */}
                    
                    <Route path="/orders" element={ <ContextProvider><Orders /></ContextProvider> } />
                    {/* <Route path="/orders" element={user &&  user ? <ContextProvider><Orders /></ContextProvider> : <Navigater path="/" command="authorise" />}/> */}
                </Routes>   
            </div>    
    )
}

export default PagesRoutes
