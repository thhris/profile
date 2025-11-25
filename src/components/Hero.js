import React from 'react'

export default function Hero() {
    return (
        <section id="hero">
            <div className="hero-background">
                <div className="glow-orb orb-1" />
                <div className="glow-orb orb-2" />
                <div className="glow-orb orb-3" />
            </div>

            <div className="hero-card">
                <h1>Full Stack Developer</h1>
                <p>Building  scalable, secure, user-centric and cloud-native applications.</p>
                <div className="button-group">
                    <a className="btn btn-primary" href="#projects">View My Work</a>
                    <a className="btn btn-secondary" href="#contact">Get in Touch</a>
                </div>
            </div>
        </section>
    )
}
