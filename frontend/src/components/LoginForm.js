import React from 'react'

const LoginForm = ({inputs, setInputs, handleSubmit, loading}) => {
    return (
        <form className="d-flex flex-column">
            <h2 className="fw-bold mb-3 text-center">LOGIN</h2>
            <label htmlFor="email" className="form-label mb-0">Email</label>
            <input type="text" className="form-control mb-2" id="email" placeholder="name@example.com" onChange={(e) => setInputs({...inputs, email:e.target.value})} value={inputs.email} />
            <label htmlFor="password" className="form-label mb-0">Password</label>
            <input type="password" className="form-control mb-2" id="password" placeholder="must be 8 characters" onChange={(e) => setInputs({...inputs, password:e.target.value})} value={inputs.password} />
            <button onClick={handleSubmit} className="btn btn-dark mt-2" >
                {!loading? "Login" : <div className="spinner-border spinner-border-sm" role="status"></div>}
            </button>
            <p className="text-secondary mt-1 text-center">Don't have an account <a href="/register" className="link-primary">Register</a></p>
        </form>
    )
}

export default LoginForm
