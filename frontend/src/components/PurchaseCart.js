import React from 'react'
import { FaTrash } from "react-icons/fa"

const PurchaseCart = () => {
    return (
        <div  className="cart d-flex flex-column justify-content-between h-100">
            <div className="products p-2 mt-2">
                <h3 className="fw-bold text-primary">Current Purchase</h3>
                <span className="fw-bold text-secondary">Products</span>
                <div className="product d-flex flex-row">
                    <div className="p-2 me-2 bg-cyan text-white shadow-sm rounded w-100 d-flex flex-row justify-content-between align-items-center">
                        <span className="">Product</span><br/>
                        <span className="fw-bold">1200</span>
                    </div>
                    <button className="btn btn-sm btn-danger p-2">
                        <FaTrash className="fs-5" />
                    </button>
                </div>
            </div>
            <div className="counting p-3 bg-grey rounded shadow-sm m-2">
                <span>Total</span><br/>
                <span>Tax</span>
                <button className="btn bg-green mt-2 btn-lg shadow-green text-white w-100">Receipt</button>
            </div>
        </div>
    )
}

export default PurchaseCart
