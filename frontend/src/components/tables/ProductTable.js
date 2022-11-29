import React from 'react'

const ProductTable = ({products}) => {
    const keys = Object.keys(products[0]).filter(key => key != "_id" && key != "__v" && key != "stock" && key != "discription" )    

    return (
        <table className="table table-sm table-bordered m-0 caption-top">
            <caption>Products Lists</caption>
                <thead>
                    <tr className="bg-dark text-white">
                        <th scope="col">#</th>
                        {keys.map(key => <th scope="col">{key}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {products.map((product,index) => {
                        return (
                            <tr>
                                <th scope="row">{index}</th>
                                {/* {keys.map(key => <td>{product.name}</td>)} */}
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
                            </tr>
                        )
                    })}     
                                          
                </tbody>
            </table>
    )
}

export default ProductTable
