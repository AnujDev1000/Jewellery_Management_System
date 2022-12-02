import React from 'react'
import { FaEdit, FaTrash } from "react-icons/fa"

const OrderTable = ({orders}) => {
        const keys = Object.keys(orders[0]).filter(key => key != "_id" && key != "__v" && key != "stock"  )    

    return (
        <table className="table table-sm table-borderless m-0">
                <thead>
                    <tr className="">
                        <th scope="col">#</th>
                        {keys.map((key,i) => <th key={i} scope="col">{key}</th>)}
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order,i) => {
                        return (
                            <tr key={i} className="">
                                <td scope="row" className="fw-bold">{i}</td>
                                {/* {keys.map(key => <td>{}</td>)} */}
                                <td className="text-truncate">{order.totalAmount}</td>
                                <td className="text-truncate">
                                    <span className="badge bg-info">{order.productAmount}</span>
                                </td>
                                <td className="text-truncate">{order.productCount}</td>
                                <td className="text-truncate">
                                {order.status == "pending" ? 
                                                    <span className="badge bg-danger">{order.status}</span>
                                                        : 
                                                    <span className="badge bg-success">{order.status}</span>}
                                </td>
                                <td className="text-truncate">{order.product.name}</td>
                                <td className="text-truncate">{order.supplier.name}</td>
                                <td className="text-truncate">{order.createdAt.split("T")[0]}</td>
                                <td className="text-truncate">{order.updatedAt.split("T")[0]}</td>
                                <td className="text-truncate">
                                    <button className="btn btn-link btn-sm p-0 me-2">
                                        <FaEdit className="fs-5" />
                                    </button>
                                    <button className="btn btn-link btn-sm p-0">
                                        <FaTrash className="fs-5" />
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
