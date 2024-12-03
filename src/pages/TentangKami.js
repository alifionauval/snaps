import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import '../styles/TentangKami.css';
import teamImage from '../assets/Header_AboutUs.png';
import samsungLogo from '../assets/samsung-logo.png';
import kapalApiLogo from '../assets/kapal-api-logo.png';
import kanzlerLogo from '../assets/kanzler-logo.png';
import imploraLogo from '../assets/implora-logo.png';
import excelsoLogo from '../assets/excelso-logo.png';
import gooddayLogo from '../assets/goodday-logo.png';
import mandiriLogo from '../assets/mandiri-logo.png';
import travelokaLogo from '../assets/traveloka-logo.png';
import gopayLogo from '../assets/gopay-logo.png';
import briLogo from '../assets/bri-logo.png';
import bcaLogo from '../assets/bca-logo.png';
import philipsLogo from '../assets/philips-logo.png';
import abcLogo from '../assets/abc-logo.png';
import hpLogo from '../assets/hp-logo.png';
import bayerLogo from '../assets/bayer-logo.png';
import eventSamsung from '../assets/event-samsung.png';
import eventSamsung2 from '../assets/event-samsung-2.png';
import eventSamsung3 from '../assets/event-samsung-3.png';
import eventSamsung4 from '../assets/event-samsung-4.png';
import eventSamsung5 from '../assets/event-samsung-5.png';
import eventSamsung6 from '../assets/event-samsung-6.png';
import eventSamsung7 from '../assets/event-samsung-7.png';
import eventSamsung8 from '../assets/event-samsung-8.png';
import eventSamsung9 from '../assets/event-samsung-9.png';
import eventSamsung10 from '../assets/event-samsung-10.png';
import eventSamsung11 from '../assets/event-samsung-11.png';
import eventSamsung12 from '../assets/event-samsung-12.png';
import eventSamsung13 from '../assets/event-samsung-13.png';
import eventSamsung14 from '../assets/event-samsung-14.png';
import eventSamsung15 from '../assets/event-samsung-15.png';
import eventSamsung16 from '../assets/event-samsung-16.png';
import eventSamsung17 from '../assets/event-samsung-17.png';
import eventSamsung18 from '../assets/event-samsung-18.png';
import eventSamsung19 from '../assets/event-samsung-19.png';
import eventSamsung20 from '../assets/event-samsung-20.png';
import eventSamsung21 from '../assets/event-samsung-21.png';
import eventSamsung22 from '../assets/event-samsung-22.png';
import eventSamsung23 from '../assets/event-samsung-23.png';
import eventSamsung24 from '../assets/event-samsung-24.png';
import eventSamsung25 from '../assets/event-samsung-25.png';
import eventSamsung26 from '../assets/event-samsung-26.png';
import eventSamsung27 from '../assets/event-samsung-27.png';
import eventSamsung28 from '../assets/event-samsung-28.png';
import eventSamsung29 from '../assets/event-samsung-29.png';
import eventSamsung30 from '../assets/event-samsung-30.png';
import eventSamsung31 from '../assets/event-samsung-31.png';
import eventSamsung32 from '../assets/event-samsung-32.png';
import eventSamsung33 from '../assets/event-samsung-33.png';
import eventSamsung34 from '../assets/event-samsung-34.png';
import eventSamsung35 from '../assets/event-samsung-35.png';
import eventSamsung36 from '../assets/event-samsung-36.png';
import eventSamsung37 from '../assets/event-samsung-37.png';
import eventSamsung38 from '../assets/event-samsung-38.png';
import eventSamsung39 from '../assets/event-samsung-39.png';
import eventSamsung40 from '../assets/event-samsung-40.png';
import eventSamsung41 from '../assets/event-samsung-41.png';
import eventSamsung42 from '../assets/event-samsung-42.png';
import eventSamsung43 from '../assets/event-samsung-43.png';
import eventSamsung44 from '../assets/event-samsung-44.png';
import eventKapalApi from '../assets/event-kapal-api.png';
import eventKapalApi2 from '../assets/event-kapal-api-2.png';
import eventKapalApi3 from '../assets/event-kapal-api-3.png';
import eventKapalApi4 from '../assets/event-kapal-api-4.png';
import eventKapalApi5 from '../assets/event-kapal-api-5.png';
import eventKapalApi6 from '../assets/event-kapal-api-6.png';
import eventKapalApi7 from '../assets/event-kapal-api-7.png';
import eventKapalApi8 from '../assets/event-kapal-api-8.png';
import eventKapalApi9 from '../assets/event-kapal-api-9.png';
import eventKapalApi10 from '../assets/event-kapal-api-10.png';
import eventKapalApi11 from '../assets/event-kapal-api-11.png';
import eventKapalApi12 from '../assets/event-kapal-api-12.png';
import eventKapalApi13 from '../assets/event-kapal-api-13.png';
import eventKanzler1 from '../assets/event-kanzler-1.png';
import eventImplora1 from '../assets/event-implora-1.png';
import eventExcelso1 from '../assets/event-excelso-1.png';
import eventExcelso2 from '../assets/event-excelso-2.png';
import eventExcelso3 from '../assets/event-excelso-3.png';
import eventExcelso4 from '../assets/event-excelso-4.png';
import eventExcelso5 from '../assets/event-excelso-5.png';
import eventExcelso6 from '../assets/event-excelso-6.png';
import eventExcelso7 from '../assets/event-excelso-7.png';
import eventGoodDay1 from '../assets/event-goodday-1.png';
import eventGoodDay2 from '../assets/event-goodday-2.png';
import eventGoodDay3 from '../assets/event-goodday-3.png';
import eventGoodDay4 from '../assets/event-goodday-4.png';
import eventGoodDay5 from '../assets/event-goodday-5.png';
import eventGoodDay6 from '../assets/event-goodday-6.png';
import eventGoodDay7 from '../assets/event-goodday-7.png';
import eventMandiri1 from '../assets/event-mandiri-1.png';

