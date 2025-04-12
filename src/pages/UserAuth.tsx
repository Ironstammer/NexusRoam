
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../components/styles/AuthForm.css';

const UserAuth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      if (isLogin) {
        // Login logic would go here
        setSuccess('Login successful! Welcome back.');
      } else {
        // Signup logic would go here
        setSuccess('Account created successfully! You can now log in.');
      }
      setLoading(false);
      
      // Reset form
      setEmail('');
      setPassword('');
      setName('');
    }, 1000);
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setError('');
    setSuccess('');
  };

  return (
    <>
      <Navbar />
      
      <div className="auth-container">
        <div className="auth-form">
          <div className="auth-tabs">
            <div 
              className={`auth-tab ${isLogin ? 'active' : ''}`}
              onClick={() => setIsLogin(true)}
            >
              Login
            </div>
            <div 
              className={`auth-tab ${!isLogin ? 'active' : ''}`}
              onClick={() => setIsLogin(false)}
            >
              Sign Up
            </div>
          </div>
          
          <h2 className="auth-title">{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
          
          {error && <div className="error-message">{error}</div>}
          {success && <div className="success-message">{success}</div>}
          
          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="form-group">
                <label className="form-label" htmlFor="name">Full Name</label>
                <input
                  id="name"
                  className="form-input"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  required={!isLogin}
                />
              </div>
            )}
            
            <div className="form-group">
              <label className="form-label" htmlFor="user-email">Email Address</label>
              <input
                id="user-email"
                className="form-input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
              />
            </div>
            
            <div className="form-group">
              <label className="form-label" htmlFor="user-password">Password</label>
              <input
                id="user-password"
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
              className="auth-button"
              disabled={loading}
            >
              {loading 
                ? (isLogin ? 'Logging in...' : 'Signing up...') 
                : (isLogin ? 'Login' : 'Sign Up')}
            </button>
          </form>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default UserAuth;
