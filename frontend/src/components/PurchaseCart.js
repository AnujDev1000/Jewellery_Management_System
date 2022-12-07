import React from 'react'

const PurchaseCart = () => {
    return (
        <div  className="cart d-flex flex-column justify-items-center">
            <div className="products p-2 mt-2">
                <h2 className="fw-bold text-primary">CART</h2><br/>
                <span className="fw-bold text-secondary">Products</span>
                <div className="product p-2 bg-cyan shadow-sm rounded d-flex flex-row justify-content-between align-items-center">
                    <div className="data text-white">
                        <span className="fw-bold">Product</span><br/>
                        <span className="">1200</span>
                    </div>
                    <button className="btn btn-sm btn-danger">delete</button>
                </div>
            </div>
            <div className="counting p-3 bg-light rounded shadow-sm m-2">
                <h4>Total</h4>
                <h4>Tax</h4>
                <button className="btn btn-danger btn-lg w-100">Receipt</button>
            </div>
        </div>
    )
}

export default PurchaseCart
