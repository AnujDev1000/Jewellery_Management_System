
const useLogin = () => {
    const login = async (email, password) => {
        const response = await fetch("/users/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({email, password})
        })
        
        const json = await response.json()
        if(!response.ok){
            return({error: json})
        }
        return json
    }

    return { login }
}

export default useLogin
