import useFetchHeaders from '../utils/fetchHeaders'

const useUserOperation = () => {
    const { updateHeaders } = useFetchHeaders()

    const updateUsers = async (id, body) => {
        console.log(id)
        const response = await fetch("/api/users/set/" + id, updateHeaders(body))
        // console.log(response)
        const json = await response.json()
        
        console.log("response: " + json)
        return json
    }

    return { updateUsers }
}

export default useUserOperation
