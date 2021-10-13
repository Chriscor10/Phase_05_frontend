import React from 'react';
import { NavLink } from  "react-router-dom";
import './NavBar.css'

function NavBar() {
    return(
        <nav className="NavBar">
            <NavLink exact to="/">Home</NavLink>
            <NavLink exact to="/loads">Loads</NavLink>
            <NavLink exact to="/createload">Create Loads</NavLink>
            <NavLink exact to="/assignload">Assign Loads</NavLink>
            </nav>
    )
}

export default NavBar;