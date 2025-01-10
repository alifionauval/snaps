import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css'; // Mengimpor file CSS Home

const Home = () => {
  return (
    <div>
      <header className="hero-section">
        <div className="hero-content">
          <img src={require('../assets/logo.png')} alt="d'snap logo" className="center-logo" /> {/* Logo di atas */}
          <h1 className="slogan">Give Some Snaps To Your Brand !</h1>
          <p className="hero-description">
            It always seems impossible until it's done
          </p>
          <p classname="hero-description-2">
            - Nelson Mandela
          </p>
        </div>
        <div className="profile-icon-container">
          <Link to="/login">
            <img src={require('../assets/profile-icon.png')} alt="Admin Profile" className="profile-icon" />
          </Link>
        </div>
      </header>

      <section className="section-info">
        <h2 className="best-choice-text">d'snap Is The Best Choice For Event Organizier !</h2>
      </section>

      <section className="info-content">
  <div className="info-image">
    <img src={require('../assets/Brand.png')} alt="Our Philosophy" />
  </div>
  <div className="info-text">
    <h3>Our Philosophy</h3>
    <p>To attract and create the BUZZ and WOW factor to its targeted/potential market,
    To make people pay attention and experience the brand, thus brand awareness that will long stay in consumer's mind, and
    To awaken with the most efficient way and in a shortest possible time</p>
  </div>
</section>

<section className="section-mission">
  <div className="mission-image">
    <img src={require('../assets/Idea.png')} alt="Our Mission" />
  </div>
  <div className="journey-content">
    <h4>Our Mission</h4>
    <p>
      To be the leading Event Organizer in Indonesia with comprehensive knowledge of our client's brand that delivers the synergies of effective strategies, outstanding creative production, and exceptional service.
    </p>
  </div>
</section>


      <section className="section-benefits">
  <h2>Our Values</h2>
  <div className="benefits-grid">
    <div className="benefit-item">
      <img src={require('../assets/Teamwork.png')} alt="Teamwork" className="benefit-icon"/>
      <div className="benefit-text">
        <h3>Teamwork</h3>
        <p>In event/activation there is no success without teamwork. Therefore every division in our team holds high commitment towards grow effort.
        We also work together with our clients as partners, which enabled us to understand the, products and services, their target market, their expectation and their goal.</p>
      </div>
    </div>
    <div className="benefit-item">
      <img src={require('../assets/TargetDriven.png')} alt="Target-Driven" className="benefit-icon"/>
      <div className="benefit-text">
        <h3>Target Driven</h3>
        <p>Every project has its own goals to achieve. We always aim to make those goals a reality by creating marketing strategy that is practical and achievable. Each member of our team has the experience, professionalism, energy and drive to exceed targets.</p>
      </div>
    </div>
    <div className="benefit-item">
      <img src={require('../assets/Efficient.png')} alt="Efficient" className="benefit-icon"/>
      <div className="benefit-text">
        <h3>Efficient</h3>
        <p> We always strive to understand what our client's needs to provide the best alternative solution for their communication strategy in the most cost efficient way, without reducing the impact we deliver to your potential audience.</p>
      </div>
    </div>
    <div className="benefit-item">
      <img src={require('../assets/Agility.png')} alt="Agility" className="benefit-icon"/>
      <div className="benefit-text">
        <h3>Agility</h3>
        <p>We execute our works from a meticulous planning. But when encountered with opportunities and challenges we reach our potential by being flexible. That way we can respond to changes quickly to deliver what our client needs.</p>
      </div>
    </div>
  </div>
</section>

      <section className="cta-section">
        <h3 className="cta-text">Give Some Snaps To</h3>
        <h4 className="cta-text">Your Brand !</h4>
        <Link to="/kontak-kami"> {/* Link menuju halaman kontak */}
          <button className="cta-button">Contact Us !</button>
        </Link>
      </section>
    </div>
  );
};

export default Home;