import React from 'react'
import { FaEdit, FaTrash } from "react-icons/fa"

const ProductTable = ({products}) => {
    const keys = Object.keys(products[0]).filter(key => key != "_id" && key != "__v" && key != "stock" && key != "discription" )    

    return (
        <table className="table table-sm table-bordered m-0">
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
                            <tr key={i}>
                                <th scope="row">{i}</th>
                                {/* {keys.map(key => <td>{}</td>)} */}
                                <td>{product.name}</td>
                                <td>{product.metal}</td>
                                <td>{product.carat}</td>
                                <td>{product.stone}</td>
                                <td>{product.weight}</td>
                                <td>{product.price}</td>
                                <td>{product.category.name}</td>
                                <td>{product.supplier.name}</td>
                                <td>{product.createdAt}</td>
                                <td>{product.updatedAt}</td>
                                <td>
                                    <button className="btn btn-info btn-sm me-2 text-white">
                                        <FaEdit />
                                    </button>
                                    <button className="btn btn-info btn-sm text-white">
                                        <FaTrash />
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
