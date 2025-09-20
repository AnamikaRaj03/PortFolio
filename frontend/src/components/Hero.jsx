import React from 'react';
import { Button } from './ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const skills = ['ReactJS', 'Node.js', 'Express.js', 'MongoDB', 'C/C++', 'JavaScript'];

  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-intro">
            <h1 className="hero-name">
              Anamika Raj
            </h1>
            <p className="hero-title mono">
              &lt;MERN Stack Developer /&gt;
            </p>
          </div>
          
          <div className="hero-bio">
            <p>
              Crafting scalable web solutions with modern technologies. 
              Specialized in full-stack development, turning complex problems 
              into elegant, efficient code.
            </p>
          </div>

          <div className="hero-skills">
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <span key={index} className="skill-tag mono">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="hero-actions">
            <Button 
              onClick={scrollToProjects}
              className="cta-primary"
            >
              View Projects
            </Button>
            
            <div className="social-links">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <Linkedin size={20} />
              </a>
              <a href="mailto:anamikaraj038@gmail.com" className="social-link">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="code-block">
            <div className="code-header">
              <div className="window-controls">
                <span className="control red"></span>
                <span className="control yellow"></span>
                <span className="control green"></span>
              </div>
              <span className="file-name mono">developer.js</span>
            </div>
            <div className="code-content mono">
              <div className="code-line">
                <span className="line-number">1</span>
                <span className="keyword">const</span> <span className="variable">developer</span> <span className="operator">=</span> <span className="punctuation">&#123;</span>
              </div>
              <div className="code-line">
                <span className="line-number">2</span>
                <span className="property">  name:</span> <span className="string">'Anamika Raj'</span><span className="punctuation">,</span>
              </div>
              <div className="code-line">
                <span className="line-number">3</span>
                <span className="property">  stack:</span> <span className="string">'MERN'</span><span className="punctuation">,</span>
              </div>
              <div className="code-line">
                <span className="line-number">4</span>
                <span className="property">  passion:</span> <span className="string">'Building Solutions'</span><span className="punctuation">,</span>
              </div>
              <div className="code-line">
                <span className="line-number">5</span>
                <span className="property">  status:</span> <span className="string">'Ready to Code'</span>
              </div>
              <div className="code-line">
                <span className="line-number">6</span>
                <span className="punctuation">&#125;;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;