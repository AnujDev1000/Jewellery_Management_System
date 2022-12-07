import useFetchHeaders from "../utils/fetchHeaders"


const useProductOperations = () => {
    const { postHeaders, deleteHeaders } = useFetchHeaders()

    const addProduct = async (name, metal, carat, stone, weight, price, category, supplier) => {
        // console.log(name, metal, carat, stone, weight, price, category, supplier)

        const response = await fetch("/products/add", postHeaders(name, metal, carat, stone, weight, price, category, supplier))
        // console.log(response)
        const json = await response.json()
        
        console.log("response: " + json)
        return json
    }


    const deleteProduct = async (id) => {
        console.log(id)
        const response = await fetch(`/products/delete/${id}`, deleteHeaders())
        console.log(response)
        const json = await response.json()
        
        console.log("response: " + json)
        return json
    }

    return { addProduct, deleteProduct }
}

export default useProductOperations
