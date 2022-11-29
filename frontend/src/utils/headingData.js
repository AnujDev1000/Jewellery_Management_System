import React from 'react'
import { FaCartPlus, FaChartBar, FaGem, FaLayerGroup, FaList, FaPersonBooth, FaReceipt, FaShippingFast } from "react-icons/fa"

export const homeMenu = () => {
    return [
        {name: "products", icon: <FaGem />},
        {name: "purchase", icon: <FaReceipt />},
        {name: "sales", icon: <FaChartBar />},
        {name: "categories", icon: <FaList />},
        {name: "stocks", icon: <FaLayerGroup />},
        {name: "employees", icon: <FaPersonBooth />} ,
        {name: "suppliers", icon: <FaShippingFast />},
        {name: "orders", icon: <FaCartPlus />},
    ]
}
