import React, { useContext, useState } from 'react'
import HeadingTabs from '../components/HeadingTabs'
import Navbar from "../components/Navbar"
import { Context } from '../context/Context'

const Stocks = () => {
    const { stocks } = useContext(Context)

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
            </div>
        </>
    )
}

export default Stocks
