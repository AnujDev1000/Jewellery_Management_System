import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark my-2 rounded shadow-sm">
            <div className="container-fluid">
                <a className="navbar-brand" href="/home">
                    Jewellers
                </a>
                <button className="btn btn-warning float-right">
                    logout
                </button>
            </div>
        </nav>
    )
}

export default Navbar
