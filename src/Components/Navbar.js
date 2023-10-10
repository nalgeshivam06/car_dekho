import React from 'react'

function Navbar() {
    return (
        <div className='container'style={{height:"50px"}}>
            <nav className="navbar fixed-top  " style={{}}>
                <div className="container-fluid">
                    <form className="d-flex " role="search">
                        <input className="form-control me-2 custom-input" style={{width:"300px", border:"2px solid "}}type="text" placeholder="Search" aria-label="Search" oncha />
                        <button className="cart-btn"style={{fontSize:"15px"}} type="submit">Search</button>
                    </form>
                </div>
            </nav>

        </div>
    )
}

export default Navbar