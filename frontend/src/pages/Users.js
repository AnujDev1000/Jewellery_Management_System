import React, { useContext, useEffect, useState } from 'react'
import HeadingTabs from '../components/HeadingTabs'
import Navbar from "../components/Navbar"
import UsersTable from '../components/tables/UserTables'
import { Context } from '../context/Context'

const Users = () => {
    const { users } = useContext(Context)
    const [tabs, setTabs] = useState([{name: "users", value: 0}, {name: "active", value: 0}, {name: "deactive", value: 0}])
    const [loading, setLoading] = useState(false)
    
    const setTabData = () => {
        let activeData = 0
        let deActiveData = 0
        users.map(user => {
            if(user.isActive){
                activeData += 1
            }
            else{
                deActiveData += 1
            }
        })
        tabs.map(tab => {
            if(tab.name === "users"){
                tab.value = users.length
            }
            else if(tab.name === "active"){
                tab.value = activeData
            }
            else{
                tab.value = deActiveData
            }
        })
    }
    setTabData()

    useEffect(() => {

    }, [loading])

    return (
        <>
            <Navbar />
            <div className="users my-2">
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
                    {!users.length ? <div className="spinner-border spinner-border-sm" role="status"></div>
                        : <UsersTable users={users} setLoading={setLoading} />
                    }
                </div>
            </div>
        </>
    )
}

export default Users
