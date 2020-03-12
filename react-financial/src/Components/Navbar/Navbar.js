import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
       
 
    <header className="header_Navbar" style={{color:"white"}}>   
        <ul className="container_Navbar">     
            <i className="fa fa-money" aria-hidden="true"></i>
            <div className="name_Navbar"><p>H E R O</p></div>
           <nav  className="nav_Navbar">
               <li></li>
            <li><a className="link_Navbar" style={{color:"white"}} href="#">Log-In </a></li>
            <li><a className="link_Navbar" style={{color:"white"}}  href="#">Register</a></li>
            </nav> 
        </ul>
       
        </header>
   

    )
}

export default Navbar;