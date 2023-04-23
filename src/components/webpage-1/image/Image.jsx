import React, { useState, useEffect } from 'react'
import Lake from '../../../assets/webpage-1/mountain.jpg'
import './image.css'

function Image() {
    const [width, setWidth] = useState('80%');
    const [height, setHeight] = useState('auto');

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const image = document.getElementById('image');
            if (image) {
                const { top, bottom } = image.getBoundingClientRect();
                const imageHeight = bottom - top;
                const heightOffset = Math.max(windowHeight - top, 0);
                const newWidth = `${80 + heightOffset / imageHeight * 20}%`;
                setWidth(newWidth);
                setHeight('auto');
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="scroll__image-container">
            <img
                id="image"
                src={Lake}
                alt="Example image"
                style={{ width: width, height: height }}
            />
            <div className="scroll__text-container">
                <h2>Lorem ipsum dolor</h2>
                <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, numquam dicta optio culpa consequatur explicabo saepe aliquam ex assumenda nesciunt labore eius facere eaque quis dolorem, amet deserunt molestias architecto?</p>
                <div className='scroll__button-container'>
                    <button className='scroll__button'>button 1</button>
                    <button className='scroll__button'>button 2</button>
                </div>
            </div>
        </div>
    )
}

export default Image
