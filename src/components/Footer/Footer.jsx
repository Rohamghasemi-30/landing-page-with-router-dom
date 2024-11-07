import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="../src/assets/images/game-center.jpg" alt="Game Center Logo" />
          <h2>Game Center</h2>
        </div>
        <p className="footer-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga suscipit beatae accusamus iure aut deleniti quidem veniam possimus, earum assumenda, inventore quasi error. Dolorum, quia architecto! Quae dolorem rerum fugiat?
        </p>
        <NavLink to="/about" className="footer-link">
          about 
        </NavLink>
        <ul className="footer-nav">
            <li><NavLink to="/">GameCenter</NavLink></li>
           <li><NavLink to="/about">About</NavLink></li>
           <li><NavLink to="/projects">Project</NavLink></li>
           <li><NavLink to="/contact">Contact</NavLink></li>  
        </ul>
      </div>
    </footer>
  );
}

export default Footer