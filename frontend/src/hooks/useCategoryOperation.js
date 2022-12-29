import React from 'react'
import useFetchHeaders from '../utils/fetchHeaders'

const useCategoryOperation = () => {
    const { postHeaders } = useFetchHeaders()

    const addCategory = async (inputs) => {
        const response = await fetch("/categories/add", postHeaders(inputs))
        // console.log(response)
        const json = await response.json()
        
        console.log("response: " + json)
        return json
    }
    
    return { addCategory }
}

export default useCategoryOperation
