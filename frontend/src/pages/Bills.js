import React, { useContext, useState } from 'react'
import HeadingTabs from '../components/HeadingTabs'
import Navbar from "../components/Navbar"
import BillsTable from '../components/tables/BillsTable'
import { Context } from '../context/Context'

const Bills = () => {
    const { purchases } = useContext(Context)

    const [tabs, setTabs] = useState([{name: "products", value: 0}, {name: "amount", value: 0}, {name: "gold", value: 0}, {name: "silver", value: 0}])
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
                    {!purchases.length ? <div className="spinner-border spinner-border-sm" role="status"></div>
                        : <BillsTable purchases={purchases} />
                    }
                </div>
            </div>
        </>
    )
}

export default Bills
