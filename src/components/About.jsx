import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a Bachelor of Science student in Information Engineering at TUM Campus Heilbronn 
              and simultaneously studying at 42 Heilbronn. My journey combines rigorous academic training 
              with hands-on software development experience.
            </p>
            <p>
              I'm passionate about data science, machine learning, and developing efficient, scalable, and robust code 
              that bridges theory with real-world applications. Whether it's building complex systems or solving algorithmic challenges, 
              I approach every project with precision and creativity.
            </p>
            <p>
              My experience spans low-level systems programming, full-stack web development, mobile app development with Flutter, 
              and data science applications in Python. I thrive in collaborative environments and am committed to continuous learning 
              and professional growth.
            </p>
            <div className="about-stats">
              <div className="stat">
                <h3>2+</h3>
                <p>Years Learning (42 + TUM)</p>
              </div>
              <div className="stat">
                <h3>15+</h3>
                <p>Major Projects</p>
              </div>
              <div className="stat">
                <h3>10+</h3>
                <p>Tech Stacks</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="placeholder-image">
              <div className="image-grid"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
