import React, { useContext, useEffect } from 'react'
import { toast } from 'react-toastify'
import { Context } from '../../context/Context'
import useUserOperation from '../../hooks/useUserOperation'

const UserDeleteForm = ({deleteId, setDeleteId}) => {
    const { dispatch } = useContext(Context)
    const { deleteUser } = useUserOperation()


    const handleFormSubmit = async (e) => {
        e.preventDefault()

        const user = await deleteUser(deleteId)
        if(user.error){
            console.log(user.error)
            toast.error("Error occured!")
        }
        else{
            console.log(user)
            toast.success("User Deleted Successfully")
            dispatch("DELETE_USER", user)
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
                        Are You sure You want to Delete this User !!!
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

export default UserDeleteForm
