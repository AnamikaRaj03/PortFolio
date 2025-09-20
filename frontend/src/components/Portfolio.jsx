import React, { useState } from 'react';
import Hero from './Hero';
import Projects from './Projects';
import Footer from './Footer';
import { mockProjects } from '../data/mockData';

const Portfolio = () => {
  const [projects] = useState(mockProjects);

  return (
    <div className="portfolio">
      <Hero />
      <Projects projects={projects} />
      <Footer />
    </div>
  );
};

export default Portfolio;