import React, { useContext, useState } from 'react'
import EmployeeForm from '../components/forms/EmployeeForm'
import HeadingTabs from '../components/HeadingTabs'
import Navbar from "../components/Navbar"
import EmployeeTable from '../components/tables/EmployeeTable'
import { Context } from '../context/Context'

const Employees = () => {
    const { employees } = useContext(Context)
    const [tabs, setTabs] = useState([{name: "employees", value: 0},])
    const [loading, setLoading] = useState(false)

    
    const setTabData = () => {
        
        tabs.map(tab => {
            if(tab.name === "employees"){
                tab.value = employees.length
            }
            else{
                tab.value = 0
            }
            return tab
        })
    }
    setTabData()


    return (
        <>
            <Navbar />
            <div className="employees my-2">
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
                    <button type="button" className="btn btn-primary btn-sm float-right"  data-bs-toggle="modal" data-bs-target="#exampleModal2">
                        Add Employee
                    </button>
                </div>
                <EmployeeForm />
                <div className="product-table table-responsive bg-light p-2">
                    {!employees.length ? <div className="spinner-border spinner-border-sm" role="status"></div>
                        : <EmployeeTable employees={employees} />
                    }
                </div>
            </div>
        </>
    )
}

export default Employees
