import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // Mengimpor file CSS
import logo from '../assets/logo.png'; // Pastikan logo.png berada di folder assets

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo-img" /> {/* Mengimpor gambar logo */}
      </div>
      <ul className="navbar-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/tentang-kami">Tentang Kami</Link></li> {/* Periksa jalur ini */}
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/kontak-kami">Kontak Kami</Link></li> {/* Periksa jalur ini */}
      </ul>
    </nav>
  );
};

export default Navbar;
