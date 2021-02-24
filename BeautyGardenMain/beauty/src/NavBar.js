import React from "react";
import {Link} from "react-router-dom"


function NavBar(){
    return(
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/academy">Academy</Link></li>
            <li><Link to="/meetTheTeam">Meet The Team</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
        </ul>
    );


}
export default NavBar;