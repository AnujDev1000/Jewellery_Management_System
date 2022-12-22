import React, { createContext, useEffect, useReducer, useState } from 'react'
import { useGetCategories } from '../hooks/useCategories'
import { useGetEmployees } from '../hooks/useEmployees'
import { useGetOrders } from '../hooks/useOrders'
import { useGetSuppliers } from "../hooks/useSuppliers"
import { useGetProducts } from "../hooks/useProducts"
import { useGetUsers } from '../hooks/useUsers'

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
        errors: []
    })

    const dataFunctions = { products: useGetProducts(), categories: useGetCategories() , suppliers: useGetSuppliers(), orders: useGetOrders(), employees :useGetEmployees(), users :useGetUsers() }

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
        switch (type) {
            case "ADD_PRODUCTS":{
                setState({...state, products: state.products.push(payload)})
                break;
            }
            case "DELETE_PRODUCTS":{
                setState({
                        ...state,
                        products: state.products.filter(product => product._id !== payload._id)
                })
                break;
            }
            case "UPDATE_PRODUCTS":{
                const newState = {
                    ...state,
                    products: state.products.map(product => {
                        if(product._id === payload._id){
                            return payload
                        }
                        return product
                    })
                }
                setState(newState)
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