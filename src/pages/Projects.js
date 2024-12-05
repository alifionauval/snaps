import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Projects.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import projectslide1 from '../assets/projectslide1.jpg'; // Gambar 1
import projectslide2 from '../assets/projectslide2.jpg'; // Gambar 2
import projectslide3 from '../assets/projectslide3.jpg'; // Gambar 3
import projectslide4 from '../assets/projectslide4.jpg'; // Gambar 4
import projectslide5 from '../assets/projectslide5.jpg'; 
import projectslide6 from '../assets/projectslide6.jpg'; 
import projectslide7 from '../assets/projectslide7.png'; 
import projectslide8 from '../assets/projectslide8.jpg'; 
import projectslide9 from '../assets/projectslide9.jpg'; 
import projectslide10 from '../assets/projectslide10.jpg'; 
import bigproject1 from '../assets/bigproject1.jpg'; // Gambar grid project
import bigproject2 from '../assets/bigproject2.jpg'; // Gambar grid project
import bigproject3 from '../assets/bigproject3.jpg'; // Gambar grid project
import bigproject4 from '../assets/bigproject4.jpg'; // Gambar grid project
import bigproject5 from '../assets/bigproject5.jpg'; // Gambar grid project
import bigproject6 from '../assets/bigproject6.jpg'; // Gambar grid project

// Custom arrow components for next and previous
const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
        <div className={`${className} custom-arrow next-arrow`} onClick={onClick}>
            &#x203A; {/* Right arrow symbol */}
        </div>
    );
};

const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
        <div className={`${className} custom-arrow prev-arrow`} onClick={onClick}>
            &#x2039; {/* Left arrow symbol */}
        </div>
    );
};

const Projects = () => {
    const [fullscreenImage, setFullscreenImage] = useState(null); // State untuk gambar fullscreen

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Default untuk desktop
        slidesToScroll: 1,
        centerMode: true,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        autoplay: true,
        autoplaySpeed: 350,
        centerPadding: '0px',
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 768, // Atur breakpoint sesuai kebutuhan
                settings: {
                    slidesToShow: 1, // Tampilkan 1 slide pada perangkat mobile
                    slidesToScroll: 1,
                    centerMode: false, // Nonaktifkan center mode untuk mobile
                    centerPadding: '0px', // Hilangkan padding tengah
                    infinite: true,
                },
            },
        ],
    };

    const handleImageClick = (imageSrc) => {
        setFullscreenImage(imageSrc); // Set gambar fullscreen
    };

    const handleCloseFullscreen = () => {
        setFullscreenImage(null); // Reset gambar fullscreen
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                handleCloseFullscreen(); // Tutup fullscreen jika ESC ditekan
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div>
            <header className="projects-section">
    <img 
        src={require('../assets/header-desktop-project.png')} 
        alt="Header Project" 
        style={{ width: '100%', height: 'auto' }} // Make the header image responsive
    />
    <div className="explore-text">EXPLORE OUR PROJECT !</div>
</header>


            <section className="slider-section">
                <Slider {...sliderSettings}>
                    <div onClick={(e) => { e.stopPropagation(); handleImageClick(projectslide1); }}>
                        <img src={projectslide1} alt="Project 1" className="slider-image" />
                    </div>
                    <div onClick={(e) => { e.stopPropagation(); handleImageClick(projectslide2); }}>
                        <img src={projectslide2} alt="Project 2" className="slider-image" />
                    </div>
                    <div onClick={(e) => { e.stopPropagation(); handleImageClick(projectslide3); }}>
                        <img src={projectslide3} alt="Project 3" className="slider-image" />
                    </div>
                    <div onClick={(e) => { e.stopPropagation(); handleImageClick(projectslide4); }}>
                        <img src={projectslide4} alt="Project 4" className="slider-image" />
                    </div>
                    <div onClick={(e) => { e.stopPropagation(); handleImageClick(projectslide5); }}>
                        <img src={projectslide5} alt="Project 5" className="slider-image" />
                    </div>
                    <div onClick={(e) => { e.stopPropagation(); handleImageClick(projectslide6); }}>
                        <img src={projectslide6} alt="Project 6" className="slider-image" />
                    </div>
                    <div onClick={(e) => { e.stopPropagation(); handleImageClick(projectslide7); }}>
                        <img src={projectslide7} alt="Project 7" className="slider-image" />
                    </div>
                    <div onClick={(e) => { e.stopPropagation(); handleImageClick(projectslide8); }}>
                        <img src={projectslide8} alt="Project 8" className="slider-image" />
                    </div>
                    <div onClick={(e) => { e.stopPropagation(); handleImageClick(projectslide9); }}>
                        <img src={projectslide9} alt="Project 9" className="slider-image" />
                    </div>
                    <div onClick={(e) => { e.stopPropagation(); handleImageClick(projectslide10); }}>
                        <img src={projectslide10} alt="Project 10" className="slider-image" />
                    </div>
                </Slider>
            </section>

            <section className="projects-grid">
                <h2 className="grid-title">Our Projects</h2>
                <div className="grid-container">
                    <div className="grid-item" onClick={() => handleImageClick(bigproject1)}>
                        <img src={bigproject1} alt="International Launch Product SAMSUNG Z Fold6 | Z Flip6" />
                        <p>International Launch Product SAMSUNG Z Fold6 | Z Flip6</p>
                    </div>
                    <div className="grid-item" onClick={() => handleImageClick(bigproject2)}>
                        <img src={bigproject2} alt="Kapal Api Pekan Raya Jakarta" />
                        <p>Kapal Api Pekan Raya Jakarta</p>
                    </div>
                    <div className="grid-item" onClick={() => handleImageClick(bigproject3)}>
                        <img src={bigproject3} alt="KANZLER x We The Fest" />
                        <p>KANZLER x We The Fest</p>
                    </div>
                    <div className="grid-item" onClick={() => handleImageClick(bigproject4)}>
                        <img src={bigproject4} alt="SAMSUNG Galaxy S24 Series x ENHYPEN" />
                        <p>SAMSUNG Galaxy S24 Series x ENHYPEN</p>
                    </div>
                    <div className="grid-item" onClick={() => handleImageClick(bigproject5)}>
                        <img src={bigproject5} alt="SAMSUNG Head In The Clouds" />
                        <p>SAMSUNG Head In The Clouds</p>
                    </div>
                    <div className="grid-item" onClick={() => handleImageClick(bigproject6)}>
                        <img src={bigproject6} alt="SAMSUNG Galaxy S23 Studio Grand Indonesia" />
                        <p>SAMSUNG Galaxy S23 Studio Grand Indonesia</p>
                    </div>
                </div>
            </section>

            {fullscreenImage && (
                <div className="fullscreen-overlay" onClick={handleCloseFullscreen}>
                    <img src={fullscreenImage} alt="Fullscreen" className="fullscreen-image" />
                </div>
            )}

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

export default Projects;
