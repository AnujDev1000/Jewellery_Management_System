import React, { useState } from 'react'
import { FaEdit, FaTrash } from "react-icons/fa"
import EmployeeDeleteForm from '../forms/EmployeeDeleteForm'
import { HiCurrencyRupee } from "react-icons/hi"

const EmployeeTable = ({employees}) => {
    const [deleteId, setDeleteId] = useState("")
    const keys = Object.keys(employees[0]).filter(key => key !== "_id" && key !== "__v" && key !== "products"  )    

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
                    {employees.map((employee,i) => {
                        return (
                            <tr key={i} className="">
                                <td className="fw-bold">{i}</td>
                                {/* {keys.map(key => <td>{}</td>)} */}
                                <td className="text-truncate">{employee.name}</td>
                                <td className="text-truncate">{employee.phone}</td>
                                <td className="text-truncate">{employee.address.slice(0,30)}</td>
                                <td className="text-truncate">
                                    <span className="badge bg-info">
                                        <HiCurrencyRupee className="fs-6" /> 
                                        {employee.salary}
                                    </span>
                                </td>
                                <td className="text-truncate">
                                    <span className="badge bg-danger">{employee.type}</span>
                                </td>
                                <td className="text-truncate">{employee.createdAt.split("T")[0]}</td>
                                <td className="text-truncate">{employee.updatedAt.split("T")[0]}</td>
                                <td className="text-truncate">
                                    <button className="btn btn-link btn-sm p-0 me-2">
                                        <FaEdit className="fs-5" />
                                    </button>
                                    <button className="btn btn-link btn-sm p-0">
                                        <FaTrash className="fs-5" data-bs-toggle="modal" data-bs-target="#deleteModal"
                                    onClick={e => setDeleteId(employee._id)} />
                                    </button>
                                </td>
                            </tr>
                        )
                    })}     
                    
                    {deleteId.length ? <EmployeeDeleteForm deleteId={deleteId} setDeleteId={setDeleteId} /> : null }                      
                </tbody>
            </table>
    )
}

export default EmployeeTable
