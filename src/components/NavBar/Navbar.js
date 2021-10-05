import React from 'react';
import { NavLink } from  "react-router-dom";
import './NavBar.css'

function NavBar() {
    return(
        <nav className="NavBar">
            <NavLink exact to="/">Home</NavLink>
            <NavLink exact to="/loads">Loads</NavLink>
            </nav>
    )
}

export default NavBar;