import React from 'react'
import useFetchHeaders from '../utils/fetchHeaders'

const useOrderOperation = () => {
    const { postHeaders } = useFetchHeaders()

    const addOrder = async (inputs) => {
        console.log(inputs)
        const response = await fetch("/orders/add", postHeaders(inputs))
        // console.log(response)
        const json = await response.json()
        
        console.log("response: " + json)
        return json
    }

    return { addOrder }
}

export default useOrderOperation
