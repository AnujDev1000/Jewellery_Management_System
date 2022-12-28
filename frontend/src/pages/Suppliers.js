import React, { useContext, useState } from 'react'
import HeadingTabs from '../components/HeadingTabs'
import Navbar from "../components/Navbar"
import SupplierTable from '../components/tables/SupplierTable'
import { Context } from '../context/Context'

const Suppliers = () => {
    const { suppliers } = useContext(Context)
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
                <div className="w-100 d-flex justify-content-end mb-1">
                    <button type="button"
                        className="btn btn-primary btn-sm float-right">
                        Add Supplier
                    </button>
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
