import React from 'react';
import '../styles/Projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'ft_transcendence',
      description: 'Full-stack web application integrating TypeScript, NestJS, PostgreSQL, and advanced features for a complete web ecosystem.',
      technologies: ['TypeScript', 'NestJS', 'PostgreSQL', 'React'],
      link: '#',
      image: '🌐'
    },
    {
      id: 2,
      title: 'cub3d',
      description: '3D raycasting engine inspired by Wolfenstein 3D. Demonstrates graphics programming and spatial algorithms.',
      technologies: ['C', 'MiniLibX', 'Raycasting'],
      link: '#',
      image: '🎮'
    },
    {
      id: 3,
      title: 'inception',
      description: 'Docker-based infrastructure setup with NGINX, WordPress, and MariaDB. Infrastructure as Code approach.',
      technologies: ['Docker', 'Docker Compose', 'NGINX', 'WordPress'],
      link: '#',
      image: '🐳'
    },
    {
      id: 4,
      title: 'minishell',
      description: 'Custom UNIX shell in C with parsing, piping, signal handling, and built-in commands.',
      technologies: ['C', 'UNIX', 'Signals', 'Parsing'],
      link: '#',
      image: '�'
    },
    {
      id: 5,
      title: 'Philosophers',
      description: 'Multithreading and synchronization challenges solved with mutexes and semaphores. Threading mastery.',
      technologies: ['C', 'Multithreading', 'Mutexes', 'Semaphores'],
      link: '#',
      image: '🧵'
    },
    {
      id: 6,
      title: 'MazeRunnerGame',
      description: '2D maze exploration game using OOP principles. Implements collision detection, rendering, and game logic.',
      technologies: ['Java', 'OOP', 'Game Development'],
      link: '#',
      image: '🎯'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">Showcase of my recent work and experiments</p>
        
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">{project.image}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a href={project.link} className="project-link">
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
