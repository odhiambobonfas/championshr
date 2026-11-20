import React from 'react';

const Hero = () => {
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
    <section className="hero" id="home">
      <div className="hero-background">
        <img 
          src="./images/WhatsApp Image 2026-06-24 at 4.31.13 PM.jpeg" 
          alt="Champions HR Consultancy" 
          className="hero-bg-image"
          onError={(e) => {
            e.target.src = './images/hero.jpg';
          }}
        />
        <div className="hero-overlay"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">CHAMPIONS HR CONSULTANCY</h1>
          <p className="hero-subtitle">
            At Campions Human Resources Consultancy, we provide professional HR solutions that help organizations attract, develop, manage, and retain top talent. Our services are designed to support businesses of all sizes in building productive, compliant, and high-performing workforces
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary" onClick={(e) => scrollTo(e, '#contact')}>
              Get Started
            </a>
            <a href="#services" className="btn btn-secondary" onClick={(e) => scrollTo(e, '#services')}>
              Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