Modal.setAppElement('#root');

const TentangKami = () => {
  // State untuk modal Samsung
  const [isSamsungModalOpen, setIsSamsungModalOpen] = useState(false);
  const [currentSamsungImageIndex, setCurrentSamsungImageIndex] = useState(0);

  // State untuk modal Kapal Api
  const [isKapalApiModalOpen, setIsKapalApiModalOpen] = useState(false);
  const [currentKapalApiImageIndex, setCurrentKapalApiImageIndex] = useState(0);

  const [isKanzlerModalOpen, setIsKanzlerModalOpen] = useState(false);
  const [currentKanzlerImageIndex, setCurrentKanzlerImageIndex] = useState(0);

  const [isImploraModalOpen, setIsImploraModalOpen] = useState(false);
  const [currentImploraImageIndex, setCurrentImploraImageIndex] = useState(0);

  const [isExcelsoModalOpen, setIsExcelsoModalOpen] = useState(false);
  const [currentExcelsoImageIndex, setCurrentExcelsoImageIndex] = useState(0);

  const [isGoodDayModalOpen, setIsGoodDayModalOpen] = useState(false);
  const [currentGoodDayImageIndex, setCurrentGoodDayImageIndex] = useState(0);

  const [isMandiriModalOpen, setIsMandiriModalOpen] = useState(false);
  const [currentMandiriImageIndex, setCurrentMandiriImageIndex] = useState(0);


  // Daftar gambar event Samsung
  const samsungEventImages = [eventSamsung, eventSamsung2, eventSamsung3, eventSamsung4, eventSamsung5, eventSamsung6, eventSamsung7, eventSamsung8, eventSamsung9, eventSamsung10, eventSamsung11, eventSamsung12, eventSamsung13, eventSamsung14, eventSamsung15, eventSamsung16, eventSamsung17, eventSamsung18, eventSamsung19, eventSamsung20, eventSamsung21, eventSamsung22, eventSamsung23, eventSamsung24, eventSamsung25, eventSamsung26, eventSamsung27, eventSamsung28, eventSamsung29, eventSamsung30, eventSamsung31,  eventSamsung32,  eventSamsung33,  eventSamsung34,  eventSamsung35,  eventSamsung36,  eventSamsung37,  eventSamsung38,   eventSamsung39,  eventSamsung40,  eventSamsung41,  eventSamsung42,  eventSamsung43,  eventSamsung44];
  
  // Daftar gambar event Kapal Api
  const kapalApiEventImages = [eventKapalApi, eventKapalApi2, eventKapalApi3, eventKapalApi4, eventKapalApi5, eventKapalApi6, eventKapalApi7, eventKapalApi8, eventKapalApi9, eventKapalApi10, eventKapalApi11, eventKapalApi12, eventKapalApi13];

  const kanzlerEventImages = [eventKanzler1]

  const imploraEventImages = [eventImplora1]

  const excelsoEventImages = [eventExcelso1, eventExcelso2, eventExcelso3, eventExcelso4, eventExcelso5, eventExcelso6, eventExcelso7]

  const goodDayEventImages = [eventGoodDay1, eventGoodDay2, eventGoodDay3, eventGoodDay4, eventGoodDay5, eventGoodDay6, eventGoodDay7]

  const mandiriEventImages = [eventMandiri1]


  // Fungsi membuka modal Samsung
  const openSamsungModal = () => {
    setCurrentSamsungImageIndex(0);
    setIsSamsungModalOpen(true);
  };

  // Fungsi menutup modal Samsung
  const closeSamsungModal = () => {
    setIsSamsungModalOpen(false);
  };

  // Fungsi untuk mengganti ke gambar berikutnya Samsung
  const nextSamsungImage = () => {
    setCurrentSamsungImageIndex((prevIndex) => (prevIndex + 1) % samsungEventImages.length);
  };

  // Fungsi untuk mengganti ke gambar sebelumnya Samsung
  const prevSamsungImage = () => {
    setCurrentSamsungImageIndex(
      (prevIndex) => (prevIndex - 1 + samsungEventImages.length) % samsungEventImages.length
    );
  };

  // Fungsi membuka modal Kapal Api
  const openKapalApiModal = () => {
    setCurrentKapalApiImageIndex(0);
    setIsKapalApiModalOpen(true);
  };

  // Fungsi menutup modal Kapal Api
  const closeKapalApiModal = () => {
    setIsKapalApiModalOpen(false);
  };

  // Fungsi untuk mengganti ke gambar berikutnya Kapal Api
  const nextKapalApiImage = () => {
    setCurrentKapalApiImageIndex((prevIndex) => (prevIndex + 1) % kapalApiEventImages.length);
  };

  // Fungsi untuk mengganti ke gambar sebelumnya Kapal Api
  const prevKapalApiImage = () => {
    setCurrentKapalApiImageIndex(
      (prevIndex) => (prevIndex - 1 + kapalApiEventImages.length) % kapalApiEventImages.length
    );
  };

   // Fungsi membuka modal Kapal Kanzler
   const openKanzlerModal = () => {
    setCurrentKanzlerImageIndex(0);
    setIsKanzlerModalOpen(true);
  };

  // Fungsi menutup modal Kapal Api
  const closeKanzlerModal = () => {
    setIsKanzlerModalOpen(false);
  };

  // Fungsi untuk mengganti ke gambar berikutnya Kapal Api
  const nextKanzlerImage = () => {
    setCurrentKanzlerImageIndex((prevIndex) => (prevIndex + 1) % kanzlerEventImages.length);
  };

  // Fungsi untuk mengganti ke gambar sebelumnya Kapal Api
  const prevKanzlerImage = () => {
    setCurrentKanzlerImageIndex(
      (prevIndex) => (prevIndex - 1 + kanzlerEventImages.length) % kanzlerEventImages.length
    );
  };

  // Fungsi membuka modal Implora
  const openImploraModal = () => {
    setCurrentImploraImageIndex(0);
    setIsImploraModalOpen(true);
  };

  // Fungsi menutup modal Kapal Api
  const closeImploraModal = () => {
    setIsImploraModalOpen(false);
  };

  // Fungsi untuk mengganti ke gambar berikutnya Kapal Api
  const nextImploraImage = () => {
    setCurrentImploraImageIndex((prevIndex) => (prevIndex + 1) % imploraEventImages.length);
  };

  // Fungsi untuk mengganti ke gambar sebelumnya Kapal Api
  const prevImploraImage = () => {
    setCurrentImploraImageIndex(
      (prevIndex) => (prevIndex - 1 + imploraEventImages.length) % imploraEventImages.length
    );
  };

  const openExcelsoModal = () => {
    setCurrentExcelsoImageIndex(0);
    setIsExcelsoModalOpen(true);
  };
  
  const closeExcelsoModal = () => {
    setIsExcelsoModalOpen(false);
  };
  
  const nextExcelsoImage = () => {
    setCurrentExcelsoImageIndex((prevIndex) => (prevIndex + 1) % excelsoEventImages.length);
  };
  
  const prevExcelsoImage = () => {
    setCurrentExcelsoImageIndex(
      (prevIndex) => (prevIndex - 1 + excelsoEventImages.length) % excelsoEventImages.length
    );
  };
  
  const openGoodDayModal = () => {
    setCurrentGoodDayImageIndex(0);
    setIsGoodDayModalOpen(true);
  };
  
  const closeGoodDayModal = () => {
    setIsGoodDayModalOpen(false);
  };
  
  const nextGoodDayImage = () => {
    setCurrentGoodDayImageIndex((prevIndex) => (prevIndex + 1) % goodDayEventImages.length);
  };
  
  const prevGoodDayImage = () => {
    setCurrentGoodDayImageIndex(
      (prevIndex) => (prevIndex - 1 + goodDayEventImages.length) % goodDayEventImages.length
    );
  };  
  
  const openMandiriModal = () => {
    setCurrentMandiriImageIndex(0);
    setIsMandiriModalOpen(true);
  };
  
  const closeMandiriModal = () => {
    setIsMandiriModalOpen(false);
  };
  
  const nextMandiriImage = () => {
    setCurrentMandiriImageIndex((prevIndex) => (prevIndex + 1) % mandiriEventImages.length);
  };
  
  const prevMandiriImage = () => {
    setCurrentMandiriImageIndex(
      (prevIndex) => (prevIndex - 1 + mandiriEventImages.length) % mandiriEventImages.length
    );
  };

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
            <p>
              D'SNAP is an Event Organizer that provides a multitude of services
              in strategic event/brand activation for the clients. It all started
              on one ordinary evening where D'SNAP founders meet up and just
              chitchatting over a cup of coffee. They shared their latest
              experience in works, when they finally realize that one thing they
              have in common is a passion to build their own Event Organizer that
              has the values of what they believe in, the one that pushes
              boundaries, captures opportunities, and knows there are no limits
              to how far you can go.
            </p>
          </div>
          <div className="tentang-kami-box">
            <p>
              D'SNAP started its operation in May 2010 and now occupies @ Radio
              Dalam, Jakarta. with 20 employees (Account, Production, Concept, &
              Creative Division). Each member is dedicated to delivering
              high-quality work that embodies the company's core values:
              creativity, innovation, and client satisfaction. D'SNAP's strength
              lies in its ability to seamlessly blend strategic thinking with a
              creative approach, providing solutions that are not only visually
              appealing but also relevant and impactful for clients.
            </p>
          </div>
          <div className="tentang-kami-box">
            <p>
              Our Service is consistent, benefits-driven message tells your target
              market exactly what they want to know "what's in it for me." We help
              you deliver your message to the right people, in the right place at
              the right time by pairing high-level of services and fresh ideas
              with your specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Bagian Client Kami */}
      <section className="client-section">
        <h2 className="client-title">Client Kami</h2>
        <div className="client-logo-container">
          <img
            src={samsungLogo}
            alt="Samsung"
            className="client-logo"
            onClick={openSamsungModal}
          />
          <img
            src={kapalApiLogo}
            alt="Kapal Api"
            className="client-logo"
            onClick={openKapalApiModal}
          />
          <img
          src={kanzlerLogo}
          alt="Kanzler"
          className="client-logo"
          onClick={openKanzlerModal}
          />
          <img
          src={imploraLogo}
          alt="Implora"
          className="client-logo"
          onClick={openImploraModal}
          />
          <img
          src={excelsoLogo}
          alt="Excelso"
          className="client-logo"
          onClick={openExcelsoModal}
          />
          <img
          src={gooddayLogo}
          alt="Good Day"
          className="client-logo"
          onClick={openGoodDayModal}
          />
          <img
          src={mandiriLogo}
          alt="Mandiri"
          className="client-logo"
          onClick={openMandiriModal}
          />
          <img src={travelokaLogo} alt="Traveloka" className="client-logo" />
          <img src={gopayLogo} alt="Gopay" className="client-logo" />
          <img src={briLogo} alt="BRI" className="client-logo" />
          <img src={bcaLogo} alt="BCA Life" className="client-logo" />
          <img src={philipsLogo} alt="PHILIPS" className="client-logo" />
          <img src={abcLogo} alt="ABC" className="client-logo" />
          <img src={hpLogo} alt="HP" className="client-logo" />
          <img src={bayerLogo} alt="JD.ID" className="client-logo" />
        </div>
      </section>

      {/* Modal untuk gambar Samsung */}
      <Modal
        isOpen={isSamsungModalOpen}
        onRequestClose={closeSamsungModal}
        className="modal"
        overlayClassName="modal-overlay"
        contentLabel="Samsung Event Image Modal"
      >
        <button onClick={closeSamsungModal} className="modal-close-button">
          &times;
        </button>
        <div className="modal-content">
          <button className="arrow left-arrow" onClick={prevSamsungImage}>
            &#8249;
          </button>
          <img
            src={samsungEventImages[currentSamsungImageIndex]}
            alt="Samsung Event"
            className="modal-image"
          />
          <button className="arrow right-arrow" onClick={nextSamsungImage}>
            &#8250;
          </button>
        </div>
      </Modal>

      {/* Modal untuk gambar Kapal Api */}
      <Modal
        isOpen={isKapalApiModalOpen}
        onRequestClose={closeKapalApiModal}
        className="modal"
        overlayClassName="modal-overlay"
        contentLabel="Kapal Api Event Image Modal"
      >
        <button onClick={closeKapalApiModal} className="modal-close-button">
          &times;
        </button>
        <div className="modal-content">
          <button className="arrow left-arrow" onClick={prevKapalApiImage}>
            &#8249;
          </button>
          <img
            src={kapalApiEventImages[currentKapalApiImageIndex]}
            alt="Kapal Api Event"
            className="modal-image"
          />
          <button className="arrow right-arrow" onClick={nextKapalApiImage}>
            &#8250;
          </button>
        </div>
      </Modal>

      <Modal
  isOpen={isKanzlerModalOpen}
  onRequestClose={closeKanzlerModal}
  className="modal"
  overlayClassName="modal-overlay"
  contentLabel="Kanzler Event Image Modal"
