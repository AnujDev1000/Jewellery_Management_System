import { useEffect, useState } from 'react'
import fetchHeaders from '../utils/fetchHeaders'


const useGetUsers = () => {
    const [users, setUsers] =  useState([])
    const [errors, setErrors] =  useState([])
    const { getHeaders } = fetchHeaders()
   
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch("/users/get", getHeaders())    
                const json = await response.json()
                if(json.error){
                   setErrors(json) 
                }
                else{
                    setUsers(json)
                }
            } catch (error) {
                setErrors({error: error.message})
            }
        }

        fetchUsers()  
    }, [])

    if(users.length){
        return users
    }
    else{
        return errors
    }
}

export { useGetUsers }
