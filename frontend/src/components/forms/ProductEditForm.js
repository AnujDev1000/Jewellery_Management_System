import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Context } from '../../context/Context'
import useProductOperations from '../../hooks/useProductOperations'

const ProductEditForm = ({ updateProduct, setUpdateProduct }) =>  {
    const { dispatch } = useContext(Context)
    const [initialProduct, setInitialProduct] = useState(updateProduct) 
    const { updateProducts } = useProductOperations()
    const { categories, suppliers } = useContext(Context)
    const [errors, setErrors] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setInitialProduct(updateProduct)
    }, [updateProduct])

    const compareData = () => {
        let data = {}
        for (const property in updateProduct){
            if(updateProduct[property] !== initialProduct[property]){
                data[property] = initialProduct[property]
            }
        }
        return data
    }

    const handleUpdate = async (e) => {
        e.preventDefault()
        setLoading(true)
        setErrors("")
        
        // console.log(compareData())
        const product = await updateProducts(updateProduct._id, compareData())
        if(product.error){
            setErrors(product.error.error)
            console.log(errors)
            setLoading(false)
        }
        else{
            console.log(product)
            toast.success("Product Updated Successful")
            dispatch("UPDATE_PRODUCTS", product)
            setUpdateProduct(null)
            console.log(initialProduct)
            setLoading(false)
        }
    }

    return <>
    {initialProduct && initialProduct ? 
        <div className="modal fade" id="editexampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="row ">
                        <div>
                            <div className="card-body">
                                <div className='d-flex justify-content-between'>
                                    <h2 className="fw-bold mb-3 text-center">Update Product </h2>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>

                                <div>
                                    <label htmlFor="name" >Product name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        placeholder="Enter Product name"
                                        value={initialProduct.name}
                                        onChange={e => setInitialProduct({ ...initialProduct, name: e.target.value })}
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
                                            value={initialProduct.metal}
                                            onChange={e => setInitialProduct({ ...initialProduct, metal: e.target.value })}
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
                                            value={initialProduct.carat}
                                            onChange={e => setInitialProduct({ ...initialProduct, carat: e.target.value })}
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
                                        value={initialProduct.stone}
                                        onChange={e => setInitialProduct({ ...initialProduct, stone: e.target.value })}
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
                                            value={initialProduct.weight}
                                            onChange={e => setInitialProduct({ ...initialProduct, weight: e.target.value })}
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
                                            value={initialProduct.price}
                                            onChange={e => setInitialProduct({ ...initialProduct, price: e.target.value })}
                                        />
                                        <div className="valid-feedback">Looks good!</div>
                                        <div className="invalid-feedback">Please choose a username.</div>
                                    </div>
                                </div>
                                
                                <select
                                    onChange={e => setInitialProduct({ ...initialProduct, category: e.target.value })}
                                    className="form-select my-3 cursor-pointer">
                                    <option  selected>Categories</option>
                                    {
                                        categories.map(category => <option value={category._id}>{category.name}</option>)
                                    }
                                </select>
                                <select
                                    onChange={e => setInitialProduct({ ...initialProduct, supplier: e.target.value })}
                                    className="form-select my-3 cursor-pointer">
                                    <option  selected>Suppliers</option>
                                    {
                                        suppliers.map(supplier => <option value={supplier._id}>{supplier.name}</option>)
                                    }
                                </select>
                                <button type="button" className="btn form-control btn-primary my-2" data-bs-dismiss="modal" onClick={handleUpdate}>Save changes</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
     : <></>}
    </>
}

export default ProductEditForm
