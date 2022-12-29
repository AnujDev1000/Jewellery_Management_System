import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Context } from '../../context/Context'
import useSupplierOperation from '../../hooks/useSupplierOperation'

const SupplierForm = () => {
    const { dispatch } = useContext(Context)
    const { addSupplier } = useSupplierOperation()

    const [errors, setErrors] = useState(null)
    const [loading, setLoading] = useState(true)
    const [inputs, setInputs] = useState({ name:"", phone: ""})
    
    useEffect(() => {
    }, [loading, inputs])

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setErrors("")

        const supplier = await addSupplier(inputs)
        if(supplier.error){
            setErrors(supplier.error.error)
            console.log(errors)
            setLoading(false)
        }
        else{
            console.log(supplier)
            toast.success("Supplier Added Successful")
            dispatch("ADD_SUPPLIER", supplier)
            setLoading(false)
            setInputs({ name: "", phone: ""})
        }
    }

    return (
        <>
            <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="row">
                            <div className="card-body">
                                <div className="p-2">
                                    <div className='d-flex justify-content-between'>
                                        <h2 className="fw-bold mb-3 text-center">Add Category</h2>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div>
                                        <label htmlFor="name">name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            placeholder="Enter Supplier name"
                                            value={inputs.name}
                                            onChange={e => setInputs({ ...inputs, name: e.target.value })}
                                        />
                                    </div>
                                    <div className="mt-2">
                                        <label htmlFor="name">Phone</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            placeholder="Enter Supplier phone"
                                            value={inputs.phone}
                                            onChange={e => setInputs({ ...inputs, phone: e.target.value })}
                                        />
                                    </div>
                                    <button type="button" className="btn form-control btn-primary mt-3" data-bs-dismiss="modal" onClick={handleFormSubmit}>
                                        Submit
                                    </button>
                                    {errors ? 
                                        <div className="alert alert-sm alert-danger alert-dismissible fade show m-0 mt-3 py-2"  role="alert">
                                            Error occured!
                                        </div>: null
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SupplierForm
