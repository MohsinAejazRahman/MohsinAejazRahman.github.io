import React, { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
    alert('Message sent! Thanks for reaching out.');
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Let's collaborate and create something amazing</p>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>I'm always interested in collaborating on innovative projects and exploring new opportunities in software development and data science. Feel free to reach out!</p>
            
            <div className="contact-methods">
              <div className="method">
                <span className="icon">📧</span>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:mohsin.ar@tum.de">mohsin.ar@tum.de</a>
                </div>
              </div>
              
              <div className="method">
                <span className="icon">💼</span>
                <div>
                  <h4>LinkedIn</h4>
                  <a href="https://linkedin.com/in/mohsin-aejaz-rahman" target="_blank" rel="noopener noreferrer">linkedin.com/in/mohsin-aejaz-rahman</a>
                </div>
              </div>
              
              <div className="method">
                <span className="icon">🐙</span>
                <div>
                  <h4>GitHub</h4>
                  <a href="https://github.com/MohsinAejazRahman" target="_blank" rel="noopener noreferrer">github.com/MohsinAejazRahman</a>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Your message here..."
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
