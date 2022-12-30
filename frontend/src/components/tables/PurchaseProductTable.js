import React, { useContext, useEffect } from 'react'
import { toast } from 'react-toastify'
import { Context } from '../../context/Context'

const PurchaseProductTable = ({ products, cart, setCart }) => {
    const { stocks } = useContext(Context)

    const keys = Object.keys(products[0]).filter(key => key != "_id" && key != "__v" && key != "discription" && key != "supplier" && key != "createdAt" && key != "updatedAt" && key != "totalPrice" && key != "availableStock")


    useEffect(() => {
    }, [stocks])

    const handleCart = (product) => {
        const index = stocks.findIndex(stock => stock._id === product.stock._id)
        const availableStock = stocks[index].availableStock
        if(availableStock >= 1){
            if(cart.length){
                const i = cart.findIndex(c => c._id === product._id)
                if(i !== -1){
                    if(product.availableStock > 0){
                        product.availableStock -= 1
                        cart[i].count = cart[i].count + 1
                        setCart([...cart])
                    } 
                    else{
                        toast.error("Out of Stock!")
                    }
                }
                else{
                    product.count = 1
                    product.availableStock = availableStock
                    setCart([...cart, product])
                }
            }
            else{
                product.count = 1
                product.availableStock = availableStock - 1
                setCart([...cart, product])
            }
        }
        else{
            toast.error("Out of Stock!")
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

export default PurchaseProductTable
