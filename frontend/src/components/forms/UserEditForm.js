import React, { useContext } from 'react'
import { toast } from 'react-toastify'
import { Context } from '../../context/Context'
import useUserOperation from '../../hooks/useUserOperation'

const UserEditForm = ({ updateUser, setUpdateUser, setLoading, type, setType }) => {
    const { dispatch } = useContext(Context)
    const { updateUsers } = useUserOperation()

    const handleFormSubmit = async (e) => {
        e.preventDefault()

        let user = {}
        if(type === "state"){
            user = await updateUsers(updateUser._id, {isActive: !updateUser.isActive})
        }
        else{
            user = await updateUsers(updateUser._id, {isAdmin: !updateUser.isAdmin})
        }
        if(user.error){
            console.log(user.error)
            toast.error("Error occured!")
        }
        else{
            console.log(user)
            toast.success("Updated Successfully")
            dispatch("UPDATE_USER", user)
            setUpdateUser({})
            setLoading(false)
            setType("")
        }
    }

    return <>
        <div class="modal fade" id="editModal" >
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Change Status</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    {type === "state" ? 
                        <div class="modal-body">
                            Change user status to {updateUser.isActive ? "Deactive" : "Active"} !
                        </div>
                                :
                        <div class="modal-body">
                            Change user access to {updateUser.isAdmin ? "Employee" : "Admin"} !
                        </div>
                    }
                    <div class="modal-footer d-flex justify-content-between">
                        <button type="button" class="btn btn-success" data-bs-dismiss="modal">No</button>
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onClick={handleFormSubmit} >Yes</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default UserEditForm
