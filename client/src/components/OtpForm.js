import React from 'react'

const OtpForm = ({inputs, setInputs, handleSubmit, handleSubmitOtp, loading}) => {
    return (
        <form className="d-flex flex-column">
            <h2 className="fw-bold mb-3 text-center">OTP VERIFICATION</h2>
            <p className="text-muted">We have sent an email to <span className="fw-bold">{inputs.email}</span></p>
            <label htmlFor="otp" className="form-label mb-0">Enter otp</label>
            <input type="text" placeholder="six digit code" className="form-control mb-2" id="otp" onChange={(e) => setInputs({...inputs, otp:e.target.value})} value={inputs.otp} />
                <button onClick={handleSubmitOtp} className="btn btn-dark me-0 mb-3 mb-sm-0" >
                    {!loading? "Submit" : <div className="spinner-border spinner-border-sm" role="status"></div>}
                </button>
            <p className="text-secondary mt-1 text-center">Didn't get an otp <button onClick={handleSubmit} className="btn btn-link p-0">Resend</button></p>
        </form>
    )
}

export default OtpForm
