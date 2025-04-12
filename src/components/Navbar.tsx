
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles/Navbar.css';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          City<span>Voyage</span>
        </Link>
        
        <button className="navbar-toggle" onClick={toggleMenu}>
          ☰
        </button>
        
        <ul className={`navbar-links ${showMenu ? 'show' : ''}`}>
          <li>
            <Link 
              to="/" 
              className={`navbar-link ${location.pathname === '/' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/explore" 
              className={`navbar-link ${location.pathname.startsWith('/explore') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Explore
            </Link>
          </li>
          <li>
            <Link 
              to="/auth" 
              className={`navbar-link ${location.pathname === '/auth' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Login / Signup
            </Link>
          </li>
          <li>
            <Link 
              to="/admin" 
              className={`navbar-link ${location.pathname.startsWith('/admin') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Admin
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
