import { NavLink } from "react-router-dom";
import React from "react";
import "./nav.css";
import Logo from "../../assets/logo.png";

const Nav = () => {
    return (
        <div>
            <div className="nav__above">
                <p>This is the template for webpage 1</p>
            </div>
            <nav>
                <img src={Logo} alt="logo" />
                <div className="nav-links">
                    <NavLink to="/">Page 1</NavLink>
                    <NavLink to="/2">Page 2</NavLink>
                </div>
            </nav>
        </div>
    );
};

export default Nav;
