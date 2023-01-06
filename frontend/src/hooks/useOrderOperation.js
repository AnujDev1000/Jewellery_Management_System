import useFetchHeaders from '../utils/fetchHeaders'

const useOrderOperation = () => {
    const { postHeaders, updateHeaders } = useFetchHeaders()

    const addOrder = async (inputs) => {
        console.log(inputs)
        const response = await fetch("/api/orders/add", postHeaders(inputs))
        // console.log(response)
        const json = await response.json()
        
        console.log("response: " + json)
        return json
    }

    const updateOrders = async (id) => {
        console.log(id)
        const response = await fetch("/api/orders/set/" + id, updateHeaders({}))
        // console.log(response)
        const json = await response.json()
        
        console.log("response: " + json)
        return json
    }

    return { addOrder, updateOrders }
}

export default useOrderOperation
