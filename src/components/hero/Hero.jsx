import React, { useState } from 'react';
import './hero.css';
import Lake from '../../assets/lake-unsplash.jpg';
import Sea from '../../assets/sea-unsplash.jpg';
import Nature from '../../assets/nature-unsplash.jpg';
import Svg from '../../assets/bouncing-svg.svg';

function Hero() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [showPopup, setShowPopup] = useState(false);

    const handleButtonClick = () => {
        setShowPopup(true);
    };

    const handlePopupClose = () => {
        setShowPopup(false);
    };

    return (
        <div className="hero-container">
            <div className="hero-heading">
                <h3>Lorem ipsum dolor sit amet</h3>
                <div className="svg-container">
                    <img src={Svg} alt="SVG 1" className="moving__svg" />
                </div>
            </div>
            <div className="hero-container-button">
                <div className="hero-button">
                    <button className="my-button" onClick={handleButtonClick}>
                        Button
                    </button>
                </div>
            </div>
            <div className="hero-gallery">
                <img
                    src={Lake}
                    alt="First Image"
                    className={activeIndex === 0 ? "active" : ""}
                />
                <img
                    src={Sea}
                    alt="Second Image"
                    className={activeIndex === 1 ? "active" : ""}
                />
                <img
                    src={Nature}
                    alt="Third Image"
                    className={activeIndex === 2 ? "active" : ""}
                />
                <button
                    className="next-button"
                    onClick={() => setActiveIndex((activeIndex + 1) % 3)}
                >
                    Next
                </button>
            </div>
            {showPopup && (
                <div className="popup-container">
                    <div className="popup">
                        <h2>Popup Window</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolores voluptatem velit tempora minus ipsa libero, ut animi sed perspiciatis culpa ipsam similique quae. Voluptatibus illo quia similique! Vero, natus.</p>
                        <button className="popup-close-button" onClick={handlePopupClose}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Hero;