import React from 'react'
import { FaEdit, FaTrash } from "react-icons/fa"

const OrderTable = ({orders}) => {

    const keys = Object.keys(orders[0]).filter(key => key != "_id" && key != "__v" && key != "products" && key != "createdAt" && key != "updatedAt")

    
    return (
        <table className="table table-sm table-borderless m-0">
            <thead>
                <tr className="">
                    <th scope="col">#</th>
                    {keys.map((key, i) => <th key={i} scope="col">{key}</th>)}
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {orders && orders.map((order, i) => {
                    return (
                        <tr key={i} className="">
                            <td scope="row" className="fw-bold">{i}</td>
                            {/* {keys.map(key => <td>{}</td>)} */}
                            <td className="text-truncate">{order.supplier.name.split(" ")[0]}</td>
                            <td className="text-truncate">{order.quantity}</td>
                            <td className="text-truncate">
                                <span className="badge bg-info">{order.amount}</span>
                            </td>
                            <td className="text-truncate">
                                {order.status == "pending" ?
                                    <span className="badge bg-danger">{order.status}</span>
                                    :
                                    <span className="badge bg-success">{order.status}</span>}
                            </td>
                            <td className="text-truncate">
                                <button className="btn btn-link btn-sm p-0" >
                                    <FaEdit className="fs-5" />
                                </button>
                            </td>
                        </tr>
                    )
                })}

            </tbody>
        </table>
    )
}
export default OrderTable
