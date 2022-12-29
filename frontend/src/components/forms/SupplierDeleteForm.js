import React, { useContext, useEffect } from 'react'
import { toast } from 'react-toastify'
import { Context } from '../../context/Context'
import useSupplierOperation from '../../hooks/useSupplierOperation'

const SupplierDeleteForm = ({deleteId, setDeleteId}) => {
    const { dispatch } = useContext(Context)
    const { deleteSupplier } = useSupplierOperation()


    const handleFormSubmit = async (e) => {
        e.preventDefault()

        const supplier = await deleteSupplier(deleteId)
        if(supplier.error){
            console.log(supplier.error)
            toast.error("Error occured!")
        }
        else{
            console.log(supplier)
            toast.success("Supplier Deleted Successfully")
            dispatch("DELETE_SUPPLIER", supplier)
            setDeleteId("")
        }
    }

    useEffect(() => {
        
    }, [deleteId])

    return <>
        <div class="modal fade" id="deleteModal" >
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Delete Product</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        Are You sure You want to Delete this Supplier !!!
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

export default SupplierDeleteForm
