import React, { useContext, useEffect, useState } from 'react' 
import CustomerForm from '../components/forms/CustomerForm'
import Navbar from "../components/Navbar"
import PurchaseCart from '../components/PurchaseCart'
import Rates from "../components/Rates"
import PurchaseProductTable from '../components/tables/PurchaseProductTable'
import { Context } from '../context/Context'

const Purchase = () => {
    const { products, categories, rates } = useContext(Context)
    const [loading, setLoading] = useState(false)
    const [cart, setCart] = useState([])
    const [customer, setCustomer] = useState({name: "", phone: ""})
    const [total, setTotal] = useState(0)
    const [tax, setTax] = useState(0)
    const [filterProducts, setFilterProducts] = useState(products)

    const setData = () => {
        let taxData = 0
        let totalData = 0
        const silverTax = 50 + (3*50)/100
        const goldTax = 5000 + (3*5000)/100
        cart.map(c => {
            if(c.metal === "gold"){
                taxData = taxData + goldTax*c.weight*c.count
                totalData = totalData + (c.price+goldTax*c.weight)*c.count
            }
            else{
                taxData = taxData + silverTax*c.weight*c.count
                totalData = totalData + (c.price+silverTax*c.weight)*c.count
            }
        })
        setTax(taxData)
        setTotal(totalData)
    }

    useEffect(() => {
        setData()
    }, [customer, cart])

    const handleSelectCategory = (arg) => {
        setFilterProducts(products.filter(product => product.category.name === arg))
    }

    return (
        <div className="purchase">
            <Navbar />
            <div className="row mt-1">
                <div className="col-md-8">
                    <div className="row my-2 my-md-0">
                        <div className="col-">
                            <Rates />
                        </div>
                        <div className="col-*">
                            <div className="customer-section bg-white shadow-sm rounded p-2 mb-2">
                                <CustomerForm customer={customer} setCustomer={setCustomer} />
                            </div>
                        </div>
                        <div className="col-*">
                            <div className="products-section bg-white shadow-sm rounded p-2 mt-1">
                                <ul className="nav nav-tabs d-flex justify-content-between">
                                    <div className='d-flex justify-content-start'>
                                        <li className="nav-item">
                                            <span className={`nav-link active=${true}`} onClick={e => { setFilterProducts(products) }}>All</span>
                                        </li>
                                        {categories && categories.map((category, i) =>
                                            <li key={i} className="nav-item">
                                                <span className="nav-link" onClick={e => { handleSelectCategory(category.name) }}>{category.name}</span>
                                            </li>
                                        )}
                                    </div>
                                </ul>
                                <div className="mh-table2 product-table table-responsive bg-light p-2">
                                    {!products.length ? 
                                        <div className="spinner-border spinner-border-sm" role="status"></div>
                                        :
                                        <>
                                            {!filterProducts.length ? <PurchaseProductTable products={products} cart={cart} setCart={setCart} />
                                                : <PurchaseProductTable products={filterProducts} cart={cart} setCart={setCart} />
                                            }
                                        </>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="cart-section bg-white shadow-sm rounded p-2 h-specific">
                        <PurchaseCart cart={cart} setCart={setCart} total={total} tax={tax} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Purchase
