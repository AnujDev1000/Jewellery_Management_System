import { useEffect, useState } from 'react'
import useFetchHeaders from '../utils/fetchHeaders'


const useGetCategories = () => {
    const [categories, setCategories] =  useState([])
    const [errors, setErrors] =  useState([])
    const { getHeaders } = useFetchHeaders()
   
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch("/categories/get", getHeaders())    
                const json = await response.json()
                if(json.error){
                   setErrors(json) 
                }
                else{
                    setCategories(json)
                }
            } catch (error) {
                setErrors({error: error.message})
            }
        }

        fetchCategories()  
    }, [])

    if(categories.length){
        return categories
    }
    else{
        return errors
    }
}

export { useGetCategories }
