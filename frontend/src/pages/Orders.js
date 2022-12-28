import React, { useContext, useEffect, useState } from 'react'
import HeadingTabs from '../components/HeadingTabs'
import Navbar from "../components/Navbar"
import OrderTable from '../components/tables/OrderTable'
import { Context } from '../context/Context'
import useRound from '../utils/round'
import { toast } from 'react-toastify'
import OrderProductTable from '../components/tables/OrderProductTable'
import OrderCart from '../components/OrderCart'
import useOrderOperation from '../hooks/useOrderOperation'

const Orders = () => {
    const { products, suppliers, orders, dispatch } = useContext(Context)
    const { addOrder } = useOrderOperation()
    const { roundToTwo } = useRound()
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState({})
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)
    const [filterProducts, setFilterProducts] = useState(products)
    const [tabs, setTabs] = useState([{name: "Orders", value: 0}, {name: "Completed", value: 0}, {name: "Pending", value: 0}, {name: "Suppliers", value: 0}])

    const setTabData = () => {
        let completed = 0
        let pending = 0
        orders.map(order => {
            if(order.status == "completed"){
                completed += 1
            }
            else{
                pending += 1
            }
        })
        tabs.map(tab => {
            if(tab.name === "Orders"){
                tab.value = orders.length
            }
            else if(tab.name === "Completed"){
                tab.value = completed
            }
            else if(tab.name === "Pending"){
                tab.value = pending
            }
            else{
                tab.value = suppliers.length
            }
        })
    }
    setTabData()

    const setData = () => {
        let totalData = 0
        cart.map(c => {
            totalData = totalData + (c.totalPrice)*c.count
        })
        setTotal(Math.round(totalData))
    }

    useEffect(() => {
        setData()
    }, [cart])

    const handleSelectSupplier = (arg) => {
        setFilterProducts(products.filter(product => product.supplier.name === arg))
    }

    const handlePurchase = async () => {
        setLoading(true)
        setErrors("")

        let productCount = 0
        cart.map(c => productCount += c.count )

        const  inputs = {
            supplier: cart[0].supplier,
            quantity: productCount,
            amount: total,
            products: cart.map(c => {
                return {
                    _id: c._id,
                    name: c.name,
                    count: c.count,
                    price: c.totalPrice,
                    weight: c.weight,
                    carat: c.carat
                }
            })
        }

        const order = await addOrder(inputs)
        if(order.error){
            setErrors(order.error.error)
            console.log(errors)
            setLoading(false)
        }
        else{
            console.log(order)
            toast.success("Order Placed Successful")
            dispatch("ADD_ORDER", order)
            setLoading(false)
            setCart([])
            setTotal(0)
        }
    }

    return (
        <>
            <Navbar />
            <div className="orders my-2">
                <div className="row mt-1">
                    <div className="col-md-9"> 
                        <div className="row">
                            <div className="col-*">
                                <div className="display-tabs mb-2">
                                    <div className="row p-1 py-0">
                                        {tabs.map((tab,i) => {
                                            return (
                                                <HeadingTabs tab={tab} loading={loading} key={i} />
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="orders-section bg-white shadow-sm rounded p-2 ">
                                    <span className="fw-bold text-secondary">Orders</span><br/>
                                    <div className="order-table mh-table table-responsive bg-light p-2">
                                        {!orders.length ? <div className="spinner-border spinner-border-sm" role="status"></div>
                                            : <OrderTable orders={orders} />
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="products-section bg-white shadow-sm rounded p-2 ">
                                    <span className="fw-bold text-secondary">Products</span>
                                    <ul className="nav nav-tabs d-flex justify-content-between">
                                        <div className='d-flex justify-content-start'>
                                            <li className="nav-item cursor-pointer">
                                                <span className={`nav-link px-1 py-2 active=${true}`} onClick={e => { setFilterProducts(products) }}>All</span>
                                            </li>
                                            {suppliers && suppliers.map((supplier, i) =>
                                                <li key={i} className="nav-item cursor-pointer">
                                                    <span className="nav-link px-1 py-2" onClick={e => { handleSelectSupplier(supplier.name) }}>{supplier.name.split(" ")[0]}</span>
                                                </li>
                                            )}
                                        </div>
                                    </ul>
                                    <div className="mh-table product-table table-responsive bg-light p-2">
                                        {!products.length ? 
                                            <div className="spinner-border spinner-border-sm" role="status"></div>
                                            :
                                            <>
                                                {!filterProducts.length ? <OrderProductTable products={products} cart={cart} setCart={setCart} />
                                                    : <OrderProductTable products={filterProducts} cart={cart} setCart={setCart} />
                                                }
                                            </>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="cart-section bg-white shadow-sm rounded p-2 h-specific">
                            <OrderCart loading={loading} cart={cart}  setCart={setCart} total={total} errors={errors} handlePurchase={handlePurchase} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Orders
