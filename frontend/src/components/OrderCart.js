import React from 'react'
import { FaTrash } from 'react-icons/fa'
import OrderBiller from './OrderBiller'

const OrderCart = ({cart, setCart, total, loading, errors, handlePurchase}) => {
    
    const handleCart = (product) => {
        cart = cart.filter(c => c._id !== product._id)
        setCart(cart)
    }

    const handleCount = (count,i) => {
        cart[i].count = count
        setCart([...cart])
    }

    const handlePrice = (totalPrice,i) => {
        cart[i].totalPrice = totalPrice
        setCart([...cart])
    }

    return (
        <div  className="cart d-flex flex-column justify-content-between h-100">
            <div className="orders p-2">
                <h4 className="fw-bold text-primary">Current Orders</h4>
                <span className="fw-bold text-secondary">Products</span>
                <div className="mh-table2">
                    {cart && cart.map((c, i) => {
                        return(
                            <div className="product d-flex flex-row mb-2">
                                <div className="p-2 me-2 bg-cyan text-white shadow-sm rounded w-100 d-flex flex-row justify-content-between align-items-center">
                                    <span className="">{c.name}</span><br/>
                                    <div className="fw-bold">
                                        <input type="number" className="w-max-2 rounded border-0 m-0 shadow-0 outline-0 text-center me-1" value={c.totalPrice} onChange={e => handlePrice(e.target.value, i)} />
                                        <input type="number" className="w-max-1 bg-warning rounded border-0 m-0 shadow-0 outline-0 text-center " value={c.count} onChange={e => handleCount(e.target.value, i)} />
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
            <OrderBiller handlePurchase={handlePurchase} total={total} loading={loading} errors={errors}  />
        </div>
    )
}

export default OrderCart
