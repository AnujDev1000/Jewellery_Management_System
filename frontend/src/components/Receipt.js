import React from 'react'

const Receipt = ({cart, tax, total, customer, receiptNo}) => {
    var currentdate = new Date(); 
    var datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + "   "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

    return (
        <div class="modal" tabindex="-1" id="receipt">
            <div class="modal-dialog modal-sm bg-light p-2">
                <div className="receipt-data bg-white p-4 mb-2 shadow-sm">
                    <h6 className="text-uppercase text-center m-0">Receipt of Sale</h6>
                    <h4 className="text-uppercase fw-bold text-center m-0">Balaji Jewellers</h4>
                    <h6 className="text-center mt-2 fs">{datetime}</h6>
                    <h6 className="text-end fs fw-bold mt-4">{receiptNo}</h6>
                    <hr className="hr-dashed m-0 mb-2"/>
                    <div className="tax d-flex flex-row justify-content-between align-items-center">
                        <h6 className="fs">Name</h6>
                        <h6 className="fs m-0">{customer.name}</h6>
                    </div>
                    <div className="total d-flex flex-row justify-content-between align-items-center">
                        <h6 className="fs">Phone</h6>
                        <h6 className="fs m-0">{customer.phone}</h6>
                    </div>
                    <hr className="hr-dashed m-0"/>
                    <table className="w-100 m-0 mt-4">
                        <tr className="border-dashed fs">
                            <th className="text-start">ITEM</th>
                            <th className="text-start">QTY</th>
                            <th className="text-start">WEIGHT</th>
                            <th className="text-end">AMT</th>
                        </tr>
                        {cart.map((c, i) =>
                            <tr className="pt-2 fs">
                                <td className="text-start">{c.name}</td>
                                <td className="text-start">{c.count}</td>
                                <td className="text-start">{c.weight}</td>
                                <td className="text-end">{c.totalPrice}</td>
                            </tr>
                        )}
                    </table>
                    <hr className="hr-dashed"/>
                    <div className="tax d-flex flex-row justify-content-between align-items-center">
                        <h6 className="fw-bold text-center">Tax</h6>
                        <h6 className="fw-bold text-center m-0">{tax}</h6>
                    </div>
                    <div className="total d-flex flex-row justify-content-between align-items-center">
                        <h6 className="fw-bold text-center">Total</h6>
                        <h6 className="fw-bold text-center m-0">{total}</h6>
                    </div>
                    <hr className="hr-dashed m-0"/>
                    <h5 className="text-uppercase text-center mt-2 fw-bold">Thank You!</h5>
                </div>
                <button className="btn btn-success text-white w-100" data-bs-toggle="modal" data-bs-target="#receipt">Print</button>
            </div>
        </div>
    )
}

export default Receipt
