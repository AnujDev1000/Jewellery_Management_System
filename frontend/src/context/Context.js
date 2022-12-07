import React, { createContext, useEffect, useReducer } from 'react'
import { useGetCategories } from '../hooks/useCategories'
import { useGetEmployees } from '../hooks/useEmployees'
import { useGetOrders } from '../hooks/useOrders'
import { useGetSuppliers } from "../hooks/useSuppliers"
import { useGetProducts } from "../hooks/useProducts"

export const Context = createContext()

export const reducer = (state, action) => {
    switch(action.command){
        case "ADD_PRODUCTS": { 
            return {
                products: state.products.concat(action.payload),
                ...state
            }
        }
        case "DELETE_PRODUCTS": { 
            console.log("Context Update: " + state);
            return {
                products: state.products.filter(product => product._id !== action.payload._id),
                ...state
            }
        }
        default: {
            return state
        }
    }
}

export const ContextProvider = ({ children }) => {
    
    const [state, dispatch] = useReducer(reducer, {
        products: [],
        categories: [],
        suppliers: [],
        stocks: [],
        orders:[],
        employees: [],
        errors: []
    })

    useEffect(() => {
        console.log(state)
    }, [state.products])

    const dataFunctions = { products: useGetProducts(), categories: useGetCategories() , suppliers: useGetSuppliers(), orders: useGetOrders(), employees :useGetEmployees()}

    for (const property in state) {
        if(dataFunctions.hasOwnProperty(property)){
            if(Object.keys(dataFunctions[`${property}`]).includes("error")){
                state["errors"] = dataFunctions[property]
            }
            else{
                state[property] = dataFunctions[property]
            }
        }   
    }

    return (
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    )
}