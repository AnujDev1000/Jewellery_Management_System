import useFetchHeaders from '../utils/fetchHeaders'

const usePurchaseOperation = () => {
    const { postHeaders } = useFetchHeaders()

    const addPurchase = async (inputs) => {
        console.log(inputs)
        const response = await fetch("/api/purchases/add", postHeaders(inputs))
        // console.log(response)
        const json = await response.json()
        
        console.log("response: " + json)
        return json
    }

    return { addPurchase }
}

export default usePurchaseOperation
