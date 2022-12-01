import React from 'react'
import { FaEdit, FaTrash } from "react-icons/fa"

const ProductTable = ({products}) => {
    const keys = Object.keys(products[0]).filter(key => key != "_id" && key != "__v" && key != "stock" && key != "discription" )    

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
                    {products.map((product,i) => {
                        return (
                            <tr key={i} className="">
                                <td scope="row" className="fw-bold">{i}</td>
                                {/* {keys.map(key => <td>{}</td>)} */}
                                <td className="text-truncate">{product.name}</td>
                                <td className="text-truncate">
                                    {product.metal == "gold" ? 
                                                    <span className="badge bg-warning">{product.metal}</span>
                                                            : 
                                                    <span className="badge bg-secondary">{product.metal}</span>}
                                </td>
                                <td className="text-truncate">{product.carat}</td>
                                <td className="text-truncate">{product.stone}</td>
                                <td className="text-truncate">{product.weight}</td>
                                <td className="text-truncate">
                                    <span className="badge bg-info">{product.price}</span>
                                </td>
                                <td className="text-truncate">{product.category.name}</td>
                                <td className="text-truncate">{product.supplier.name}</td>
                                <td className="text-truncate">{product.createdAt.split("T")[0]}</td>
                                <td className="text-truncate">{product.updatedAt.split("T")[0]}</td>
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

export default ProductTable
