import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Context } from '../../context/Context'
import useProductOperations from '../../hooks/useProductOperations'

const ProductAddForm = () => {
    const { products, categories, suppliers,  dispatch } = useContext(Context)
    const { addProduct } = useProductOperations()

    const [errors, setErrors] = useState(null)
    const [loading, setLoading] = useState(true)
    const [inputs, setInputs] = useState({ name: "", metal: "", carat: 0, stone: "", weight: 0, price: 0, category: "Categories", supplier: "Suppliers" })

    useEffect(() => {
        // console.log(inputs);
    }, [inputs, errors, setInputs])

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setErrors("")

        console.log(inputs);
        const product = await addProduct(inputs)
        if(product.error){
            setErrors(product.error.error)
            console.log(errors)
            setLoading(false)
        }
        else{
            console.log(product)
            toast.success("Product Added Successful")
            dispatch("ADD_PRODUCTS", product)
            setInputs({ name: "", metal: "", carat: 0, stone: "", weight: 0, price: 0, category: "", supplier: "" })
            setLoading(false)
        }
    }
    
    return <>
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="row ">
                        <div>
                            <div className="card-body">
                                <div className='d-flex justify-content-between'>
                                    <h2 className="fw-bold mb-3 text-center">Add Products</h2>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div>
                                    <label htmlFor="name">Product name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        placeholder="Enter Product name"
                                        value={inputs.name}
                                        onChange={e => setInputs({ ...inputs, name: e.target.value })}
                                    />
                                    <div className="valid-feedback">Looks good!</div>
                                    <div className="invalid-feedback">Please choose a username.</div>
                                </div>
                                <div className='d-flex justify-content-between my-2'>
                                    <div className='me-2'>
                                        <label htmlFor="name" >Metal name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="metal"
                                            placeholder="Enter metal name"
                                            value={inputs.metal}
                                            onChange={e => setInputs({ ...inputs, metal: e.target.value })}
                                        />
                                        <div className="valid-feedback">Looks good!</div>
                                        <div className="invalid-feedback">Please choose a username.</div>
                                    </div>
                                    <div>
                                        <label htmlFor="email" >Carat</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="carat"
                                            placeholder="Enter carat"
                                            value={inputs.carat}
                                            onChange={e => setInputs({ ...inputs, carat: e.target.value })}
                                        />
                                        <div className="valid-feedback">Looks good!</div>
                                        <div className="invalid-feedback">Please choose a username.</div>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="name" >Stone</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="stone"
                                        placeholder="Enter stone"
                                        value={inputs.stone}
                                        onChange={e => setInputs({ ...inputs, stone: e.target.value })}
                                    />
                                    <div className="valid-feedback">Looks good!</div>
                                    <div className="invalid-feedback">Please choose a username.</div>
                                </div>
                                <div className='d-flex justify-content-between my-2'>
                                    <div className='me-2'>
                                        <label htmlFor="name" >Weight</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="weight"
                                            placeholder="Enter Weight"
                                            value={inputs.weight}
                                            onChange={e => setInputs({ ...inputs, weight: e.target.value })}
                                        />
                                        <div className="valid-feedback">Looks good!</div>
                                        <div className="invalid-feedback">Please choose a username.</div>
                                    </div>
                                    <div>
                                        <label htmlFor="email" >Price</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="price"
                                            placeholder="Enter Price"
                                            value={inputs.price}
                                            onChange={e => setInputs({ ...inputs, price: e.target.value })}

                                        />
                                        <div className="valid-feedback">Looks good!</div>
                                        <div className="invalid-feedback">Please choose a username.</div>
                                    </div>
                                </div>
                                <select
                                    onChange={e => setInputs({ ...inputs, category: e.target.value })}
                                    className="form-select my-3 cursor-pointer">
                                    <option  selected>Categories</option>
                                    {
                                        categories.map(category => <option value={category._id}>{category.name}</option>)
                                    }
                                </select>
                                <select
                                    onChange={e => setInputs({ ...inputs, supplier: e.target.value })}
                                    className="form-select my-3 cursor-pointer">
                                    <option  selected>Suppliers</option>
                                    {
                                        suppliers.map(supplier => <option value={supplier._id}>{supplier.name}</option>)
                                    }
                                </select>

                                <button type="button" className="btn form-control btn-primary" 
                                data-bs-dismiss="modal"   
                                onClick={handleFormSubmit}
                                >
                                    addProduct
                                    {/* {loading ? "Add Product" : <div className="spinner-border spinner-border-sm" role="status"></div>} */}
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

}

export default ProductAddForm
