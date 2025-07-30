import React, { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import '../main.css';
import Img from "../assets/img/fallback-food.jpg";
import vid from "../assets/videos/video2.mp4";

const Hero = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handlePlayClick = () => setIsVideoOpen(true);
  const closeVideo = () => setIsVideoOpen(false);

  return (
    <>
      <section className="hero section dark-background" id="hero">
        <img src={Img} alt="Hero Background" />

        <div className="container">
          <div className="row">
            <div className="col-lg-8 d-flex flex-column align-items-center align-items-lg-start">
              <h2><span>Baked Fresh. Served Fast. Loved Always.</span></h2>
              <p>فطاير_تايم_ببساطة_اختصاص#</p>
              <div className="d-flex mt-4">
                <a href="#menu" className="cta-btn">Our Menu</a>
                <a href="https://www.bistroo.nl/voorburg/restaurants/fatayer-time?utm_source=fatayer-time&utm_medium=bestelknop" className="cta-btn">Online Bestellen</a>
              </div>
            </div>

            <div className="col-lg-4 d-flex align-items-center justify-content-center mt-5 mt-lg-0">
              <button
                className="pulsating-play-btn"
                onClick={handlePlayClick}
                aria-label="Play video"
              >
                <FaPlay />
              </button>
            </div>
          </div>
        </div>
      </section>

      {isVideoOpen && (
        <div className="video-overlay" onClick={closeVideo}>
          <div className="video-container" onClick={(e) => e.stopPropagation()}>
            <video controls autoPlay>
              <source src={vid} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <button className="close-btn" onClick={closeVideo}>×</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
