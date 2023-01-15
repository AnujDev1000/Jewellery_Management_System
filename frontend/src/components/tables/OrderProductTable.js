import React, { useContext, useEffect } from 'react'
import { Context } from '../../context/Context'
import useCaratPrice from '../../utils/caratPrice'
import { HiCurrencyRupee } from "react-icons/hi"

const OrderProductTable = ({ products, cart, setCart }) => {
    const { stocks } = useContext(Context)
    const { goldCarat, sliverCarat } = useCaratPrice()

    const keys = Object.keys(products[0]).filter(key => key !== "_id" && key !== "__v" && key !== "carat" && key !== "stone" && key !== "category" && key !== "discription" && key !== "supplier" && key !== "createdAt" && key !== "updatedAt" && key !== "totalPrice" && key !== "count")

    useEffect(() => {
    }, [stocks])

    const handleCart = (product) => {
        if(cart.length){
            const i = cart.findIndex(c => c._id === product._id)
            if(i !== -1){
                cart[i].count = parseInt(cart[i].count) + 1
                setCart([...cart])
            }
            else{
                product.count = 1
                if(product.metal == "gold"){
                    // product.totalPrice = goldCarat(product.carat)
                    product.totalPrice = 5000
                }
                else{
                    // product.totalPrice = sliverCarat(product.carat)
                    product.totalPrice = 50
                }
                setCart([...cart, product])
            }
        }
        else{
            product.count = 1
            if(product.metal == "gold"){
                // product.totalPrice = goldCarat(product.carat)
                product.totalPrice = 5000
            }
            else{
                // product.totalPrice = sliverCarat(product.carat)
                product.totalPrice = 50
            }
            setCart([...cart, product])
        }
    }

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
                    const index = stocks.findIndex(stock => stock._id === product.stock._id)
                    let availableStock = 0
                    if(index != -1){
                        availableStock = stocks[index].availableStock            
                    }
                    return (
                        <tr key={i} className="">
                            <td className="fw-bold">{i}</td>
                            {/* {keys.map(key => <td>{}</td>)} */}
                            <td className="text-truncate">{product.name}</td>
                            <td className="text-truncate">
                                {product.metal === "gold" ?
                                    <span className="badge bg-warning">{product.metal}</span>
                                    :
                                    <span className="badge bg-secondary">{product.metal}</span>}
                            </td>
                            <td className="text-truncate">{product.weight}g</td>
                            <td className="text-truncate">
                                <span className="badge bg-info">
                                    <HiCurrencyRupee className="fs-6" /> 
                                    {product.price}
                                </span>
                            </td>
                            <td className="text-truncate">
                                <span className="badge bg-dark text-white">
                                    {availableStock}
                                </span>
                            </td>
                            <td className="text-truncate">
                                <button className="btn btn-danger btn-sm mb-1" onClick={(e) => handleCart(product)}>
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

export default OrderProductTable
