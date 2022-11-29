import React from 'react'

const fetchHeaders = () => {
    const headers = {
        'Content-Type': 'application/json',
        'authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNzRlOTRiMTI4YTI1MGRhMTQyZmQ5MSIsImlhdCI6MTY2ODY5MzcyMSwiZXhwIjoxNjcxMjg1NzIxfQ.u6YVAkWpLkx0Wp8QQ58nXiS07wKa30cQDVe_mgKKQuo`
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
