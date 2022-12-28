import React, { useContext, useEffect, useState } from 'react'
import ProductForm from '../components/forms/ProductForm'
import HeadingTabs from '../components/HeadingTabs'
import Navbar from "../components/Navbar"
import ProductTable from '../components/tables/ProductTable'
import { Context } from '../context/Context'

const Product = () => {
    const { products, categories } = useContext(Context)

    const [tabs, setTabs] = useState([{name: "products", value: 0}, {name: "amount", value: 0}, {name: "gold", value: 0}, {name: "silver", value: 0}])
    const [loading, setLoading] = useState(false)
    const [filterProducts, setFilterProducts] = useState(products)

    const setdata = () => {
        let total = 0
        let totalGold = 0
        let totalSilver = 0
        products.map(product => {
            total += product.price
            if(product.metal === "gold"){
                totalGold++
            }
            else{
                totalSilver++
            }
        })

        const newTabs = tabs.map(tab => {
            if(tab.name === "products"){
                tab.value = products.length
                return tab
            }
            else if(tab.name === "amount"){
                tab.value = total
                return tab
            }
            else if(tab.name === "gold"){
                tab.value = totalGold
                return tab
            }
            else{
                tab.value = totalSilver
                return tab
            }
        })
        setTabs(newTabs)
    }

    useEffect(() => {
        setdata()
        
    }, [filterProducts, products, categories])


    const handleSelectCategory = (arg) => {
        setFilterProducts(products.filter(product => product.category.name === arg))
    }

    return (
        <>
            <Navbar />
            <div className="products my-2">
                <div className="display-tabs">
                    <div className="row p-1">
                        {tabs.map((tab,i) => {
                            return (
                                <HeadingTabs tab={tab} loading={loading} key={i} />
                            )
                        })}
                    </div>
                </div>
                <div className="bg-white shadow-sm rounded p-3 mt-2">

                    <ul className="nav nav-tabs d-flex justify-content-between">
                        <div className='d-flex justify-content-start'>
                            <li className="nav-item cursor-pointer">
                                <span className={`nav-link px-1 py-2 active=${true}`} onClick={e => { setFilterProducts(products) }}>All</span>
                            </li>
                            {categories && categories.map((category, i) =>
                                <li key={i} className="nav-item cursor-pointer">
                                    <span className="nav-link px-1 py-2" onClick={e => { handleSelectCategory(category.name) }}>{category.name}</span>
                                </li>
                            )}
                        </div>
                        <div className="add d-flex flex-row my-1">
                            <button type="button"
                                className="btn btn-primary btn-sm me-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Add Category
                            </button>
                            <button type="button"
                                className="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Add Product
                            </button>
                        </div>
                    </ul>
                    <ProductForm />
                    
                    <div className="mh-table product-table table-responsive bg-light p-2">
                        {!products.length ? 
                            <div className="spinner-border spinner-border-sm" role="status"></div>
                            : <>
                                {!filterProducts.length ? <ProductTable products={products} />
                                    : <ProductTable products={filterProducts} />
                                }
                            </>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product
