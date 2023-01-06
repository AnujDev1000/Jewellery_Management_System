import { useEffect, useState } from 'react'
import useFetchHeaders from '../utils/fetchHeaders'


const useGetSuppliers = () => {
    const [suppliers, setSuppliers] =  useState([])
    const [errors, setErrors] =  useState([])
    const { getHeaders } = useFetchHeaders()
   
    useEffect(() => {
        const fetchSuppliers = async () => {
            try {
                const response = await fetch("/api/suppliers/get", getHeaders())    
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
