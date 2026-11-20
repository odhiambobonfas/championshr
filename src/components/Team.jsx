import React from 'react';

const Team = () => {
  return (
    <section className="team" id="team">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Team</h2>
          <p className="section-subtitle">Meet the experts behind our success</p>
        </div>
        <div className="team-grid">
          <div className="team-card">
            <div className="team-image">
              <svg width="150" height="150" viewBox="0 0 150 150" fill="none">
                <circle cx="75" cy="75" r="75" fill="#e2e8f0" />
                <circle cx="75" cy="60" r="30" fill="#94a3b8" />
                <path d="M25 130 Q75 90 125 130" fill="#94a3b8" />
              </svg>
            </div>
            <h3 className="team-name">Kevin Chahenza</h3>
            <p className="team-role">CEO</p>
            <p className="team-bio">Leading Champions HR Consultancy with vision and expertise in human resources management</p>
          </div>

          <div className="team-card">
            <div className="team-image">
              <svg width="150" height="150" viewBox="0 0 150 150" fill="none">
                <circle cx="75" cy="75" r="75" fill="#e2e8f0" />
                <circle cx="75" cy="60" r="30" fill="#94a3b8" />
                <path d="M25 130 Q75 90 125 130" fill="#94a3b8" />
              </svg>
            </div>
            <h3 className="team-name">Kallah Stephen Nzyoka</h3>
            <p className="team-role">Managing Director</p>
            <p className="team-bio">Expert in strategic operations and organizational development</p>
          </div>

          <div className="team-card">
            <div className="team-image">
              <svg width="150" height="150" viewBox="0 0 150 150" fill="none">
                <circle cx="75" cy="75" r="75" fill="#e2e8f0" />
                <circle cx="75" cy="60" r="30" fill="#94a3b8" />
                <path d="M25 130 Q75 90 125 130" fill="#94a3b8" />
              </svg>
            </div>
            <h3 className="team-name">Antony Kimani</h3>
            <p className="team-role">Lead Recruiter</p>
            <p className="team-bio">Specialist in talent acquisition and recruitment strategies</p>
          </div>

          <div className="team-card">
            <div className="team-image">
              <svg width="150" height="150" viewBox="0 0 150 150" fill="none">
                <circle cx="75" cy="75" r="75" fill="#e2e8f0" />
                <circle cx="75" cy="60" r="30" fill="#94a3b8" />
                <path d="M25 130 Q75 90 125 130" fill="#94a3b8" />
              </svg>
            </div>
            <h3 className="team-name">Khama Chiama</h3>
            <p className="team-role">IT Manager</p>
            <p className="team-bio">Expert in technology solutions and digital infrastructure</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
