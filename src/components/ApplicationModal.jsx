import React, { useState } from 'react';

const ApplicationModal = ({ isOpen, onClose, position, type = 'job' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '3-5 years',
    coverNote: '',
    company: '',
    serviceInterest: 'Recruitment & Talent Acquisition'
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 3000);
    }, 1100);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <span className="material-symbols-outlined sm">close</span>
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <div style={{ color: '#16a34a', marginBottom: '1rem' }}>
              <span className="material-symbols-outlined xl" style={{ fontSize: '4rem' }}>check_circle</span>
            </div>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '0.75rem', color: 'var(--secondary)', fontFamily: 'Oswald, sans-serif' }}>
              {type === 'job' ? 'Application Submitted!' : 'Consultation Scheduled!'}
            </h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, fontSize: '1rem' }}>
              Thank you, <strong>{formData.name}</strong>. The Champions HR executive team will review your details and contact you at <strong>{formData.email}</strong> promptly.
            </p>
          </div>
        ) : (
          <div>
            <div className="modal-header">
              <div className="section-badge" style={{ marginBottom: '0.5rem' }}>
                <span className="material-symbols-outlined sm">
                  {type === 'job' ? 'work' : 'support_agent'}
                </span>
                {type === 'job' ? 'Direct Application' : 'Executive Advisory'}
              </div>
              <h3>
                {type === 'job' 
                  ? `Apply for ${position?.title || 'Open Position'}` 
                  : 'Schedule an HR Consultation'}
              </h3>
              <p>
                {type === 'job' 
                  ? `Location: ${position?.location || 'Nairobi, Kenya'} &bull; Full-time engagement` 
                  : 'Discuss your workforce challenges, executive recruitment, or compliance audits with our senior consultants.'}
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <div className="input-with-icon">
                  <span className="material-symbols-outlined sm input-icon">person</span>
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    placeholder="Full Name" 
                    required 
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="input-with-icon">
                  <span className="material-symbols-outlined sm input-icon">mail</span>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="Email Address" 
                    required 
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="input-with-icon">
                  <span className="material-symbols-outlined sm input-icon">call</span>
                  <input 
                    type="tel" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    placeholder="Phone Number (e.g. +254 700 000 000)" 
                    required 
                  />
                </div>
              </div>

              {type === 'job' ? (
                <>
                  <div className="form-group">
                    <div className="input-with-icon">
                      <span className="material-symbols-outlined sm input-icon">badge</span>
                      <select 
                        name="experience" 
                        value={formData.experience} 
                        onChange={handleChange}
                      >
                        <option value="Entry Level (0-2 years)">Entry Level (0-2 years experience)</option>
                        <option value="Mid Level (3-5 years)">Mid Level (3-5 years experience)</option>
                        <option value="Senior Level (5-8 years)">Senior Level (5-8 years experience)</option>
                        <option value="Executive Level (8+ years)">Executive Level (8+ years experience)</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea 
                      name="coverNote" 
                      value={formData.coverNote} 
                      onChange={handleChange} 
                      placeholder="Brief summary of your professional background, qualifications, and suitability..." 
                      rows="4" 
                      required 
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="form-group">
                    <div className="input-with-icon">
                      <span className="material-symbols-outlined sm input-icon">business</span>
                      <input 
                        type="text" 
                        name="company" 
                        value={formData.company} 
                        onChange={handleChange} 
                        placeholder="Organization / Company Name" 
                        required 
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-with-icon">
                      <span className="material-symbols-outlined sm input-icon">category</span>
                      <select 
                        name="serviceInterest" 
                        value={formData.serviceInterest} 
                        onChange={handleChange}
                      >
                        <option value="Recruitment & Talent Acquisition">Recruitment & Talent Acquisition</option>
                        <option value="Executive Search & Headhunting">Executive Search & Headhunting</option>
                        <option value="HR Outsourcing Services">HR Outsourcing Services</option>
                        <option value="Performance Management Systems">Performance Management Systems</option>
                        <option value="HR Compliance & Labor Law Advisory">HR Compliance & Labor Law Advisory</option>
                        <option value="Payroll Administration Support">Payroll Administration Support</option>
                        <option value="HR Audits & Workforce Planning">HR Audits & Workforce Planning</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea 
                      name="coverNote" 
                      value={formData.coverNote} 
                      onChange={handleChange} 
                      placeholder="Describe your organization's specific challenges or requirements..." 
                      rows="4" 
                    />
                  </div>
                </>
              )}

              <button 
                type="submit" 
                className="btn btn-primary" 
                style={{ width: '100%', background: 'var(--primary)', color: '#ffffff' }}
                disabled={submitting}
              >
                <span className="material-symbols-outlined sm">
                  {submitting ? 'sync' : 'task_alt'}
                </span>
                <span>{submitting ? 'Submitting...' : (type === 'job' ? 'Submit Application' : 'Book Consultation')}</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApplicationModal;
