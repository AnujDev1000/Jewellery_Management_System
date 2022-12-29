import { useEffect, useState } from 'react'
import useFetchHeaders from '../utils/fetchHeaders'


const useGetPurchase = () => {
    const [purchases, setPurchases] =  useState([])
    const [errors, setErrors] =  useState([])
    const { getHeaders } = useFetchHeaders()
   
    useEffect(() => {
        const fetchPurchases = async () => {
            try {
                const response = await fetch("/purchases/get", getHeaders())    
                const json = await response.json()
                if(json.error){
                   setErrors(json) 
                }
                else{
                    setPurchases(json)
                }
            } catch (error) {
                setErrors({error: error.message})
            }
        }

        fetchPurchases()  
    }, [])

    if(purchases.length){
        return purchases
    }
    else{
        return errors
    }
}

export { useGetPurchase } 
