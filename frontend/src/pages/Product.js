import React, { useContext, useEffect, useState } from 'react'
import HeadingTabs from '../components/HeadingTabs'
import Navbar from "../components/Navbar"
import NavigateBack from '../components/NavigateBack'
import ProductTable from '../components/tables/ProductTable'
import { Context } from '../context/Context'

const Product = () => {
    const { state } = useContext(Context)
    const products = state.products
    const categories = state.categories
    const [tabs, setTabs] = useState([{name: "products", value: 0}, {name: "amount", value: 0}, {name: "gold", value: 0}, {name: "silver", value: 0}])
    const [loading, setLoading] = useState(false)
    const [filterProducts, setFilterProducts] = useState(products)

    useEffect(() => {
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
        setdata()
        
    }, [])

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
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <span className={`nav-link active=${true}`} onClick={e => {setFilterProducts(products)}}>All</span>
                    </li>
                    {categories && categories.map((category, i) => 
                        <li key={i} className="nav-item">
                            <span className="nav-link" onClick={e => {handleSelectCategory(category.name)}}>{category.name}</span>
                        </li>
                    )}
                </ul>

                <div className="product-table table-responsive bg-light p-2">
                    {!products.length ? 
                            <div className="spinner-border spinner-border-sm" role="status"></div>
                            :
                            <>
                                {!filterProducts.length ? <ProductTable products={products} />
                                    : <ProductTable products={filterProducts} />
                                }
                            </>
                    }
                </div>
            </div>
        </>
    )
}

export default Product
