import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const useFetchHeaders = () => {
    const { user } = useContext(AuthContext)

    const headers = {
        'Content-Type': 'application/json',
        'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNzRlOTRiMTI4YTI1MGRhMTQyZmQ5MSIsImlhdCI6MTY2ODY5MzcyMSwiZXhwIjoxNjcxMjg1NzIxfQ.u6YVAkWpLkx0Wp8QQ58nXiS07wKa30cQDVe_mgKKQuo'
    }

    function getHeaders() {
        return { 
            method: "GET",
            headers: headers,
        }
    }

    function postHeaders(name, metal, carat, stone, weight, price, category, supplier) {
        return { 
            method: "POST",
            body: JSON.stringify({name, metal, carat, stone, weight, price, category, supplier}),
            headers: headers,
        }
    }

    function deleteHeaders() {
        return { 
            method: "DELETE",
            headers: headers,
        }
    }

    return {getHeaders, postHeaders, deleteHeaders}
}

export default useFetchHeaders
