import React from 'react'
import { BsArrowLeftSquareFill } from "react-icons/bs"
import { useNavigate } from 'react-router'

const NavigateBack = () => {
    const navigate = useNavigate()
    return (
        <div className="d-flex justify-content-end">
                <BsArrowLeftSquareFill className="fs-1 text-danger" onClick={() => navigate(-1)} />
        </div>
    )
}

export default NavigateBack
