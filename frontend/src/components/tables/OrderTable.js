import React, { useEffect, useState } from 'react'
import OrderEditForm from '../forms/OrderEditForm'
import { HiCurrencyRupee } from "react-icons/hi"

const OrderTable = ({orders, setCart}) => {
    const [updateOrder, setUpdateOrder] = useState({})

    const keys = Object.keys(orders[0]).filter(key => key !== "_id" && key !== "__v" && key !== "updatedAt")

    useEffect(() => {
    }, [updateOrder])

    return (
        <>
            <OrderEditForm updateOrder={updateOrder} setUpdateOrder={setUpdateOrder} setCart={setCart} />
            <table className="table table-sm table-borderless m-0">
                <thead>
                    <tr className="">
                        <th scope="col">#</th>
                        {keys.map((key, i) => <th key={i} scope="col">{key}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {orders && orders.map((order, i) => {
                        return (
                            <tr key={i} className="">
                                <td className="fw-bold">{i}</td>
                                {/* {keys.map(key => <td>{}</td>)} */}
                                <td className="text-truncate">{order.supplier.name.split(" ")[0]}</td>
                                <td className="text-truncate">{order.quantity}</td>
                                <td className="text-truncate">
                                    <span className="badge bg-info">
                                        <HiCurrencyRupee className="fs-6" /> 
                                        {order.amount}
                                    </span>
                                </td>
                                <td className="text-truncate">
                                    {order.status === "pending" ?
                                        <span className="badge bg-danger cursor-pointer" data-bs-toggle="modal" data-bs-target="#editModal" onClick={e => setUpdateOrder(order)}>{order.status}</span>
                                        :
                                        <span className="badge bg-success cursor-pointer">{order.status}</span>}
                                </td>
                                <td>
                                    <div class="dropdown">
                                        <button class="btn btn-sm btn-white dropdown-toggle m-0 fw-bold" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                            products
                                        </button>                 
                                        <ul class="dropdown-menu dropdown-menu-left" aria-labelledby="dropdownMenuLink">
                                            {order.products.map( product => 
                                                <li className="dropdown-item d-flex flex-row justify-content-between ">
                                                    <span className="fw-bold">{product.name}</span>
                                                    <span className="badge bg-warning pb-1">{product.count}</span>
                                                </li> 
                                            )}
                                        </ul>
                                    </div>
                                </td>
                                <td className="text-truncate">{order.createdAt.split("T")[0]}</td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </>
    )
}
export default OrderTable
