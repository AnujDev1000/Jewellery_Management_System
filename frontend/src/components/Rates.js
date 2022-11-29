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
        <div className="row">
            <div className="col">
                <div className="bg-light mb-2 mb-sm-0 rounded p-2">
                    {loading ?  
                        <div className="spinner-border spinner-border-sm" role="status"></div>
                        : 
                        <div className="gold-rate ">
                            <h2 className="title text-uppercase fw-bold">gold</h2>
                            <div className="rates">
                                <div className="badge m-1 p-2 bg-warning">24k 1243.3</div>
                                <div className="badge m-1 p-2 bg-warning">22k 1243.3</div>
                                <div className="badge m-1 p-2 bg-warning">20k 1243.3</div>
                                <div className="badge m-1 p-2 bg-warning">18k 1243.3</div>
                            </div>
                        </div>
                    }
                </div>
            </div>
            <div className="col">
                <div className="bg-light rounded p-2">
                    {loading ?  
                        <div className="spinner-border spinner-border-sm" role="status"></div>
                        : 
                        <div className="silver-rate ">
                            <h2 className="title text-uppercase fw-bold">silver</h2>
                            <div className="rates">
                                <div className="badge m-1 p-2 bg-warning">24k 1243.3</div>
                                <div className="badge m-1 p-2 bg-warning">22k 1243.3</div>
                                <div className="badge m-1 p-2 bg-warning">20k 1243.3</div>
                                <div className="badge m-1 p-2 bg-warning">18k 1243.3</div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default GoldApi
