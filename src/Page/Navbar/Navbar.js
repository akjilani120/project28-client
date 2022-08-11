import React from 'react';
import { Link } from "react-router-dom";
const Navbar = ({user , setUser}) => {
   const logOut =() =>{
    setUser("")
   }
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
             {  user? 
                <button onClick={logOut} className='btn btn-warning'>Log out</button> :
              <Link  className='nav-link ' to='/'>Login</Link>}
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