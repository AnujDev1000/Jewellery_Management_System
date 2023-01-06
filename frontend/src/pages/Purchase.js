import React, { useContext, useEffect, useState } from 'react' 
import CustomerForm from '../components/forms/CustomerForm'
import Navbar from "../components/Navbar"
import PurchaseCart from '../components/PurchaseCart'
import Rates from "../components/Rates"
import PurchaseProductTable from '../components/tables/PurchaseProductTable'
import { Context } from '../context/Context'
import useCaratPrice from '../utils/caratPrice'
import useRound from '../utils/round'
import { toast } from 'react-toastify'
import usePurchaseOperation from '../hooks/usePurchaseOperation'

const Purchase = () => {
    const  { addPurchase } = usePurchaseOperation()
    const { products, categories, dispatch, stocks } = useContext(Context)
    const { goldCarat, sliverCarat } = useCaratPrice()
    const { roundToTwo } = useRound()
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState({})
    const [cart, setCart] = useState([])
    const [customer, setCustomer] = useState({name: "", phone: ""})
    const [total, setTotal] = useState(0)
    const [tax, setTax] = useState(0)
    const [receiptNo, setReceiptNo] = useState(Math.floor(Math.random() * 10000)+1000)
    const [filterProducts, setFilterProducts] = useState(products)

    const setData = () => {
        let taxData = 0
        let totalData = 0
        cart.map(c => {
            if(c.metal === "gold"){
                // const goldTax = (3*5000)/100
                // c.totalPrice = c.price + 5000*c.weight + goldTax
                const goldTax = (3*goldCarat(c.carat))/100
                const rate = goldCarat(c.carat)*c.weight + goldTax
                c.totalPrice = roundToTwo(c.price + rate)
                taxData = taxData + goldTax*c.count
                totalData = totalData + (c.totalPrice)*c.count
            }
            else{
                // const silverTax = (3*50)/100
                // c.totalPrice = c.price + 50*c.weight + silverTax
                const silverTax = (3*sliverCarat(c.carat))/100
                const rate = sliverCarat(c.carat)*c.weight + silverTax
                c.totalPrice = roundToTwo(c.price + rate)
                taxData = taxData + silverTax*c.count
                totalData = totalData + (c.totalPrice)*c.count
            }
            return c
        })
        setTax(roundToTwo(taxData))
        setTotal(Math.round(totalData))
    }

    useEffect(() => {
        setData()
    }, [customer, cart, stocks , filterProducts])

    const handleSelectCategory = (arg) => {
        setFilterProducts(products.filter(product => product.category.name === arg))
    }

    const handlePurchase = async () => {
            setLoading(true)
            setErrors("")
    
            let productCount = 0
            cart.map(c => productCount += c.count )

            const  inputs = {
                customer: customer, 
                receipt: receiptNo,
                quantity: productCount,
                amount: total,
                taxAmount: tax,
                products: cart.map(c => {
                    return {
                        _id: c._id,
                        name: c.name,
                        count: c.count,
                        price: c.totalPrice,
                        weight: c.weight,
                        stock: c.stock
                    }
                })
            }

            const purchase = await addPurchase(inputs)
            if(purchase.error){
                setErrors(purchase.error.error)
                console.log(errors)
                setLoading(false)
            }
            else{
                console.log(purchase)
                toast.success("Saved Changes Successful")
                dispatch("ADD_PURCHASE", purchase)
                dispatch("UPDATE_DELETE_STOCKS", purchase.products)
                setLoading(false)
                setCart([])
                setReceiptNo(Math.floor(Math.random() * 10000)+1000)
                setCustomer({name: "", phone: ""})
                setTotal(0)
                setTax(0)
            }
    }

    return (
        <div className="purchase">
            <Navbar />
            <div className="row mt-1">
                <div className="col-md-8">
                    <div className="row my-2 my-md-0">
                        <div className="col-">
                            <Rates />
                        </div>
                        <div className="col-*">
                            <div className="customer-section bg-white shadow-sm rounded p-2 mb-2">
                                <CustomerForm customer={customer} setCustomer={setCustomer} />
                            </div>
                        </div>
                        <div className="col-*">
                            <div className="products-section bg-white shadow-sm rounded p-2 mt-1">
                                <ul className="nav nav-tabs d-flex justify-content-between overflow-auto">
                                    <div className='d-flex justify-content-start'>
                                        <li className="nav-item cursor-pointer">
                                            <span className={`nav-link px-1 py-2 active=${true}`} onClick={e => { setFilterProducts(products) }}>All</span>
                                        </li>
                                        {categories && categories.map((category, i) =>
                                            <li key={i} className="nav-item cursor-pointer">
                                                <span className="nav-link px-1 py-2" onClick={e => { handleSelectCategory(category.name) }}>{category.name}</span>
                                            </li>
                                        )}
                                    </div>
                                </ul>
                                <div className="mh-table2 product-table table-responsive bg-light p-2">
                                    {!products.length ? 
                                        <div className="spinner-border spinner-border-sm" role="status"></div>
                                        :
                                        <>
                                            {!filterProducts.length ? <span className="fw-bold">No Products!</span>
                                                : <PurchaseProductTable products={filterProducts} cart={cart} setCart={setCart} />
                                            }
                                        </>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="cart-section bg-white shadow-sm rounded p-2 h-specific">
                        <PurchaseCart loading={loading} receiptNo={receiptNo} customer={customer} cart={cart} setCart={setCart} total={total} tax={tax} errors={errors} handlePurchase={handlePurchase} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Purchase
