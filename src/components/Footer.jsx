import React from 'react';

const Footer = () => {
  const scrollTo = (e, id) => {
    e.preventDefault();
    const target = document.querySelector(id);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>CHAMPIONS <span className="highlight">HR</span> LIMITED</h3>
            <p>Empowering businesses to achieve excellence through strategic insight and innovative solutions.</p>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home" onClick={(e) => scrollTo(e, '#home')}>Home</a></li>
              <li><a href="#services" onClick={(e) => scrollTo(e, '#services')}>Services</a></li>
              <li><a href="#about" onClick={(e) => scrollTo(e, '#about')}>About</a></li>
              <li><a href="#contact" onClick={(e) => scrollTo(e, '#contact')}>Contact</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Services</h4>
            <ul>
              <li><a href="#services" onClick={(e) => scrollTo(e, '#services')}>Strategic Planning</a></li>
              <li><a href="#services" onClick={(e) => scrollTo(e, '#services')}>Digital Transformation</a></li>
              <li><a href="#services" onClick={(e) => scrollTo(e, '#services')}>Financial Advisory</a></li>
              <li><a href="#services" onClick={(e) => scrollTo(e, '#services')}>Process Optimization</a></li>
            </ul>
          </div>
          <div className="footer-social">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#" aria-label="LinkedIn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Champions HR Consultancy Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
