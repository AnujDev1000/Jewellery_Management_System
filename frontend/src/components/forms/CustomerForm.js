import React from 'react'

const CustomerForm = () => {
    return (
        <div className="customer-form row">
            <div className="col pe-1">
                <div className="input-group p-1">
                    <label htmlFor="formControlInput" className="form-label my-0 fw-bold">Customer Name</label>
                    <input type="email" className="form-control py-2 w-100 mt-1 bg-light border-0 rounded" id="formControlInput" placeholder="Enter Customer Name..." />
                </div>
            </div>
            <div className="col ps-1">
                <div className="input-group p-1">
                    <label htmlFor="formControlInput" className="form-label my-0 fw-bold">Customer Number</label>
                    <input type="email" className="form-control py-2 w-100 mt-1 bg-light border-0 rounded" id="formControlInput" placeholder="Enter Customer Number..." />
                </div>
            </div>
        </div>
    )
}

export default CustomerForm
