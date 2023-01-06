import { useEffect, useState } from 'react'
import useFetchHeaders from '../utils/fetchHeaders'


const useGetStocks = () => {
    const [stocks, setStocks] =  useState([])
    const [errors, setErrors] =  useState([])
    const { getHeaders } = useFetchHeaders()
   
    useEffect(() => {
        const fetchStocks = async () => {
            try {
                const response = await fetch("/api/stocks/get", getHeaders())    
                const json = await response.json()
                if(json.error){
                   setErrors(json) 
                }
                else{
                    setStocks(json)
                }
            } catch (error) {
                setErrors({error: error.message})
            }
        }

        fetchStocks()  
    }, [])

    if(stocks.length){
        return stocks
    }
    else{
        return errors
    }
}

export { useGetStocks } 
