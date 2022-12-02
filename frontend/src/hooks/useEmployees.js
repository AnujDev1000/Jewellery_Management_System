import { useEffect, useState } from 'react'
import fetchHeaders from '../utils/fetchHeaders'


const useGetEmployees = () => {
    const [employees, setEmployees] =  useState([])
    const [errors, setErrors] =  useState([])
    const { getHeaders } = fetchHeaders()
   
    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await fetch("/employees/get", getHeaders())    
                const json = await response.json()
                if(json.error){
                   setErrors(json) 
                }
                else{
                    setEmployees(json)
                }
            } catch (error) {
                setErrors({error: error.message})
            }
        }

        fetchEmployees()  
    }, [])

    if(employees.length){
        return employees
    }
    else{
        return errors
    }
}

export default useGetEmployees
