import React from 'react'
import { FaEdit, FaTrash } from "react-icons/fa"

const EmployeeTable = ({employees}) => {
        const keys = Object.keys(employees[0]).filter(key => key != "_id" && key != "__v" && key != "products"  )    

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
                                <td scope="row" className="fw-bold">{i}</td>
                                {/* {keys.map(key => <td>{}</td>)} */}
                                <td className="text-truncate">{employee.name}</td>
                                <td className="text-truncate">{employee.phone}</td>
                                <td className="text-truncate">{employee.address}</td>
                                <td className="text-truncate">{employee.salary}</td>
                                <td className="text-truncate">{employee.type}</td>
                                <td className="text-truncate">{employee.createdAt.split("T")[0]}</td>
                                <td className="text-truncate">{employee.updatedAt.split("T")[0]}</td>
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

export default EmployeeTable
