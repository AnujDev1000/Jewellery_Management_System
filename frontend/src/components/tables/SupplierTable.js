import React, { useState } from 'react'
import { FaEdit, FaTrash } from "react-icons/fa"
import SupplierDeleteForm from '../forms/SupplierDeleteForm'

const SupplierTable = ({suppliers}) => {
    const [deleteId, setDeleteId] = useState("")
    const keys = Object.keys(suppliers[0]).filter(key => key != "_id" && key != "__v" && key != "products" && key != "orders" && key != "createdAt" && key != "updatedAt"  )    

    return (
        <table className="table table-sm table-borderless m-0">
                <thead>
                    <tr className="">
                        <th scope="col">#</th>
                        {keys.map((key,i) => <th key={i} scope="col">{key}</th>)}
                        <th scope="col">createdAt</th>
                        <th scope="col">updatedAt</th>
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
                                <td className="text-truncate">{supplier.productCount}</td>
                                <td className="text-truncate">
                                    <span className="badge bg-success">{supplier.orderCompleted}</span>
                                </td>
                                <td className="text-truncate">
                                    <span className="badge bg-danger">{supplier.orderPending}</span>
                                </td>
                                <td className="text-truncate">{supplier.createdAt.split("T")[0]}</td>
                                <td className="text-truncate">{supplier.updatedAt.split("T")[0]}</td>
                                <td className="text-truncate">
                                    <button className="btn btn-link btn-sm p-0 me-2">
                                        <FaEdit className="fs-5" />
                                    </button>
                                    <button className="btn btn-link btn-sm p-0"  data-bs-toggle="modal" data-bs-target="#deleteModal"
                                    onClick={e => setDeleteId(supplier._id)}>
                                        <FaTrash className="fs-5" />
                                    </button>
                                </td>
                            </tr>
                        )
                    })}     

                
                    {deleteId.length ? <SupplierDeleteForm deleteId={deleteId} setDeleteId={setDeleteId} /> : null }                
                </tbody>
            </table>
    )
}

export default SupplierTable
