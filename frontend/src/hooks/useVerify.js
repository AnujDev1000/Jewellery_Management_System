
const useVerify = () => {
    const verify = async (email, password, firstName, lastName, otp) => {
        const response = await fetch("/api/users/verify", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({email, password, firstName, lastName, otp})
        })

        const json = await response.json()
        if(!response.ok){
            return {error: json}
        } 
        return json
    }

    return { verify }
}

export default useVerify
