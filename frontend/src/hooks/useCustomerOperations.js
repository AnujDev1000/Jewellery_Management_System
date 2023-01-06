import useFetchHeaders from "../utils/fetchHeaders"


const useCustomerOperations = () => {
    const { postHeaders, deleteHeaders, updateHeaders } = useFetchHeaders()

    const addCustomer = async (inputs) => {

        const response = await fetch("/api/customers/add", postHeaders(inputs))
        // console.log(response)
        const json = await response.json()
        
        console.log("response: " + json)
        return json
    }
    
    
    const deleteCustomer = async (id) => {
        console.log(id)
        const response = await fetch(`/api/customers/delete/${id}`, deleteHeaders())
        const json = await response.json()
        
        console.log("response: " + json)
        return json
    }


    const updateCustomer = async (id, body) => {
        console.log(body)
        const response = await fetch(`/api/customers/set/${id}`, updateHeaders(body))
        const json = await response.json()
        
        console.log("response: " + json)
        return json
    }

    return { addCustomer, deleteCustomer, updateCustomer }
}

export default useCustomerOperations
