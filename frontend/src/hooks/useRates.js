import { useEffect, useState } from 'react'
import useFetchHeaders from '../utils/fetchHeaders'

const useRates = () => {
    const [goldRate, setGoldRate] = useState([])
    const [silverRate, setSilverRate] = useState([])
    const { config } = useFetchHeaders()

    
    useEffect(() => {
        Promise.all([
            fetch("https://www.goldapi.io/api/XAU/INR", config),
            fetch("https://www.goldapi.io/api/XAG/INR", config)
        ])
        .then(([goldRes, silverRes]) => Promise.all([goldRes.json(), silverRes.json()]))
        .then(([goldData, silverData]) => {
            setGoldRate(goldData)
            setSilverRate(silverData)
        })  
    }, [])


    return { goldRate: goldRate, silverRate: silverRate }
}

export default useRates
