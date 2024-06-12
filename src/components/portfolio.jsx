import React from 'react';
import 'aos/dist/aos.css';
import "../App.css";
import { Pennywise, Scribella, ProcrastinEater, ArtHistory, Panorama, SoccerIQ } from "./assets/img"; 

// Array containing details for each project
const projects = [
    {
        name: 'Panorama',
        image: `${Panorama}`,
        githubLink: 'https://github.com/marphco/virtual-art-gallery',
        liveDemo: 'https://virtual-art-gallery-panorama-35035413312c.herokuapp.com/'
    },
    {
        name: 'Pennywise',
        image: `${Pennywise}`,
        githubLink: 'https://github.com/marphco/pennywise',
        liveDemo: 'https://pennywise-ace8592b7d74.herokuapp.com/'
    },
    {
        name: 'ArtHistory',
        image: `${ArtHistory}`,
        githubLink: 'https://github.com/marphco/art-history',
        liveDemo: 'https://marphco.github.io/art-history/'
    },
    {
        name: 'Scribella',
        image: `${Scribella}`,
        githubLink: 'https://github.com/marphco/scribella',
        liveDemo: 'https://scribella-804de12279f0.herokuapp.com/'
    },
    {
        name: 'Procrastin-Eater',
        image: `${ProcrastinEater}`,
        githubLink: 'https://github.com/marphco/procrastin-eater',
        liveDemo: 'https://marphco.github.io/procrastin-eater/'
    },
    {
        name: 'SoccerIQ',
        image: `${SoccerIQ}`,
        githubLink: 'https://github.com/marphco/soccer-iq',
        liveDemo: 'https://marphco.github.io/soccer-iq/'
    },
];

const Portfolio = () => {
    return (
        <div id="portfolio">
            <div id="projects" className="row justify-content-center">
                <h2>Projects</h2>
                {projects.map((project, index) => (
                    <div key={index} className="col-md-6 col-lg-4 mb-4 proj">
                        <div className="proj-container">
                            {/* Display project image */}
                            <img
                                src={project.image}
                                alt={project.name}
                                className="img-fluid rounded"
                                style={{ maxWidth: '100%', height: 'auto' }}
                            />
                            <div className="overlay">
                                {/* Project name */}
                                <h4>{project.name}</h4>
                                <div className="buttons">
                                    {/* Button to GitHub repository */}
                                    <button onClick={() => window.open(project.githubLink, '_blank')}>GitHub</button>
                                    {/* Button to live demo */}
                                    <button onClick={() => window.open(project.liveDemo, '_blank')}>Live Demo</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
