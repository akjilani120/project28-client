import React from 'react';
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <a class="navbar-brand" href="#">Project 28</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link className='nav-link  active'  to='/'>Registation</Link>
              </li>
              <li class="nav-item">
              <Link  className='nav-link ' to='/login'>Login</Link>
              </li>
              <li class="nav-item">
              <Link className='nav-link '  to='/atboard'>Atboard</Link>
              </li>
            
              
            </ul>
            
          </div>
        </div>
      </nav>
    );
};

export default Navbar;