>
  <button onClick={closeKanzlerModal} className="modal-close-button">
    &times;
  </button>
  <div className="modal-content">
    <button className="arrow left-arrow" onClick={prevKanzlerImage}>
      &#8249;
    </button>
    <img
      src={kanzlerEventImages[currentKanzlerImageIndex]}
      alt="Kanzler Event"
      className="modal-image"
    />
    <button className="arrow right-arrow" onClick={nextKanzlerImage}>
      &#8250;
    </button>
  </div>
</Modal>

<Modal
  isOpen={isImploraModalOpen}
  onRequestClose={closeImploraModal}
  className="modal"
  overlayClassName="modal-overlay"
  contentLabel="Implora Event Image Modal"
>
  <button onClick={closeImploraModal} className="modal-close-button">
    &times;
  </button>
  <div className="modal-content">
    <button className="arrow left-arrow" onClick={prevImploraImage}>
      &#8249;
    </button>
    <img
      src={imploraEventImages[currentImploraImageIndex]}
      alt="Implora Event"
      className="modal-image"
    />
    <button className="arrow right-arrow" onClick={nextImploraImage}>
      &#8250;
    </button>
  </div>
</Modal>

<Modal
  isOpen={isExcelsoModalOpen}
  onRequestClose={closeExcelsoModal}
  className="modal"
  overlayClassName="modal-overlay"
  contentLabel="Excelso Event Image Modal"
