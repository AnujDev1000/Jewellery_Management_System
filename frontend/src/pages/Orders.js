import React, { useContext, useState } from 'react'
import HeadingTabs from '../components/HeadingTabs'
import Navbar from "../components/Navbar"
import OrderTable from '../components/tables/OrderTable'
import { Context } from '../context/Context'

const Orders = () => {
    const { state } = useContext(Context)
    const products = state.products
    const orders = state.orders
    const [tabs, setTabs] = useState([{name: "suppliers", value: 0}, {name: "amount", value: 0}, {name: "gold", value: 0}, {name: "silver", value: 0}])
    const [loading, setLoading] = useState(false)

    return (
        <>
            <Navbar />
            <div className="orders my-2">
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
                    {!orders.length ? <div className="spinner-border spinner-border-sm" role="status"></div>
                        : <OrderTable orders={orders} />
                    }
                </div>
            </div>
        </>
    )
}

export default Orders
