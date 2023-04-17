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
          <a href="#">Page 1</a>
          <a href="#">Page 2</a>
        </div>
      </nav>

    </div>
  )
}

export default Nav