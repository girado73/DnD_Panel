import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HamburgerMenu.css';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className={`hamburger-menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/create" onClick={toggleMenu}>Create</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default HamburgerMenu;

