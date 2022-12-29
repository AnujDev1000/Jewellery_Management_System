import React, { useContext } from 'react'
import { toast } from 'react-toastify'
import { Context } from '../../context/Context'
import useOrderOperation from '../../hooks/useOrderOperation'

const OrderEditForm = ({ updateOrder, setUpdateOrder, setCart }) => {
    const { dispatch } = useContext(Context)
    const { updateOrders } = useOrderOperation()

    const handleFormSubmit = async (e) => {
        e.preventDefault()

        const order = await updateOrders(updateOrder._id)
        if(order.error){
            console.log(order.error)
            toast.error("Error occured!")
        }
        else{
            console.log(order)
            toast.success("Order Completed Successful")
            dispatch("UPDATE_ORDER", order)
            dispatch("ADD_STOCKS", order.products)
            setUpdateOrder({})
            setCart([])
            // dispatch("DELETE_PRODUCTS", order)
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
                    <div class="modal-body">
                        Change Order Status to Complete !
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

export default OrderEditForm
