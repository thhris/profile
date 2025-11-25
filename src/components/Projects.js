import React from 'react';
import projects from '../data/projects.json';
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
                            <article key={i} className="project-card">
                                <div className="project-image-wrap">
                                    <img src={src} alt={p.title} className="project-image" />
                                </div>
                                <div className="project-content">
                                    <h3>{p.title}</h3>
                                    <p>{p.desc}</p>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
