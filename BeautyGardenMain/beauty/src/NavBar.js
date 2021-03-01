import React, { Component } from 'react';
import {Link} from "react-router-dom"
import { MenuItems } from "./Components/NavBar/MenuItems"
import './Components/NavBar/Navbar.css'

class NavBar extends Component{
    state = {clicked : false}
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }
   


    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo"> The Beauty Garden </h1>
            
                <div classNamae="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>

                </div>
                <ul className= {this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}

                                </a>
                            </li>
                        ) 
                    })}
                    
                </ul>

            </nav>
        )
    }
}

export default NavBar;



/* function NavBar(){
    return(
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    );


}
export default NavBar;
*/