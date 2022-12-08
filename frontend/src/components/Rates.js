import React, { useEffect, useState } from 'react'


const GoldApi = () => {
    const [goldRate, setGoldRate] = useState([])
    const [silverRate, setSilverRate] = useState([])
    const [loading, setLoading] = useState(false)
    const config = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': `goldapi-diisrtlazavven-io`
        }
    }


    // useEffect(() => {
    //     setLoading(true)
    //     Promise.all([
    //         fetch("https://www.goldapi.io/api/XAU/INR", config),
    //         fetch("https://www.goldapi.io/api/XAG/INR", config)
    //     ])
    //     .then(([goldRes, silverRes]) => Promise.all([goldRes.json(), silverRes.json()]))
    //     .then(([goldData, silverData]) => {
    //         setGoldRate(goldData)
    //         setSilverRate(silverData)
    //         setLoading(false)
    //     })  
    // }, [])

    // console.log(goldRate)
    // console.log(silverRate)
    return (
        <div className="row mb-3">
            <div className="col pe-1">
                <div className="bg-white shadow-sm mb-2 mb-sm-0 rounded p-2">
                    {loading ?  
                        <div className="spinner-border spinner-border-sm" role="status"></div>
                        : 
                        <div className="gold-rate ">
                            <h2 className="title text-uppercase fw-bold">gold</h2>
                            <div className="rates">
                                <div className="badge m-1 p-2 bg-warning"><span className="fw-bold">24k</span> </div>
                                {/* {goldRate.price_gram_24k} */}
                                <div className="badge m-1 p-2 bg-warning"><span className="fw-bold">22k</span> </div>
                                {/* {goldRate.price_gram_22k} */}
                                <div className="badge m-1 p-2 bg-warning"><span className="fw-bold">20k</span> </div>
                                {/* {goldRate.price_gram_20k} */}
                                <div className="badge m-1 p-2 bg-warning"><span className="fw-bold">18k</span> </div>
                                {/* {goldRate.price_gram_18k} */}
                            </div>
                        </div>
                    }
                </div>
            </div>
            <div className="col ps-1">
                <div className="bg-white shadow-sm rounded p-2">
                    {loading ?  
                        <div className="spinner-border spinner-border-sm" role="status"></div>
                        : 
                        <div className="silver-rate ">
                            <h2 className="title text-uppercase fw-bold">silver</h2>
                            <div className="rates">
                                <div className="badge m-1 p-2 bg-warning"><span className="fw-bold">24k</span> </div>
                                {/* {silverRate.price_gram_24k} */}
                                <div className="badge m-1 p-2 bg-warning"><span className="fw-bold">22k</span> </div>
                                {/* {silverRate.price_gram_22k} */}
                                <div className="badge m-1 p-2 bg-warning"><span className="fw-bold">20k</span> </div>
                                {/* {silverRate.price_gram_20k} */}
                                <div className="badge m-1 p-2 bg-warning"><span className="fw-bold">18k</span> </div>
                                {/* {silverRate.price_gram_18k} */}
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default GoldApi
