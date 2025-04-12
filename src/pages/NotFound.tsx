
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NotFound = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      
      <div className="min-h-screen flex items-center justify-center bg-gray-100" style={{ padding: '2rem', minHeight: 'calc(100vh - 200px)' }}>
        <div style={{ textAlign: 'center', maxWidth: '500px' }}>
          <h1 style={{ fontSize: '5rem', marginBottom: '1rem', color: '#33C3F0' }}>404</h1>
          <p style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#555' }}>
            Oops! Page not found
          </p>
          <p style={{ marginBottom: '2rem', color: '#777' }}>
            We couldn't find the page <code style={{ backgroundColor: '#f5f5f5', padding: '0.2rem 0.4rem', borderRadius: '3px' }}>{location.pathname}</code>
          </p>
          <Link 
            to="/" 
            style={{
              backgroundColor: '#33C3F0',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: '4px',
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'background-color 0.3s'
            }}
          >
            Back to Home
          </Link>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default NotFound;
