import React from 'react'

const OrderBiller = ({ total, loading, errors, handlePurchase}) => {
    return (
        <div className="counting p-3 bg-info rounded shadow-sm m-2">
            <div className="text-white w-100 d-flex flex-row justify-content-between align-items-center mb-1">
                <span className="fw-bold text-uppercase fs-5" >Total</span>
                <span className="fw-bold fs-5" >{total}</span>
            </div>
            <button className="btn bg-primary shadow-sm text-white w-100" onClick={e => handlePurchase()} >
                {!loading? "Save Changes" : <div className="spinner-border spinner-border-sm" role="status"></div>}
            </button>
            
            {/* {!errors ? 
                <div className="alert alert-sm alert-danger alert-dismissible fade show m-0 mt-3 py-2" role="alert">
                    error occured!
                </div>: null
            } */}
        </div>
    )
}

export default OrderBiller
