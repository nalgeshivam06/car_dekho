import React from 'react'

function Navbar() {
    return (
        <div>
            <nav className="navbar fixed-top  " style={{backgroundColor:"#c9aa88"}}>
                <div className="container-fluid">
                    <form className="d-flex " role="search">
                        <input className="form-control me-2" style={{width:"300px", border:"2px solid "}}type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>

        </div>
    )
}

export default Navbar