import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1>Prod<span style={{color:'blue'}}>ucts</span></h1>
      </div>

      <div className="navbar-center">
        <input
          type="text"
          placeholder="Search..."
          className="search-bar"
        />
      </div>

      <div className="navbar-right">
        <a href="/contact" className="nav-item" style={{fontWeight:'bold'}}> <h3> Help <span style={{color:'blue'}}> Center</span></h3></a>
      </div>
    </nav>
  );
};

export default Navbar;
