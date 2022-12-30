import React from 'react'
import useFetchHeaders from '../utils/fetchHeaders'

const useEmployeeOperation = () => {
    const { postHeaders, deleteHeaders } = useFetchHeaders()

    const addEmployee = async (inputs) => {
        const response = await fetch("/employees/add", postHeaders(inputs))
        // console.log(response)
        const json = await response.json()
        
        console.log("response: " + json)
        return json
        }

    const deleteEmployee = async (id) => {
        console.log(id)
        const response = await fetch(`/employees/delete/${id}`, deleteHeaders())
        const json = await response.json()
        
        console.log("response: " + json)
        return json
        }
    
    return { addEmployee, deleteEmployee }
}

export default useEmployeeOperation
