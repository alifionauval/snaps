import React from 'react';
import '../styles/Footer.css'; // Import file CSS untuk styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img src={require('../assets/logo.png')} alt="d'snap logo" className="footer-logo" />
          <div className="footer-info">
            <h4>PT. Snapsindo Tunggal Putra</h4>
            <p>Jl. Yado I E No.12, RT.4/RW.4, Gandaria Utara, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12140</p>
          </div>
        </div>
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>
            <img src={require('../assets/mail.png')} alt="Email icon" className="footer-icon" /> 
            <a href="mailto:alf.nval24@gmail.com">alf.nval24@gmail.com</a>
          </p>
          <p>
            <img src={require('../assets/instagram.png')} alt="Instagram icon" className="footer-icon" /> 
            <a href="https://www.instagram.com/dsnap_id" target="_blank" rel="noopener noreferrer">@dsnap_id</a>
          </p>
          <p>
            <img src={require('../assets/whatsapp.png')} alt="WhatsApp icon" className="footer-icon" /> 
            <a href="https://wa.me/628128218017" target="_blank" rel="noopener noreferrer">0812-8218-017</a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>©2024 SNAPSINDO. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
