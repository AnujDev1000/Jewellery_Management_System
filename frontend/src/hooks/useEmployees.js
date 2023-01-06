import { useEffect, useState } from 'react'
import useFetchHeaders from '../utils/fetchHeaders'


const useGetEmployees = () => {
    const [employees, setEmployees] =  useState([])
    const [errors, setErrors] =  useState([])
    const { getHeaders } = useFetchHeaders()
   
    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await fetch("/api/employees/get", getHeaders())    
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

export { useGetEmployees } 
