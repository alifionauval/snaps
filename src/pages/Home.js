import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css'; // Mengimpor file CSS Home

const Home = () => {
  return (
    <div>
      <header className="hero-section">
        <div className="hero-content">
          <img src={require('../assets/logo.png')} alt="d'snap logo" className="center-logo" /> {/* Logo di atas */}
          <h1 className="slogan">Give Some Snaps To Your Brand!</h1>
          <p className="hero-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dan dolore magna aliqua.
          </p>
        </div>
      </header>

      <section className="section-info">
        <h2>d'snap! Pilihan Tepat Untuk Event Organizer</h2>
        <div className="info-content">
          <img src={require('../assets/person-image.jpg')} alt="Event Organizer" className="info-image" /> {/* Gambar orang */}
          <div className="info-text">
            <h3>Kelebihan Kami ?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore. </p>
          </div>
        </div>
      </section>

      <section className="section-benefits">
        <h2>Mengapa Harus d'snap!</h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <img src={require('../assets/icon-intensive-program.png')} alt="Intensive Program Icon" className="benefit-icon"/>
            <div className="benefit-text">
              <h3>Intensive Program</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.</p>
            </div>
          </div>
          <div className="benefit-item">
            <img src={require('../assets/icon-competent-trainer.png')} alt="Competent Trainer Icon" className="benefit-icon"/>
            <div className="benefit-text">
              <h3>Competent Trainer</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.</p>
            </div>
          </div>
          <div className="benefit-item">
            <img src={require('../assets/icon-lms.png')} alt="Learning Management System Icon" className="benefit-icon"/>
            <div className="benefit-text">
              <h3>Learning Management System</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.</p>
            </div>
          </div>
          <div className="benefit-item">
            <img src={require('../assets/icon-e-certificate.png')} alt="E-Certificate Icon" className="benefit-icon"/>
            <div className="benefit-text">
              <h3>E-Certificate</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.</p>
            </div>
          </div>
          <div className="benefit-item">
            <img src={require('../assets/icon-job-connector.png')} alt="Job Connector Icon" className="benefit-icon"/>
            <div className="benefit-text">
              <h3>Job Connector</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.</p>
            </div>
          </div>
          <div className="benefit-item">
            <img src={require('../assets/icon-installment-option.png')} alt="Installment Option Available Icon" className="benefit-icon"/>
            <div className="benefit-text">
              <h3>Installment Option Available</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.</p>
            </div>
          </div>
        </div>
      </section>

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

export default Home;