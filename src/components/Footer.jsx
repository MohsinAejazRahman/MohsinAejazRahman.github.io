import React from 'react';
import '../styles/Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Mohsin Aejaz Rahman</h3>
          <p>Software Engineer & Data Science Enthusiast</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Social</h4>
          <div className="social-links">
            <a href="https://github.com/MohsinAejazRahman" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/mohsin-aejaz-rahman" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:mohsin.ar@tum.de">Email</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Mohsin Aejaz Rahman. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
