import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      setScrolled(currentScroll > 40);

      const sectionIds = ['home', 'services', 'who-we-are', 'about', 'why-choose', 'team', 'careers', 'contact'];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - 120;
          const height = el.offsetHeight;
          if (currentScroll >= top && currentScroll < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
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
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`} id="navbar">
      <div className="container">
        <div className="nav-brand">
          <a href="#home" onClick={(e) => scrollTo(e, '#home')}>
            <h2>CHAMPIONS <span className="highlight">HR</span> LIMITED</h2>
          </a>
        </div>
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`} id="nav-menu">
          <li><a href="#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} onClick={(e) => scrollTo(e, '#home')}>Home</a></li>
          <li><a href="#services" className={`nav-link ${activeSection === 'services' ? 'active' : ''}`} onClick={(e) => scrollTo(e, '#services')}>Services</a></li>
          <li><a href="#who-we-are" className={`nav-link ${activeSection === 'who-we-are' ? 'active' : ''}`} onClick={(e) => scrollTo(e, '#who-we-are')}>Who We Are</a></li>
          <li><a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} onClick={(e) => scrollTo(e, '#about')}>Executive Insight</a></li>
          <li><a href="#why-choose" className={`nav-link ${activeSection === 'why-choose' ? 'active' : ''}`} onClick={(e) => scrollTo(e, '#why-choose')}>Why Choose Us</a></li>
          <li><a href="#team" className={`nav-link ${activeSection === 'team' ? 'active' : ''}`} onClick={(e) => scrollTo(e, '#team')}>Team</a></li>
          <li><a href="#careers" className={`nav-link ${activeSection === 'careers' ? 'active' : ''}`} onClick={(e) => scrollTo(e, '#careers')}>Careers</a></li>
          <li><a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} onClick={(e) => scrollTo(e, '#contact')}>Contact</a></li>
        </ul>
        <button 
          className={`nav-toggle ${isOpen ? 'open' : ''}`} 
          id="nav-toggle"
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
