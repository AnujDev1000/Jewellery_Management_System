import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa"

const PurchaseProductTable = ({ products }) => {
    const keys = Object.keys(products[0]).filter(key => key != "_id" && key != "__v" && key != "stock" && key != "discription" && key != "supplier" && key != "createdAt" && key != "updatedAt")


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
                {products.map((product, i) => {
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
                            <td className="text-truncate">
                                <button className="btn btn-danger btn-sm mb-1" 
                                    // onClick={e => setUpdateProduct(product)}
                                    >
                                    Add to cart
                                </button>
                            </td>
                        </tr>
                    )
                })}

            </tbody>
        </table>
    )
}

export default PurchaseProductTable
