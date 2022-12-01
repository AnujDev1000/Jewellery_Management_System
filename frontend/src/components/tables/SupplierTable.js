import React from 'react'
import { FaEdit, FaTrash } from "react-icons/fa"

const SupplierTable = ({suppliers}) => {
        const keys = Object.keys(suppliers[0]).filter(key => key != "_id" && key != "__v" && key != "products" && key != "orders"  )    

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
                    {suppliers.map((supplier,i) => {
                        return (
                            <tr key={i} className="">
                                <td scope="row" className="fw-bold">{i}</td>
                                {/* {keys.map(key => <td>{}</td>)} */}
                                <td className="text-truncate">{supplier.name}</td>
                                <td className="text-truncate">{supplier.phone}</td>
                                <td className="text-truncate">{supplier.createdAt.split("T")[0]}</td>
                                <td className="text-truncate">{supplier.updatedAt.split("T")[0]}</td>
                                <td className="text-truncate">{supplier.productCount}</td>
                                <td className="text-truncate">{supplier.orderCount}</td>
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

export default SupplierTable
