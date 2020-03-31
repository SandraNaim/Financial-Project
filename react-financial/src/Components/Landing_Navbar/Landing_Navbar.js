import React from 'react';
import './Landing_Navbar.css';
import { BrowserRouter, Link} from 'react-router-dom';

function Landing_Navbar() {
    return (
       
 
    <header className="header_Navbar" style={{color:"white"}}>
        
        <ul className="container_Navbar">
            
            <i className="fa fa-money"  aria-hidden="true"></i>

            <div className="name_Navbar"><p>H E R O</p></div>
            <BrowserRouter>
            
           <nav  className="nav_Navbar">
               <li></li>
            <li className="link_Navbar" style={{color:"white"}}><Link to="/login">Log-In </Link> </li> 
            <li className="link_Navbar" style={{color:"white"}}><Link to="/register">Register</Link></li>
            </nav> 

            </BrowserRouter>            

        </ul>
       
        </header>
   

    )
}

export default Landing_Navbar;