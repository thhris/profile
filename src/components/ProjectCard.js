import React, { useState } from 'react';

export default function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`project-card ${expanded ? 'expanded' : ''}`} onClick={() => setExpanded(!expanded)}>
      <div className="project-card-content">
        <h3>{project.title}</h3>
        <p>{project.desc}</p>
        {expanded && (
          <div>
            <p>{project.longDesc}</p>
            <div className="skills-list">
              {project.tech.map(t => <li key={t}>{t}</li>)}
            </div>
          </div>
        )}
      </div>
      <div className="project-card-image-container">
        <img src={project.image} alt={project.title} className="project-card-image" />
      </div>
      <div className="project-card-expand-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </div>
    </div>
  );
}
