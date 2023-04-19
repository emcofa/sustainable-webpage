import React from 'react';
import './information.css';
import Lion from '../../../assets/webpage-1/lion.jpg'
import Gorilla from '../../../assets/webpage-1/gorilla.jpg'
import Butterfly from '../../../assets/webpage-1/butterfly.jpg'
import Polarbear from '../../../assets/webpage-1/polarbear.jpg'


function Information() {
    return (
        <div className="information-container">
            <h2>Information</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, dolorem asperiores quod ea odio dicta dolore dolores necessitatibus quos, sequi debitis aut et quibusdam. Aspernatur mollitia culpa aut eum iure.</p>
            <div className="image-container">
                <img src={Lion} alt="Lion" />
                <img src={Gorilla} alt="Gorilla" />
                <img src={Butterfly} alt="Butterfly" />
                <img src={Polarbear} alt="Polarbear" />
            </div>
            <div className="special-font__container">
                <p className='special-font'>Lorem ipsum</p>
                <p className='special-font'>12 3456</p>
                <p className='special-font'>Dolorem asperiores</p>
                <p className='special-font'>Aspernatur mollitia</p>
            </div>
        </div>
    );
}

export default Information;