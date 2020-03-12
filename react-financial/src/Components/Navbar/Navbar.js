import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
       
 
    <header className="header_Navbar">
        
        <ul className="container_Navbar">
            
            <i className="fa fa-money"  aria-hidden="true"></i>

            <div className="name_Navbar"><p>NAME</p></div>
      
           <nav  className="nav_Navbar">
               <li></li>
            <li><a href="#">Log-In </a></li>
            <li><a href="#">Register</a></li>
            </nav>
        </ul>
       
        </header>
   

    )
}

export default Navbar;