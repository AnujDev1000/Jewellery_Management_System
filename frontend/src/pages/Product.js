import React, { useEffect, useState } from 'react'
import Navbar from "../components/Navbar"
import ProductTable from '../components/tables/ProductTable'
import fetchHeaders from '../utils/fetchHeaders'

const Product = () => {
    const { getHeaders } = fetchHeaders()
    const [products, setProducts] = useState([])
    const [tabs, setTabs] = useState([{name: "products", value: 0}, {name: "amount", value: 0}, {name: "gold", value: 0}, {name: "silver", value: 0}])
    const [loading, setLoading] = useState(true)
    const [errors, setErrors] = useState({})

    
    
    useEffect(() => {
        setLoading(true)
        const fetchProducts = async () => {
            try {
                const response = await fetch("/products/get", getHeaders())    
                const json = await response.json()
                if(json.error){
                    setErrors(errors)
                }
                else{
                    setProducts(json)
                    setLoading(false)
                }
            } catch (error) {
                setErrors({error: error.message})
            }
        }

        fetchProducts()     
    }, [])    


    return (
        <>
            <Navbar />
            <div className="products">
                <div className="display-tabs">
                    <div className="row p-1">
                        {tabs.map(tab => {
                            return (
                                <div className="col-6 col-md-3 p-2 h-100">
                                    <div className="tabs bg-light-cyan rounded shadow-sm p-2 h-100">  
                                        <h4 className="text-uppercase fw-bold">{tab.name}</h4>
                                        {loading ? <div className="spinner-border spinner-border-sm" role="status"></div> 
                                                : <h2>{tab.value}</h2>  
                                        }
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="product-table table-responsive p-1">
                    {loading ? <div className="spinner-border spinner-border-sm" role="status"></div>
                            :<ProductTable products={products} />
                    }
                </div>
            </div>
        </>
    )
}

export default Product
