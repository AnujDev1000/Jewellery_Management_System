import useFetchHeaders from '../utils/fetchHeaders'

const useUserOperation = () => {
    const { updateHeaders, deleteHeaders } = useFetchHeaders()

    const updateUsers = async (id, body) => {
        console.log(id)
        const response = await fetch("/api/users/set/" + id, updateHeaders(body))
        // console.log(response)
        const json = await response.json()
        
        console.log("response: " + json)
        return json
    } 

    const deleteUser = async (id) => {
        console.log(id)
        const response = await fetch(`/api/users/delete/${id}`, deleteHeaders())
        const json = await response.json()
        
        console.log("response: " + json)
        return json
    }

    return { updateUsers, deleteUser }
}

export default useUserOperation
