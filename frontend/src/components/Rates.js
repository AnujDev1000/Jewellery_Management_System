import React, { useContext } from 'react'
import { Context } from '../context/Context'
import useRound from '../utils/round'


const GoldApi = () => {
    const { roundToTwo } = useRound()
    const { rates } = useContext(Context)

    return (
        <div className="row mb-3">
            <div className="col pe-1">
                <div className="bg-white shadow-sm mb-2 mb-sm-0 rounded p-2">   
                        <div className="gold-rate ">
                            <h2 className="title text-uppercase fw-bold">gold</h2>
                            <div className="rates">
                                <div className="badge m-1 p-2 pb-md-1 bg-success"><span className="fw-bold me-2">24k</span> 
                                    {rates && rates ? roundToTwo(rates.goldRate.price_gram_24k) : null}
                                </div>
                                <div className="badge m-1 p-2 pb-md-1 bg-success"><span className="fw-bold me-2">22k</span> 
                                    {rates && rates ? roundToTwo(rates.goldRate.price_gram_22k) : null}
                                </div>
                                <div className="badge m-1 p-2 pb-md-1 bg-success"><span className="fw-bold me-2">20k</span> 
                                    {rates && rates ? roundToTwo(rates.goldRate.price_gram_20k) : null}
                                </div>
                                <div className="badge m-1 p-2 pb-md-1 bg-success"><span className="fw-bold me-2">18k</span> 
                                    {rates && rates ? roundToTwo(rates.goldRate.price_gram_18k) : null}
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            <div className="col ps-1">
                <div className="bg-white shadow-sm rounded p-2"> 
                        <div className="silver-rate ">
                            <h2 className="title text-uppercase fw-bold">silver</h2>
                            <div className="rates">
                                <div className="badge m-1 p-2 pb-md-1 bg-success"><span className="fw-bold me-2">24k</span> 
                                    {rates && rates ? roundToTwo(rates.silverRate.price_gram_24k) : null}
                                </div>
                                <div className="badge m-1 p-2 pb-md-1 bg-success"><span className="fw-bold me-2">22k</span> 
                                    {rates && rates ? roundToTwo(rates.silverRate.price_gram_22k) : null}
                                </div>
                                <div className="badge m-1 p-2 pb-md-1 bg-success"><span className="fw-bold me-2">20k</span> 
                                    {rates && rates ? roundToTwo(rates.silverRate.price_gram_20k) : null}
                                </div>
                                <div className="badge m-1 p-2 pb-md-1 bg-success"><span className="fw-bold me-2">18k</span> 
                                    {rates && rates ? roundToTwo(rates.silverRate.price_gram_18k) : null}
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default GoldApi
