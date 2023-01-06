import React, { useContext } from 'react'
import { toast } from 'react-toastify'
import { Context } from '../../context/Context'
import useProductOperations from '../../hooks/useProductOperations'

const ProductDeleteForm = ({deleteId, setDeleteId}) => {
    const { dispatch } = useContext(Context)
    const { deleteProduct } = useProductOperations()


    const handleFormSubmit = async (e) => {
        e.preventDefault()

        const product = await deleteProduct(deleteId)
        if(product.error){
            console.log(product.error)
            toast.error("Error occured!")
        }
        else{
            console.log(product)
            toast.success("Product Deleted Successful")
            dispatch("DELETE_PRODUCTS", product)
            dispatch("UPDATE_DELETE_CATEGORIES", product)
            dispatch("UPDATE_DELETE_SUPPLIERS", product)
            dispatch("DELETE_STOCKS", product)
            setDeleteId("")
        }
    }

    return <>
        <div class="modal fade" id="deleteModal" >
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Delete Product</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        Are You sure You want to Delete this Product !!!
                    </div>
                    <div class="modal-footer d-flex justify-content-between">
                        <button type="button" class="btn btn-success" data-bs-dismiss="modal">No</button>
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onClick={handleFormSubmit} >Yes</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default ProductDeleteForm
