import React from 'react'

const RegisterForm = ({inputs, setInputs, handleSubmit, loading}) => {
    return (
        <form className="d-flex flex-column">
            <h2 className="fw-bold mb-3 text-center">REGISTER</h2>
            <div className="group d-flex flex-column flex-sm-row mb-2">
                <div className="me-sm-3">
                    <label htmlFor="firstname" className="form-label mb-0">Firstname</label>
                    <input type="text" className="form-control" id="firstname" placeholder="" onChange={(e) => setInputs({...inputs, firstName:e.target.value})} value={inputs.firstName} />
                </div>
                <div>
                    <label htmlFor="lastname" className="form-label mb-0">Lastname</label>
                    <input type="text" className="form-control" id="lastname" placeholder="" onChange={(e) => setInputs({...inputs, lastName:e.target.value})} value={inputs.lastName} />
                </div>
            </div>
            <label htmlFor="email" className="form-label mb-0">Email</label>
            <input type="text" className="form-control mb-2" id="email" placeholder="name@example.com" onChange={(e) => setInputs({...inputs, email:e.target.value})} value={inputs.email} />

            <div className="group d-flex flex-column flex-sm-row mb-2">
                <div className="me-sm-3">
                    <label htmlFor="password" className="form-label mb-0">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="must be 8 characters" onChange={(e) => setInputs({...inputs, password:e.target.value})} value={inputs.password} />
                </div>
                <div>
                    <label htmlFor="conformPassword" className="form-label mb-0">Conform Password</label>
                    <input type="password" className="form-control" id="conformPassword" placeholder="same as password" onChange={(e) => setInputs({...inputs, cPassword:e.target.value})} value={inputs.cPassword} />
                </div>
            </div>
            <button onClick={handleSubmit} className="btn btn-dark mt-2" >
                {!loading? "Register" : <div class="spinner-border spinner-border-sm" role="status"></div>}
            </button>
            <p className="text-secondary mt-1 text-center">Already have an account <a href="/" className="link-primary">Login</a></p>
        </form>
    )
}

export default RegisterForm
