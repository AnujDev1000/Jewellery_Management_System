import React from 'react'
import { FaTrash } from "react-icons/fa"

const PurchaseCart = ({cart, setCart, total, tax}) => {


    const handleCart = (product) => {
        if(product.count > 1){
            const i = cart.findIndex(c => c._id === product._id)
            cart[i].count = cart[i].count - 1
            setCart([...cart])
        }
        else{
            cart = cart.filter(c => c._id !== product._id)
            setCart(cart)
        }
    }

    return (
        <div  className="cart d-flex flex-column justify-content-between h-100">
            <div className="products p-2 mt-2">
                <h3 className="fw-bold text-primary">Current Purchase</h3>
                <span className="fw-bold text-secondary">Products</span>
                <div className="mh-table2">
                    {cart && cart.map((c, i) => {
                        return(
                            <div className="product d-flex flex-row mb-2">
                                <div className="p-2 me-2 bg-cyan text-white shadow-sm rounded w-100 d-flex flex-row justify-content-between align-items-center">
                                    <span className="">{c.name}</span><br/>
                                    <div className="fw-bold">
                                        {c.price*c.count}
                                        <span className="badge bg-warning ms-1 fs">{c.count}</span>
                                    </div>
                                </div>
                                <button className="btn btn-sm btn-danger p-2">
                                    <FaTrash className="fs-5" onClick={(e) => handleCart(c)} />
                                </button>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
            <div className="counting p-3 bg-info rounded shadow-sm m-2">
                <div className="text-white w-100 d-flex flex-row justify-content-between align-items-center">
                    <span className="fw-bold" >Tax</span>
                    <span>{tax}</span>
                </div>
                <div className="text-white w-100 d-flex flex-row justify-content-between align-items-center">
                    <span className="fw-bold text-uppercase fs-5" >Total</span>
                    <span className="fw-bold fs-5" >{total}</span>
                </div>
                <button className="btn bg-primary mt-2 btn-lg shadow text-white w-100">Receipt</button>
            </div>
        </div>
    )
}

export default PurchaseCart
