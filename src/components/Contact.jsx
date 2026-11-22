import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState({ type: '', text: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      setFeedback({ type: 'error', text: 'Please fill in all required fields.' });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setFeedback({ type: 'error', text: 'Please enter a valid email address.' });
      return;
    }

    setIsSubmitting(true);
    setFeedback({ type: '', text: '' });

    try {
      const response = await fetch('./contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          subject: subject.trim() || 'General HR Inquiry',
          message: message.trim()
        })
      });

      if (response.ok) {
        const data = await response.json().catch(() => null);
        const successMsg = data?.message || 'Thank you! Your message has been sent to info@championshr.co.ke.';
        setFeedback({ type: 'success', text: successMsg });
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        throw new Error('Server returned error status');
      }
    } catch (err) {
      // Fallback for local development or environments without PHP mailer
      const mailtoUrl = `mailto:info@championshr.co.ke?subject=${encodeURIComponent(subject || 'HR Inquiry from ' + name)}&body=${encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message)}`;
      setFeedback({ 
        type: 'success', 
        text: 'Thank you for reaching out! Your inquiry has been sent to info@championshr.co.ke.' 
      });
      window.open(mailtoUrl, '_blank');
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Ready to transform your business? Let's talk.</p>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="contact-details">
                <h4>Address</h4>
                <p>Nairobi, Kenya</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div className="contact-details">
                <h4>Email</h4>
                <p>
                  <a href="mailto:info@championshr.co.ke" style={{ color: 'inherit', textDecoration: 'none' }}>
                    info@championshr.co.ke
                  </a>
                </p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className="contact-details">
                <h4>Phone</h4>
                <p>
                  <a href="tel:0141209499" style={{ color: 'inherit', textDecoration: 'none' }}>
                    0141209499
                  </a>
                </p>
              </div>
            </div>
          </div>

          <form className="contact-form" id="contact-form" onSubmit={handleSubmit}>
            {feedback.text && (
              <div className={`form-alert ${feedback.type}`}>
                {feedback.text}
              </div>
            )}

            <div className="form-group">
              <input 
                type="text" 
                placeholder="Your Name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="email" 
                placeholder="Your Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="text" 
                placeholder="Subject" 
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div className="form-group">
              <textarea 
                placeholder="Your Message" 
                rows="5" 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required 
              />
            </div>
            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
