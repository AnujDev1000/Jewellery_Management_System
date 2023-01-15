import React, { useEffect, useState } from 'react'
import Receipt from '../Receipt'
import { HiCurrencyRupee } from "react-icons/hi"

const BillsTable = ({purchases}) => {
    const keys = Object.keys(purchases[0]).filter(key => key !== "_id" && key !== "__v" && key !== "updatedAt")
    const [customer, setCustomer] = useState({name: "", phone: ""})
    const [total, setTotal] = useState(0)
    const [tax, setTax] = useState(0)
    const [receiptNo, setReceiptNo] = useState(0)
    const [cart, setCart] = useState([])

    useEffect(() => {
    }, [])

    const handleReceipt = (purchase) => {
        setCustomer({name: purchase.customer.name, phone: ""})
        setTotal(purchase.amount)
        setTax(purchase.taxAmount)
        setReceiptNo(purchase.receipt)
        setCart(purchase.products)
    }

    return (
        <>
            <table className="table table-sm table-borderless m-0">
                <thead>
                    <tr className="">
                        <th scope="col">#</th>
                        {keys.map((key, i) => <th key={i} scope="col">{key}</th>)}
                        <th scope="col">bills</th>
                    </tr>
                </thead>
                <tbody>
                    {purchases && purchases.map((purchase, i) => {
                        return (
                            <tr key={i} className="">
                                <td className="fw-bold">{i}</td>
                                {/* {keys.map(key => <td>{}</td>)} */}
                                <td className="text-truncate">{purchase.customer.name}</td>
                                <td className="text-truncate">
                                    <span className="badge bg-danger">{purchase.receipt}</span>
                                </td>
                                <td className="text-truncate">  
                                    <span className="badge bg-dark">{purchase.quantity}</span>
                                </td>
                                <td className="text-truncate">
                                    <span className="badge bg-info">
                                        <HiCurrencyRupee className="fs-6" /> 
                                        {purchase.amount}
                                    </span>
                                </td>
                                <td className="text-truncate">
                                    {purchase.payment == "cash" ? <span className="badge bg-success">{purchase.payment}</span>
                                        : <span className="badge bg-primary">{purchase.payment}</span>
                                    }
                                </td>
                                <td className="text-truncate">
                                    {purchase.taxAmount}
                                </td>
                                <td>
                                    <div class="dropdown">
                                        <button class="btn btn-sm btn-white dropdown-toggle m-0 fw-bold" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                            products
                                        </button>                 
                                        <ul class="dropdown-menu dropdown-menu-left" aria-labelledby="dropdownMenuLink">
                                            {purchase.products.map( product => 
                                                <li className="dropdown-item d-flex flex-row justify-content-between ">
                                                    <span className="fw-bold">{product.name}</span>
                                                    <span className="badge bg-warning pb-1">{product.count}</span>
                                                </li> 
                                            )}
                                        </ul>
                                    </div>
                                </td>
                                <td className="text-truncate">{purchase.createdAt.split("T")[0]}</td>
                                <td className="text-truncate">
                                    <button className="btn btn-danger btn-sm mb-1" data-bs-toggle="modal" data-bs-target="#receipt" onClick={e => {handleReceipt(purchase)}}>
                                        Receipt
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <Receipt customer={customer} receiptNo={receiptNo} cart={cart} setCart={""} total={total} tax={tax} />
        </>
    )
}
export default BillsTable
