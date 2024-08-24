import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaYoutube, FaDiscord } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-content">
      <div className="footer-section">
        <h4>Explore</h4>
        <ul className="explore-list">
          <li><a href="/">Home</a></li>
          <li><a href="/join">Join</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </div>
      
    
      <div className="footer-section">
        <h4>Contato</h4>
        <ul className="social-media-list">
          <li>realactionhouse@mail.com</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Social Media</h4>
        <ul className="social-media-list">
          <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /> Facebook</a></li>
          <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /> Twitter</a></li>
          <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /> YouTube</a></li>
          <li><a href="https://discord.com" target="_blank" rel="noopener noreferrer"><FaDiscord /> Discord</a></li>
        </ul>
      </div>
    </div>
    
    <div className="footer-legal">
      <p>Copyright © 2024 Real Action House, LLC. All Rights Reserved.</p>
    </div>
  </footer>
  
  );
};

export default Footer;
