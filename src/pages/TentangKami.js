import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/TentangKami.css'; // Mengimpor file CSS
import teamImage from '../assets/team-working.jpg'; // Ganti dengan path gambar sebenarnya
import samsungLogo from '../assets/samsung-logo.png'; // Ganti dengan path logo sebenarnya
import kapalApiLogo from '../assets/kapal-api-logo.png';
import kanzlerLogo from '../assets/kanzler-logo.png';
import imploraLogo from '../assets/implora-logo.png';
import cabebangLogo from '../assets/cabebang-logo.png'; // Ganti dengan path logo baru
import fujifilmLogo from '../assets/fujifilm-logo.png'; // Ganti dengan path logo baru
import gooddayLogo from '../assets/goodday-logo.png'; // Ganti dengan path logo baru
import erafoneLogo from '../assets/erafone-logo.png'; // Ganti dengan path logo baru

const TentangKami = () => {
  return (
    <div className="tentang-kami-container">
      {/* Bagian Tentang Kami */}
      <section className="tentang-kami-section">
        <div className="team-image-container">
          <img src={teamImage} alt="Team Working" className="team-image" />
        </div>
        <h2 className="tentang-kami-title">Tentang Kami</h2>
        <div className="tentang-kami-content">
          <div className="tentang-kami-box">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="tentang-kami-box">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="tentang-kami-box">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="tentang-kami-box">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </section>

      {/* Bagian Client Kami */}
      <section className="client-section">
        <h2 className="client-title">Client Kami</h2>
        <div className="client-logo-container">
          <img src={samsungLogo} alt="Samsung" className="client-logo" />
          <img src={kapalApiLogo} alt="Kapal Api" className="client-logo" />
          <img src={kanzlerLogo} alt="Kanzler" className="client-logo" />
          <img src={imploraLogo} alt="Implora" className="client-logo" />
          <img src={cabebangLogo} alt="Cabebang" className="client-logo" />
          <img src={fujifilmLogo} alt="Fujifilm" className="client-logo" />
          <img src={gooddayLogo} alt="Good Day" className="client-logo" />
          <img src={erafoneLogo} alt="Erafone" className="client-logo" />
        </div>
      </section>

      {/* Bagian tambahan untuk pesan CTA */}
      <section className="cta-section">
        <h3 className="cta-text">Give Some Snaps To</h3>
        <h4 className="cta-text">Your Brand !</h4>
        <Link to="/kontak-kami"> {/* Link menuju halaman kontak */}
          <button className="cta-button">Pesan Sekarang!</button>
        </Link>
      </section>
    </div>
  );
};

export default TentangKami;
