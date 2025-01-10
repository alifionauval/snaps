import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // Mencegah reload halaman
    navigate('/admin'); // Arahkan ke halaman admin
  };

  return (
    <div className="login-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        <img
          src={require('../assets/BackLogo.png')}
          alt="Back"
          className="back-logo"
        />
      </button>
      <div className="login-box">
        <img
          src={require('../assets/logo.png')}
          alt="Logo d'snap"
          className="login-logo"
        />
        <h2 className="login-title">Admin Login</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Masukkan Email"
            className="login-input"
          />
          <input
            type="password"
            placeholder="Password"
            className="login-input"
          />
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
