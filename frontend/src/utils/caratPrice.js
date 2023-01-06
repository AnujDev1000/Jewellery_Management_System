import { useContext } from 'react'
import { Context } from '../context/Context'

const useCaratPrice = () => {
    const { rates } = useContext(Context)

    const sliverCarat = (carat) => {
        switch(carat){
            case 24:{
                return rates.silverRate.price_gram_24k
            }
            case 22:{
                return rates.silverRate.price_gram_22k
            }
            case 20:{
                return rates.silverRate.price_gram_20k
            }
            case 18:{
                return rates.silverRate.price_gram_18k
            }
            default:{
                return rates.silverRate.price_gram_22k
            }
        }
    }

    const goldCarat = (carat) => {
        switch(carat){
            case 24:{
                return rates.goldRate.price_gram_24k
            }
            case 22:{
                return rates.goldRate.price_gram_22k
            }
            case 20:{
                return rates.goldRate.price_gram_20k
            }
            case 18:{
                return rates.goldRate.price_gram_18k
            }
            default:{
                return rates.goldRate.price_gram_22k
            }
        }
    }

    return { sliverCarat, goldCarat }
}

export default useCaratPrice
