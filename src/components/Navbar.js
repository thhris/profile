import React from 'react'

export default function Navbar() {
    return (
        <header>
            <div className="logo">Teodor Hristoforov</div>
            <nav className="nav-links" aria-label="Main navigation">
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#skills">Skills</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    )
}
