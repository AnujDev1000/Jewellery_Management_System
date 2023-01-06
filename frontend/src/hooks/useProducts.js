import { useEffect, useState } from 'react'
import fetchHeaders from '../utils/fetchHeaders'


const useGetProducts = () => {
    const [products, setProducts] =  useState([])
    const [errors, setErrors] =  useState([])
    const { getHeaders } = fetchHeaders()
   
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("/api/products/get", getHeaders())    
                const json = await response.json()
                if(json.error){
                   setErrors(json) 
                }
                else{
                    setProducts(json)
                }
            } catch (error) {
                setErrors({error: error.message})
            }
        }

        fetchProducts()  
    }, [])

    if(products.length){
        return products
    }
    else{
        return errors
    }
}

export { useGetProducts }
