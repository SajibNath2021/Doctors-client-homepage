import React from 'react';

const Navbar = () => {
    return (
        <div>

<nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid">
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav " style={{marginLeft:'auto'}}>
        <li className="nav-item">
          <a className="nav-link    active" style={{marginRight:'45px'}} aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link   "  style={{marginRight:'45px'}} href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link   "  style={{marginRight:'45px'}} href="#">Dental Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link  text-white  "  style={{marginRight:'45px'}} href="#">Reviews</a>
        </li>
        <li className="nav-item">
          <a className="nav-link  text-white  "  style={{marginRight:'45px'}} href="#">Blogs</a>
        </li>
        <li className="nav-item">
          <a className="nav-link  text-white  "  style={{marginRight:'45px'}} href="#">Contact us</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
            
        </div>
    );
};

export default Navbar;