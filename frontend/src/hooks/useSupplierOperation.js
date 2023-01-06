import useFetchHeaders from '../utils/fetchHeaders'

const useSupplierOperation = () => {
    const { postHeaders, deleteHeaders } = useFetchHeaders()

    const addSupplier = async (inputs) => {
        const response = await fetch("/api/suppliers/add", postHeaders(inputs))
        // console.log(response)
        const json = await response.json()
        
        console.log("response: " + json)
        return json
    }

    const deleteSupplier = async (id) => {
        console.log(id)
        const response = await fetch(`/api/suppliers/delete/${id}`, deleteHeaders())
        const json = await response.json()
        
        console.log("response: " + json)
        return json
    }
    
    return { addSupplier, deleteSupplier } 
}

export default useSupplierOperation
