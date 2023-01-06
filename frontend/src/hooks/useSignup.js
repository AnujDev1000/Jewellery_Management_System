
const useSignup = () => {

    const signup = async (email, password, firstName, lastName) => {

        const response = await fetch("/api/users/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({email, password, firstName, lastName})
        })
        console.log(response)
        const json = await response.json()
        if(!response.ok){
            return({error: json})
        }
        return json
    }

    return { signup }
}

export default useSignup
