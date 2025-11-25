import React from 'react';
import projects from '../data/projects.json';
import ProjectCard from './ProjectCard';
import './Projects.css';

export default function Projects() {
    return (
        <section id="projects" className="section">
            <div className="section-container">
                <h2>Featured Projects</h2>
                <div className="projects-grid">
                    {projects.map((p, i) => {
                        const imgPath = p.image || '';
                        const src = `${process.env.PUBLIC_URL || ''}${imgPath.startsWith('/') ? imgPath : '/' + imgPath}`;

                        return (
                            <ProjectCard key={i} project={{ ...p, image: src }} />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
