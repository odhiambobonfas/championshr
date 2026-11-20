import React from 'react';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">Executive Insight</h2>
            <p className="about-description">
              At Champions HR Consultancy, we understand that every successful business is built on its people. That's why we are passionate about helping organizations find, develop, and retain the right talent. We believe that when employees are empowered, supported, and aligned with business goals, both individuals and organizations thrive. Our team works closely with clients to provide practical, people-centered HR solutions that drive performance, strengthen workplace culture, and support long-term growth. We are more than HR consultants—we are trusted partners committed to helping businesses unlock the full potential of their people.
            </p>
          </div>
          <div className="about-image">
            <div className="about-image-placeholder">
              <svg width="400" height="300" viewBox="0 0 400 300" fill="none">
                <rect width="400" height="300" fill="#f1f5f9" />
                <circle cx="200" cy="150" r="80" fill="#e2e8f0" />
                <rect x="100" y="100" width="200" height="100" rx="8" fill="#cbd5e1" />
                <rect x="120" y="120" width="160" height="60" rx="4" fill="#94a3b8" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
