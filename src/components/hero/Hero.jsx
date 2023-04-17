import React, { useState } from 'react';
import './hero.css'
import Lake from '../../assets/lake-unsplash.jpg'
import Sea from '../../assets/sea-unsplash.jpg'
import Nature from '../../assets/nature-unsplash.jpg'

function Hero() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="hero-container">
            <div className="hero-heading">
                <h1>Webpage 1</h1>
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
                <button onClick={() => setActiveIndex((activeIndex + 1) % 3)}>Next</button>
            </div>
        </div>
    );
}

export default Hero