>
  <button onClick={closeExcelsoModal} className="modal-close-button">
    &times;
  </button>
  <div className="modal-content">
    <button className="arrow left-arrow" onClick={prevExcelsoImage}>
      &#8249;
    </button>
    <img
      src={excelsoEventImages[currentExcelsoImageIndex]}
      alt="Excelso Event"
      className="modal-image"
    />
    <button className="arrow right-arrow" onClick={nextExcelsoImage}>
      &#8250;
    </button>
  </div>
</Modal>

<Modal
  isOpen={isGoodDayModalOpen}
  onRequestClose={closeGoodDayModal}
  className="modal"
  overlayClassName="modal-overlay"
  contentLabel="Good Day Event Image Modal"
>
  <button onClick={closeGoodDayModal} className="modal-close-button">
    &times;
  </button>
  <div className="modal-content">
    <button className="arrow left-arrow" onClick={prevGoodDayImage}>
      &#8249;
    </button>
    <img
      src={goodDayEventImages[currentGoodDayImageIndex]}
      alt="Good Day Event"
      className="modal-image"
    />
    <button className="arrow right-arrow" onClick={nextGoodDayImage}>
      &#8250;
    </button>
  </div>
</Modal>

<Modal
  isOpen={isMandiriModalOpen}
  onRequestClose={closeMandiriModal}
  className="modal"
  overlayClassName="modal-overlay"
  contentLabel="Mandiri Event Image Modal"
>
  <button onClick={closeMandiriModal} className="modal-close-button">
    &times;
  </button>
  <div className="modal-content">
    <button className="arrow left-arrow" onClick={prevMandiriImage}>
      &#8249;
    </button>
    <img
      src={mandiriEventImages[currentMandiriImageIndex]}
      alt="Mandiri Event"
      className="modal-image"
    />
    <button className="arrow right-arrow" onClick={nextMandiriImage}>
      &#8250;
    </button>
  </div>
</Modal>


      {/* Bagian CTA */}
      <section className="cta-section">
        <h3 className="cta-text">Give Some Snaps To</h3>
        <h4 className="cta-text">Your Brand !</h4>
        <Link to="/kontak-kami">
          <button className="cta-button">Pesan Sekarang!</button>
        </Link>
      </section>
    </div>
  );
};

export default TentangKami;