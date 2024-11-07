import React from 'react'
import { NavLink } from 'react-router-dom'
import "../Navbar/Navbar.css"

function Navbar() {
  return (
    <nav>
        <div className="logo">
            <img src="../src/assets/images/game-center.jpg" alt="" />
        </div>
        <ul>
           <li><NavLink to="/">GameCenter</NavLink></li>
           <li><NavLink to="/about">About</NavLink></li>
           <li><NavLink to="/projects">Project</NavLink></li>
           <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
        <div className="login">
            <button>login</button>
            <button>signin</button>
        </div>
    </nav>
  )
}

export default Navbar