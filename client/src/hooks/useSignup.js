import React, { useState } from 'react'

const useSignup = () => {

    const signup = async (email, password, firstName, lastName) => {

        const response = await fetch("/users/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({email, password, firstName, lastName})
        })

        const json = await response.json()
        if(!response.ok){
            return({error: json})
        }
        return json
    }

    return { signup }
}

export default useSignup
