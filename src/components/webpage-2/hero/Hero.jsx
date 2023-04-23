import React, { useState } from 'react';
import './hero.css'
import Lake from '../../../assets/webpage-1/lake-unsplash.jpg'
import Sea from '../../../assets/webpage-1/sea-unsplash.jpg'
import Nature from '../../../assets/webpage-1/nature-unsplash.jpg'

function Hero() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="hero-container">
            <div className="hero-heading">
                <h3>Lorem ipsum dolor sit amet</h3>
            </div>
            <div className="hero-container-button">
                <div className="hero-button">
                    <button className="my-button click-button">Button</button>
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
                <button className="next-button" onClick={() => setActiveIndex((activeIndex + 1) % 3)}>Next</button>
            </div>
        </div>
    );
}

export default Hero
