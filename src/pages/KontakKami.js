import React from 'react';
import '../styles/KontakKami.css';

const KontakKami = () => {
  return (
    <div>
      {/* Header image for Our Services */}
      <section className="header-our-services">
        <img src={require('../assets/header-our-services.png')} alt="Our Services Header" />
        <h2 className="header-text">Enjoy Our Services !</h2>
      </section>

      {/* White background section for contact options */}
      <section className="kontak-buttons">
        <h3>Tertarik Menggunakan Jasa Kami ?</h3>
        <div className="button-group">
          <a href="https://wa.me/628128218017" target="_blank" rel="noopener noreferrer" className="button whatsapp">
            <img src={require('../assets/whatsapp2.png')} alt="WhatsApp icon" />
            <span>Klik Disini!</span>
          </a>
          <a href="mailto:agus@snapsindonesia.co.id" className="button email">
            <img src={require('../assets/mail2.png')} alt="Email icon" />
            <span>Klik Disini!</span>
          </a>
          <a href="https://www.instagram.com/dsnap_id" target="_blank" rel="noopener noreferrer" className="button instagram">
            <img src={require('../assets/instagram2.png')} alt="Instagram icon" />
            <span>Klik Disini!</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default KontakKami;
