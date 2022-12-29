import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Context } from '../../context/Context'
import useCategoryOperation from '../../hooks/useCategoryOperation'

const CategoryForm = () => {
    const { dispatch } = useContext(Context)
    const { addCategory } = useCategoryOperation()

    const [errors, setErrors] = useState(null)
    const [loading, setLoading] = useState(true)
    const [newCategory, setNewCategory] = useState("")
    
    useEffect(() => {
    }, [loading, newCategory])

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setErrors("")

        const category = await addCategory({name: newCategory})
        if(category.error){
            setErrors(category.error.error)
            console.log(errors)
            setLoading(false)
        }
        else{
            console.log(category)
            toast.success("Category Added Successful")
            dispatch("ADD_CATEGORY", category)
            setLoading(false)
            setNewCategory("")
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
                                        <label htmlFor="name">Catgory name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            placeholder="Enter Category name"
                                            value={newCategory}
                                            onChange={e => setNewCategory(e.target.value)}
                                        />
                                    </div>
                                    <button type="button" className="btn form-control btn-primary mt-2" data-bs-dismiss="modal" onClick={handleFormSubmit}>
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

export default CategoryForm
