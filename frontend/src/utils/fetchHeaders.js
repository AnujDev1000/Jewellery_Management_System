import React from 'react'

const fetchHeaders = () => {
    const headers = {
        'Content-Type': 'application/json',
        'authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNzRlOTRiMTI4YTI1MGRhMTQyZmQ5MSIsImlhdCI6MTY2OTg5MjA3NSwiZXhwIjoxNjY5OTc4NDc1fQ.-rPbXNzsmIDvXxkoj1A554vvSsSpudPxzNRZ9GtFJ9U`
    }

    function getHeaders() {
        return { 
            method: 'GET',
            headers: headers,
        }
    }

    function postHeaders(body) {
        return { 
            method: 'POST',
            body: body,
            headers: headers,
        }
    }

    return {getHeaders, postHeaders}
}

export default fetchHeaders
