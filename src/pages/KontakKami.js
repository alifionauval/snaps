import React, { useState } from 'react';
import '../styles/KontakKami.css';

const KontakKami = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleOrderClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      {/* Header image for Our Services */}
      <section className="header-our-services">
        <img src={require('../assets/header-our-services.png')} alt="Our Services Header" />
        <h2 className="header-text">Enjoy Our Services !</h2>
      </section>

      {/* Event Packages Grid Section */}
      <section className="event-packages">
        <div className="event-grid">
          {/* Small Event */}
          <div className="event-card">
            <img src={require('../assets/small-event.png')} alt="Small Event" />
            <h4>Small Event</h4>
            <p>Benefits</p>
            <ul>
              <li>Booth</li>
              <li>Booth</li>
              <li>Booth</li>
              <li>Booth</li>
            </ul>
            <p className="price">Start From IDR 25.000.000,00</p>
            <button className="order-button" onClick={handleOrderClick}>Order Now</button>
          </div>

          {/* Medium Event */}
          <div className="event-card">
            <img src={require('../assets/medium-event.png')} alt="Medium Event" />
            <h4>Medium Event</h4>
            <p>Benefits</p>
            <ul>
              <li>Booth</li>
              <li>Booth</li>
              <li>Booth</li>
              <li>Booth</li>
            </ul>
            <p className="price">Start From IDR 55.000.000,00</p>
            <button className="order-button" onClick={handleOrderClick}>Order Now</button>
          </div>

          {/* Big Event */}
          <div className="event-card">
            <img src={require('../assets/big-event.png')} alt="Big Event" />
            <h4>Big Event</h4>
            <p>Benefits</p>
            <ul>
              <li>Booth</li>
              <li>Booth</li>
              <li>Booth</li>
              <li>Booth</li>
            </ul>
            <p className="price">Start From IDR 105.000.000,00</p>
            <button className="order-button" onClick={handleOrderClick}>Order Now</button>
          </div>
        </div>
      </section>

      {/* White background section for contact options */}
      <section className="kontak-buttons">
        <h3>Contact Us Here !</h3>
        <div className="button-group">
          <a href="https://wa.me/628128218017" target="_blank" rel="noopener noreferrer" className="button whatsapp">
            <img src={require('../assets/whatsapp2.png')} alt="WhatsApp icon" />
            <span>Click Here !</span>
          </a>
          <a href="mailto:agus@snapsindonesia.co.id" className="button email">
            <img src={require('../assets/mail2.png')} alt="Email icon" />
            <span>Click Here !</span>
          </a>
          <a href="https://www.instagram.com/dsnap_id" target="_blank" rel="noopener noreferrer" className="button instagram">
            <img src={require('../assets/instagram2.png')} alt="Instagram icon" />
            <span>Click Here !</span>
          </a>
        </div>
      </section>

      {/* Pop-up for Order */}
      {showPopup && (
        <div className="popup-overlay" onClick={handleClosePopup}>
          <div className="popup-form" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={handleClosePopup}>
              &#10006;
            </button>
            <form>
              <label htmlFor="name">Name or Company Name</label>
              <input type="text" id="name" name="name" placeholder="Enter name or company" />

              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Enter email" />

              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" placeholder="Enter subject" />

              <label htmlFor="date">Date</label>
              <input type="date" id="date" name="date" />

              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Enter your message"></textarea>

              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" placeholder="Enter phone number" />

              <button 
              type="button" 
              className="submit-button" 
              onClick={() => {
                window.open(
                `https://wa.me/6281319171765?text=Halo%20saya%20tertarik%20untuk%20memesan%20event%20melalui%20Snapsindo!`,
                "_blank"
                );
              }}
            >
              Order Now !
            </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default KontakKami;
