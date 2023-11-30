

import React, { useState } from 'react';

function Navbar({ onSearch }) {
  const [searchVal, setSearchVal] = useState('');

  const handleSearchClick = (e) => {
    e.preventDefault();
    onSearch(searchVal);
  };

  return (
    <div className='container' style={{ height: '50px' }}>
      <nav className="navbar fixed-top" style={{ backgroundColor: '#ccded8',borderRadius: '40px'}}>
        {/* <div>
        
        </div> */}
        
        
        <div className="container-fluid">
        <h1 style={{color:"red"}}>CarDekho</h1>
          <form className="d-flex" role="search">
            <input
              onChange={(e) => setSearchVal(e.target.value)}
              className="form-control me-2 custom-input"
              style={{ width: "300px", border: "2px solid " }}
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              onClick={handleSearchClick}
              className="cart-btn"
              style={{ fontSize: "15px" }}
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
