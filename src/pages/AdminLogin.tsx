
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../components/styles/AdminLogin.css';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    // Simulate a login request
    setTimeout(() => {
      if (email === 'admin@example.com' && password === 'admin123') {
        navigate('/admin/dashboard');
      } else {
        setError('Invalid email or password. Try admin@example.com / admin123');
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <>
      <Navbar />
      
      <div className="admin-login-container">
        <form className="admin-login-form" onSubmit={handleSubmit}>
          <h2 className="admin-login-title">Admin Login</h2>
          
          {error && <div className="error-message">{error}</div>}
          
          <div className="form-group">
            <label className="form-label" htmlFor="email">Email Address</label>
            <input
              id="email"
              className="form-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@example.com"
              required
            />
          </div>
          
          <div className="form-group">
            <label className="form-label" htmlFor="password">Password</label>
            <input
              id="password"
              className="form-input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>
          
          <button 
            type="submit" 
            className="login-button"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
          
          <p className="form-hint" style={{ marginTop: '1rem', fontSize: '0.8rem', color: '#666', textAlign: 'center' }}>
            Demo credentials: admin@example.com / admin123
          </p>
        </form>
      </div>
      
      <Footer />
    </>
  );
};

export default AdminLogin;
