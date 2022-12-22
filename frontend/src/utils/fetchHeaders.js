import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const useFetchHeaders = () => {
    const { user } = useContext(AuthContext)

    const headers = {
        'Content-Type': 'application/json',
        'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNzRlOTRiMTI4YTI1MGRhMTQyZmQ5MSIsImlhdCI6MTY3MTU5OTE3MSwiZXhwIjoxNjcxNjg1NTcxfQ._7rsyijtrmdhNn29Y856E_YmsjlTG789x00dg0PuVcQ'
    }

    function getHeaders() {
        return { 
            method: "GET",
            headers: headers,
        }
    }

    function postHeaders(body) {
        return { 
            method: "POST",
            body: JSON.stringify(body),
            headers: headers,
        }
    }

    function deleteHeaders() {
        return { 
            method: "DELETE",
            headers: headers,
        }
    }

    function updateHeaders(body) {
        return { 
            method: "PATCH",
            body: JSON.stringify(body),
            headers: headers,
        }
    }

    return {getHeaders, postHeaders, deleteHeaders, updateHeaders}
}

export default useFetchHeaders
