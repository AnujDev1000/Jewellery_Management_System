import React from 'react'

const PurchaseBiller = ({tax, total, loading, handlePurchase, errors }) => {
    
    return (
        <div className="counting p-3 bg-info rounded shadow-sm m-2">
            <div className="text-white w-100 d-flex flex-row justify-content-between align-items-center">
                <span className="fw-bold" >Tax</span>
                <span>{tax}</span>
            </div>
            <div className="text-white w-100 d-flex flex-row justify-content-between align-items-center">
                <span className="fw-bold text-uppercase fs-5" >Total</span>
                <span className="fw-bold fs-5" >{total}</span>
            </div>
            <div className="d-flex flex-row justify-content-space-between mt-2">
                <button className="btn bg-dark shadow-sm text-white w-100 me-2" data-bs-toggle="modal" data-bs-target="#receipt">Receipt</button>
                <button className="btn bg-primary shadow-sm text-white w-100" onClick={e => handlePurchase()} >
                    {!loading? "Save Changes" : <div className="spinner-border spinner-border-sm" role="status"></div>}
                    </button>
            </div>
            {/* {!errors ? 
                <div className="alert alert-sm alert-danger alert-dismissible fade show m-0 mt-3 py-2" role="alert">
                    error occured!
                </div>: null
            } */}
        </div>
    )
}

export default PurchaseBiller
