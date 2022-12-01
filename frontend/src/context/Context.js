import React, { createContext, useReducer } from 'react'
import useGetCategories from '../hooks/useCategories'
import useGetProducts from '../hooks/useProducts'
import { useGetSuppliers } from "../hooks/useSuppliers"

export const Context = createContext()

export const reducer = (state, action) => {
    switch(action.command){
        case "SET_PRODUCTS": { 
            return ({
                ...state,
                products: action.payload   
            })
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
    })

    state.products = useGetProducts()
    state.categories = useGetCategories()
    state.suppliers = useGetSuppliers()

    console.log(state)

    return (
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    )
}