import React from 'react'
import { FaCartPlus, FaChartBar, FaGem, FaLayerGroup, FaPersonBooth, FaReceipt, FaShippingFast, FaUserFriends } from "react-icons/fa"

export const homeMenuAdmin = () => {
    return [
        {name: "products", icon: <FaGem />},
        {name: "purchase", icon: <FaReceipt />},
        {name: "sales", icon: <FaChartBar />},
        // {name: "categories", icon: <FaList />},
        {name: "users", icon: <FaUserFriends />},
        {name: "bills", icon: <FaLayerGroup />},
        {name: "employees", icon: <FaPersonBooth />} ,
        {name: "suppliers", icon: <FaShippingFast />},
        {name: "orders", icon: <FaCartPlus />},
    ]
}

export const homeMenu = () => {
    return [
        {name: "products", icon: <FaGem />},
        {name: "purchase", icon: <FaReceipt />},
        // {name: "sales", icon: <FaChartBar />},
        // {name: "categories", icon: <FaList />},
        // {name: "users", icon: <FaUserFriends />},
        {name: "bills", icon: <FaLayerGroup />},
        // {name: "employees", icon: <FaPersonBooth />} ,
        {name: "suppliers", icon: <FaShippingFast />},
        {name: "orders", icon: <FaCartPlus />},
    ]
}
