import { NavLink, useLocation } from "react-router-dom";
import React from "react";
import "./nav.css";
import Logo from "../../assets/logo.png";

const Nav = () => {
    const location = useLocation();
    const className =
        location.pathname === "/sustainable-webpage/2"
            ? "nav-container-two"
            : "nav-container";

    return (
        <div>
            <nav className={className}>
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
