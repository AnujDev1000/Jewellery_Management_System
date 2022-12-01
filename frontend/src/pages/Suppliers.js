import React, { useContext, useState } from 'react'
import HeadingTabs from '../components/HeadingTabs'
import Navbar from "../components/Navbar"
import SupplierTable from '../components/tables/SupplierTable'
import { Context } from '../context/Context'

const Suppliers = () => {
    const { state } = useContext(Context)
    const products = state.products
    const suppliers = state.suppliers
    const [tabs, setTabs] = useState([{name: "suppliers", value: 0}, {name: "amount", value: 0}, {name: "gold", value: 0}, {name: "silver", value: 0}])
    const [loading, setLoading] = useState(false)

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

                <div className="product-table table-responsive bg-light p-2">
                    {!suppliers.length ? <div className="spinner-border spinner-border-sm" role="status"></div>
                        : <SupplierTable suppliers={suppliers} />
                    }
                </div>
            </div>
        </>
    )
}

export default Suppliers
