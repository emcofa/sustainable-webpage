import React from 'react'
import './nav.css'
import Logo from '../../assets/logo.png'

const Nav = () => {
    return (
        <div>
            <div className="nav__above">
                <p>This is the template for webpage 1</p>
            </div>
            <nav>
                <img src={Logo} alt="logo" />
                <div className="nav-links">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </div>
            </nav>
        </div>
    );
};

export default Nav;
