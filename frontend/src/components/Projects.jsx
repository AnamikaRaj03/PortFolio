import React, { useState } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { Github, ExternalLink } from 'lucide-react';

const Projects = ({ projects }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const categories = ['All', 'Full Stack', 'Frontend', 'Backend'];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="section-title">
            Selected Works
          </h2>
          <p className="section-subtitle">
            A curated collection of projects showcasing technical expertise and problem-solving approach.
          </p>
        </div>

        <div className="filter-tabs">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? "default" : "outline"}
              onClick={() => setActiveFilter(category)}
              className={`filter-tab ${activeFilter === category ? 'active' : ''}`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="project-card">
              <div className="project-header">
                <div className="project-meta">
                  <h3 className="project-title">{project.title}</h3>
                  <Badge variant="secondary" className="category-badge mono">
                    {project.category}
                  </Badge>
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <Github size={16} />
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
              
              <p className="project-description">
                {project.description}
              </p>
              
              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag mono">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="project-features">
                <ul>
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;