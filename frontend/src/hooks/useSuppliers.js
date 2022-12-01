import { useEffect, useState } from 'react'
import fetchHeaders from '../utils/fetchHeaders'


const useGetSuppliers = () => {
    const [suppliers, setSuppliers] =  useState([])
    const [errors, setErrors] =  useState([])
    const { getHeaders } = fetchHeaders()
   
    useEffect(() => {
        const fetchSuppliers = async () => {
            try {
                const response = await fetch("/suppliers/get", getHeaders())    
                const json = await response.json()
                if(json.error){
                   setErrors(json) 
                }
                else{
                    setSuppliers(json)
                }
            } catch (error) {
                setErrors({error: error.message})
            }
        }

        fetchSuppliers()  
    }, [])

    if(suppliers.length){
        return suppliers
    }
    else{
        return errors
    }
}

export { useGetSuppliers }
