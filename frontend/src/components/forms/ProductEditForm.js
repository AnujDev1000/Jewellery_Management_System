import React, { useContext, useState } from 'react'
import { Context } from '../../context/Context'

const ProductEditForm = ({ updateProduct, setUpdateProduct }) =>  {
    const { state } = useContext(Context)
    const categories = state.categories
    const suppliers = state.suppliers

    return <>
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
                                        value={updateProduct.name}
                                        onChange={e => setUpdateProduct({ ...updateProduct, name: e.target.value })}
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
                                            value={updateProduct.metal}
                                            onChange={e => setUpdateProduct({ ...updateProduct, metal: e.target.value })}
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
                                            value={updateProduct.carat}
                                            onChange={e => setUpdateProduct({ ...updateProduct, carat: e.target.value })}
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
                                        value={updateProduct.stone}
                                        onChange={e => setUpdateProduct({ ...updateProduct, stone: e.target.value })}
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
                                            value={updateProduct.weight}
                                            onChange={e => setUpdateProduct({ ...updateProduct, weight: e.target.value })}
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
                                            value={updateProduct.price}
                                            onChange={e => setUpdateProduct({ ...updateProduct, weight: e.target.value })}
                                        />
                                        <div className="valid-feedback">Looks good!</div>
                                        <div className="invalid-feedback">Please choose a username.</div>
                                    </div>
                                </div>
                                <select
                                    onChange={e => setUpdateProduct({ ...updateProduct, category: e.target.value })}
                                    className="form-select my-3 cursor-pointer">
                                    <option selected>Category select menu</option>
                                    {
                                        categories.map(category => <option value={{name: category.name, _id: category._id}}>{category.name}</option>)
                                    }
                                </select>
                                <select
                                    onChange={e => setUpdateProduct({ ...updateProduct, supplier: e.target.value })}
                                    className="form-select my-3 cursor-pointer">
                                    <option selected>Supplier select menu</option>
                                    {
                                        suppliers.map(supplier => <option value={{name: supplier.name, _id: supplier._id}}>{supplier.name}</option>)
                                    }
                                </select>

                                <button type="button" className="btn form-control btn-primary my-2" data-bs-dismiss="modal">Save changes</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>
}

export default ProductEditForm
