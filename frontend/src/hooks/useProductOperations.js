import useFetchHeaders from "../utils/fetchHeaders"


const useProductOperations = () => {
    const { postHeaders, deleteHeaders, updateHeaders } = useFetchHeaders()

    const addProduct = async (inputs) => {
        // console.log(name, metal, carat, stone, weight, price, category, supplier)

        const response = await fetch("/api/products/add", postHeaders(inputs))
        // console.log(response)
        const json = await response.json()
        
        console.log("response: " + json)
        return json
    }

    const deleteProduct = async (id) => {
        console.log(id)
        const response = await fetch(`/api/products/delete/${id}`, deleteHeaders())
        const json = await response.json()
        
        console.log("response: " + json)
        return json
    }

    const updateProducts = async (id, body) => {
        console.log(body)
        const response = await fetch(`/api/products/set/${id}`, updateHeaders(body))
        const json = await response.json()
        
        console.log("response: " + json)
        return json
    }

    return { addProduct, deleteProduct, updateProducts }
}

export default useProductOperations
