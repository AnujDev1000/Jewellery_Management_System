import React from 'react'
import { FaTrash } from "react-icons/fa"
import Receipt from './Receipt'
import PurchaseBiller, {  } from "../components/PurchaseBiller";

const PurchaseCart = ({cart, setCart, total, tax, customer, receiptNo, loading, handlePurchase, errors}) => {


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

    const handleWeight = (weight,i) => {
        cart[i].weight = weight
        setCart([...cart])
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
                                        <span className="mx-1">{c.totalPrice}</span>
                                        <input type="number" className="w-max rounded me-1 border-0 m-0 shadow-0 outline-0 ps-1" value={c.weight} onChange={e => handleWeight(e.target.value, i)} />
                                        <span className="badge bg-warning rounded shadow-0">{c.count}</span>
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
            <PurchaseBiller tax={tax} total={total} loading={loading} handlePurchase={handlePurchase} errors={errors}  />
            <Receipt customer={customer} receiptNo={receiptNo} cart={cart} setCart={setCart} total={total} tax={tax} />
        </div>
    )
}

export default PurchaseCart
