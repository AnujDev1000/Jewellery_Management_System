import { useEffect, useState } from 'react'
import fetchHeaders from '../utils/fetchHeaders'


const useGetOrders = () => {
    const [orders, setOrders] =  useState([])
    const [errors, setErrors] =  useState([])
    const { getHeaders } = fetchHeaders()
   
    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await fetch("/orders/get", getHeaders())    
                const json = await response.json()
                if(json.error){
                   setErrors(json) 
                }
                else{
                    setOrders(json)
                }
            } catch (error) {
                setErrors({error: error.message})
            }
        }

        fetchOrders()  
    }, [])

    if(orders.length){
        return orders
    }
    else{
        return errors
    }
}

export default useGetOrders
