import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-column-h2 footer-column-header">
          <h2>Footer headline</h2>
          <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit soluta doloribus aliquid molestiae rem, minima illo totam sequi? Culpa quia officiis minima doloremque velit dolore consequuntur aspernatur dolorem non praesentium!</p>
        </div>
        <div className="footer-row">
          <div className="footer-sub-container">
            <div className="footer-column footer-column-contact">
              <h2>Contact</h2>
              <p>123 45 Stockholm</p>
              <p>08-123 45 67</p>
              <p>info@example.com</p>
            </div>
            <div className="footer-column footer-column-links">
              <h2>Links</h2>
              <ul>
                <li><a href="#">Front page</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contakt</a></li>
              </ul>
            </div>
            <div className="footer-column footer-column-social">
              <h2>Social media</h2>
              <ul className="social-icons">
                <li><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-text">
        © 2023 Sustainable Webpage. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
