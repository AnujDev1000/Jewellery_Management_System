import React, { useContext, useState } from 'react'
import SupplierForm from '../components/forms/SupplierForm'
import HeadingTabs from '../components/HeadingTabs'
import Navbar from "../components/Navbar"
import SupplierTable from '../components/tables/SupplierTable'
import { Context } from '../context/Context'

const Suppliers = () => {
    const { suppliers } = useContext(Context)
    const [tabs, setTabs] = useState([{name: "suppliers", value: 0}, {name: "highest", value: ""}])
    const [loading, setLoading] = useState(false)

    const setTabData = () => {
        let highest = 0
        let highestName = ""
        suppliers.map(supplier => {
            if(supplier.productCount > highest){
                highest = supplier.highest
                highestName = supplier.name
            }
            return supplier
        })
        tabs.map(tab => {
            if(tab.name === "suppliers"){
                tab.value = suppliers.length
            }
            else{
                tab.value = highestName
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
                    <div className="w-100 d-flex justify-content-end mb-1">
                        <button type="button" className="btn btn-primary btn-sm float-right"  data-bs-toggle="modal" data-bs-target="#exampleModal2">
                            Add Supplier
                        </button>
                    </div>
                    <SupplierForm />
                    <div className="mh-table supplier-table table-responsive bg-light p-2">
                        {!suppliers.length ? <div className="spinner-border spinner-border-sm" role="status"></div>
                            : <SupplierTable suppliers={suppliers} />
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Suppliers
