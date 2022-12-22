import React, { useContext, useState } from 'react' 
import CustomerForm from '../components/forms/CustomerForm'
import Navbar from "../components/Navbar"
import PurchaseCart from '../components/PurchaseCart'
import Rates from "../components/Rates"
import PurchaseProductTable from '../components/tables/PurchaseProductTable'
import { Context } from '../context/Context'

const Purchase = () => {
    const { products, categories } = useContext(Context)
    const [loading, setLoading] = useState(false)
    const [filterProducts, setFilterProducts] = useState(products)

    const handleSelectCategory = (arg) => {
        setFilterProducts(products.filter(product => product.category.name === arg))
    }

    return (
        <div className="purchase">
            <Navbar />
            <div className="row mt-1">
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-">
                            <Rates />
                        </div>
                        <div className="col-*">
                            <div className="customer-section bg-white shadow-sm rounded p-2 mb-2">
                                <CustomerForm />
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
                                            {!filterProducts.length ? <PurchaseProductTable products={products} />
                                                : <PurchaseProductTable products={filterProducts} />
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
                        <PurchaseCart />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Purchase
