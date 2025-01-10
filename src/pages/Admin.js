import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router
import '../styles/Admin.css';

const Admin = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Function to handle logout and navigate to the home page
  const handleLogout = () => {
    // You can perform any logout logic here if needed (e.g., clearing tokens)
    navigate('/'); // Redirect to the home page ("/")
  };

  return (
    <div className="admin-container">
      <div className="admin-sidebar">
        <img
          src={require('../assets/logo.png')}
          alt="Logo d'snap"
          className="admin-logo"
        />
        <ul className="admin-menu">
          <li>
            <a href="/admin" className="menu-link">
              Home
            </a>
          </li>
          <li>
            <a href="/adminprojects" className="menu-link">
              Projects
            </a>
          </li>
          <li>
            <a href="/reservation" className="menu-link">
              Reservation
            </a>
          </li>
        </ul>
      </div>
      <div className="admin-content">
        <h1 className="admin-title">Welcome to Admin Dashboard</h1>
      </div>

      {/* Logout Button in top right */}
      <div className="logout-button" onClick={handleLogout}>
        <img
          src={require('../assets/LogoutLogo.png')}
          alt="Logout"
          className="logout-logo"
        />
      </div>
    </div>
  );
};

export default Admin;
