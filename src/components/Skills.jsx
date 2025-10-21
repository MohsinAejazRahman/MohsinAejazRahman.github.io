import React from 'react';
import '../styles/Skills.css';

function Skills() {
  const skillCategories = [
    {
      category: 'Systems Programming',
      skills: ['C', 'C++', 'Assembly', 'Multithreading', 'UNIX Signals', 'Memory Management']
    },
    {
      category: 'Backend & Full-Stack',
      skills: ['Python', 'Java', 'SQL', 'Bash', 'NestJS', 'TypeScript', 'Docker']
    },
    {
      category: 'Frontend',
      skills: ['HTML', 'CSS', 'JavaScript', 'Dart/Flutter', 'React']
    },
    {
      category: 'Tools & Infrastructure',
      skills: ['Git/GitLab', 'Docker Compose', 'Makefile', 'VirtualBox', 'MATLAB', 'Linux']
    },
    {
      category: 'Data & Business',
      skills: ['Data Science', 'Machine Learning', 'Shopify', 'Klaviyo', 'Airtable']
    },
    {
      category: 'Soft Skills',
      skills: ['Problem Solving', 'System Design', 'Collaboration', 'German Communication', 'Technical Writing']
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="section-subtitle">Technologies and tools I work with</p>
        
        <div className="skills-grid">
          {skillCategories.map((cat, index) => (
            <div key={index} className="skill-category">
              <h3>{cat.category}</h3>
              <div className="skill-list">
                {cat.skills.map((skill, i) => (
                  <div key={i} className="skill-item">
                    <span className="skill-dot"></span>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-visual">
          <div className="proficiency">
            <h3>Proficiency Levels</h3>
            <div className="proficiency-bar">
              <div className="bar-item">
                <label>C/C++</label>
                <div className="bar"><div className="fill" style={{width: '95%'}}></div></div>
              </div>
              <div className="bar-item">
                <label>Python</label>
                <div className="bar"><div className="fill" style={{width: '90%'}}></div></div>
              </div>
              <div className="bar-item">
                <label>Java</label>
                <div className="bar"><div className="fill" style={{width: '85%'}}></div></div>
              </div>
              <div className="bar-item">
                <label>Systems Design</label>
                <div className="bar"><div className="fill" style={{width: '88%'}}></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
