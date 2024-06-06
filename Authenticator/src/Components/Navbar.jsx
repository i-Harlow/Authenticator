import React from 'react'
import { Link } from "react-router-dom";

import "../Styles/navbarComponent.css"

function Navbar() {
  return (
    <nav className="navbar">
        <ul>
            <li><Link to={"/home"}>Home</Link></li>
            <li><Link to={"/login"}>Login</Link></li>
            <li><Link to={"/signup"}>Sign Up</Link></li>
        </ul>
    </nav>   
  )
}

export default Navbar