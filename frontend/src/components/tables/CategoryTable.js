import React from 'react'
import { FaEdit, FaTrash } from "react-icons/fa"

const CategoryTable = ({categories}) => {
        const keys = Object.keys(categories[0]).filter(key => key !== "_id" && key !== "__v" && key !== "products"  )    

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
                    {categories.map((category,i) => {
                        return (
                            <tr key={i} className="">
                                <td className="fw-bold">{i}</td>
                                {/* {keys.map(key => <td>{}</td>)} */}
                                <td className="text-truncate">{category.name}</td>
                                <td className="text-truncate">{category.productCount}</td>
                                <td className="text-truncate">{category.createdAt.split("T")[0]}</td>
                                <td className="text-truncate">{category.updatedAt.split("T")[0]}</td>
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

export default CategoryTable
