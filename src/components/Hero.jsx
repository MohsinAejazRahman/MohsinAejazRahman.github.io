import React from 'react';
import '../styles/Hero.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Mohsin Aejaz Rahman</span>
          </h1>
          <p className="hero-subtitle">
            Software Engineer & Data Science Enthusiast
          </p>
          <p className="hero-description">
            B.Sc. Information Engineering student at TUM Campus Heilbronn & 42 School student.
            I build efficient, scalable, and robust applications with a passion for data science and machine learning.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="code-block">
            <div className="code-header">
              <span className="code-dot"></span>
              <span className="code-dot"></span>
              <span className="code-dot"></span>
            </div>
            <pre><code>{`const developer = {
  name: 'Mohsin Aejaz Rahman',
  education: ['TUM Campus Heilbronn', '42 Heilbronn'],
  skills: ['C', 'C++', 'Python', 'Java', 'Flutter'],
  passion: ['Data Science', 'Machine Learning', 'Scalable Code']
};`}</code></pre>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
