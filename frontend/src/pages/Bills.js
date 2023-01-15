import React, { useContext, useState } from 'react'
import HeadingTabs from '../components/HeadingTabs'
import Navbar from "../components/Navbar"
import BillsTable from '../components/tables/BillsTable'
import { Context } from '../context/Context'

const Bills = () => {
    const { purchases } = useContext(Context)

    const [tabs, setTabs] = useState([{name: "bills", value: 0}, {name: "amount", value: 0},])
    const [loading, setLoading] = useState(false)

    const setTabData = () => {
        let amount = 0
        purchases.map(purchase => {
            amount += purchase.amount
            return purchase
        })
        tabs.map(tab => {
            if(tab.name === "bills"){
                tab.value = purchases.length
            }
            else{
                tab.value = amount
            }
            return tab
        })
    }
    setTabData()


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
                    <div className="mh-table bills-table table-responsive bg-light p-2">
                        {!purchases.length ? <div className="spinner-border spinner-border-sm" role="status"></div>
                            : <BillsTable purchases={purchases} />
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bills
