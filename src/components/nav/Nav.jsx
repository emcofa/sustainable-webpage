import { NavLink } from "react-router-dom";
import React from "react";
import "./nav.css";
import Logo from "../../assets/webpage-1/logo.png";

const Nav = () => {
    return (
        <div>
            <nav>
                <img src={Logo} alt="logo" />
                <div className="nav-links">
                    <NavLink to="/sustainable-webpage">Page 1</NavLink>
                    <NavLink to="/sustainable-webpage/2">Page 2</NavLink>
                </div>
            </nav>
        </div>
    );
};

export default Nav;
