import React, { createContext, useEffect, useState } from 'react'
import { useGetCategories } from '../hooks/useCategories'
import { useGetEmployees } from '../hooks/useEmployees'
import { useGetOrders } from '../hooks/useOrders'
import { useGetSuppliers } from "../hooks/useSuppliers"
import { useGetProducts } from "../hooks/useProducts"
import { useGetUsers } from '../hooks/useUsers'
import useRates from '../hooks/useRates'

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

    const dataFunctions = { products: useGetProducts(), categories: useGetCategories() , suppliers: useGetSuppliers(), orders: useGetOrders(), employees :useGetEmployees(), users :useGetUsers(), rates: useRates() }

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
        const index = state.products.findIndex(product => product._id === payload._id)
        switch (type) {
            case "ADD_PRODUCTS":{
                setState({...state, products: state.products.push(payload)})
                break;
            }
            case "DELETE_PRODUCTS":{
                setState({
                        ...state,
                        products: state.products.splice(index, 1)
                })
                break;
            }
            case "UPDATE_PRODUCTS":{
                state.products[index] = payload
                break;
            }
            case "UPDATE_PRODUCTS":{
                state.products[index] = payload
                break;
            }
            case "ADD_ORDER":{
                setState({...state, orders: state.orders.push(payload)})
                break;
            }
            case "ADD_PURCHASE":{
                setState({...state, purchases: state.purchases.push(payload)})
                break;
            }
            case "ERRORS":{
                setState({...state, errors: state.errors.push(payload)})
                break;
            }
         
            default:
                break;
        }
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