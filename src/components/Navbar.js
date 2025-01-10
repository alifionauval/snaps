import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // Mengimpor file CSS
import logo from '../assets/logo.png'; // Pastikan logo.png berada di folder assets
import burgerIcon from '../assets/burger-icon.png'; // Mengimpor burger icon

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo-img" />
      </div>
      <div className="navbar-burger" onClick={toggleMenu}>
        <img src={burgerIcon} alt="Menu" className="burger-icon" />
      </div>
      <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/tentang-kami">About Us</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/kontak-kami">Reservation</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
