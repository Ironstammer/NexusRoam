
import React from 'react';
import './styles/Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          Your comprehensive guide to exploring new cities around the world.
        </p>
        
        <div className="footer-links">
          <Link to="/" className="footer-link">Home</Link>
          <Link to="/explore" className="footer-link">Explore</Link>
          <Link to="/auth" className="footer-link">Login / Signup</Link>
          <Link to="/admin" className="footer-link">Admin</Link>
        </div>
        
        <div className="footer-text">
          Contact us: info@cityvoyage.com | +1 (123) 456-7890
        </div>
        
        <div className="footer-copyright">
          &copy; {new Date().getFullYear()} CityVoyage Guide. Made for Java Project.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
