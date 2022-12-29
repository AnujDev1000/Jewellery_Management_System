import React, { createContext, useEffect, useState } from 'react'
import { useGetCategories } from '../hooks/useCategories'
import { useGetEmployees } from '../hooks/useEmployees'
import { useGetOrders } from '../hooks/useOrders'
import { useGetSuppliers } from "../hooks/useSuppliers"
import { useGetProducts } from "../hooks/useProducts"
import { useGetUsers } from '../hooks/useUsers'
import useRates from '../hooks/useRates'
import { useGetStocks } from '../hooks/useStocks'
import { useGetPurchase } from '../hooks/usePurchase'
import reducer from '../reducers/reducer'

export const Context = createContext()

export const ContextProvider = ({ children }) => {
    
    const [state, setState] = useState({
        products: [],
        categories: [],
        suppliers: [],
        stocks: [],
        orders:[],
        employees: [],
        users: [],
        errors: [],
        purchases: [],
        rates: {},
    })

    const dataFunctions = { products: useGetProducts(), categories: useGetCategories() , suppliers: useGetSuppliers(), orders: useGetOrders(), employees :useGetEmployees(), users :useGetUsers(), stocks: useGetStocks(), purchases: useGetPurchase(),  rates: useRates() }

    for (const property in state) {
        if(dataFunctions.hasOwnProperty(property)){
            if(Object.keys(dataFunctions[`${property}`]).includes("error")){
                state["errors"].push({type: property, message: dataFunctions[property].error})
            }
            else{
                state[property] = dataFunctions[property]
            }
        }   
    }

    
    const dispatch = (type, payload) => {
        reducer(type, payload, state, setState)
    }

    useEffect(() => {
        console.log(state)
    }, [state])

    return (
        <Context.Provider value={{...state, dispatch, setState}}>
            {children}
        </Context.Provider>
    )
}