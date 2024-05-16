import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Container, Row } from 'react-bootstrap';
import "../App.css";
import {Pennywise, Scribella, ProcrastinEater, ArtHistory} from "./assets/img" 


// useEffect(() => {
//     AOS.init({
//       duration : 1500 // Can be adjusted
//     });
// }, []);


const projects = [
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
  ];

  const Portfolio = () => {
  return (
    <div id="portfolio">
      <div id="projects" className="row justify-content-center">
        <h2>Projects</h2>
        {projects.map((project, index) => (
          <div key={index} className="col-md-6 col-lg-4 mb-4 proj">
            <div className="proj-container">
              <img
                src={project.image}
                alt={project.name}
                className="img-fluid rounded"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
              <div className="overlay">
                <h4>{project.name}</h4>
                <div className="buttons">
                  <button onClick={() => window.open(project.githubLink, '_blank')}>GitHub</button>
                  <button onClick={() => window.open(project.liveDemo, '_blank')}>Live Demo</button> {/* Adjust this button's functionality as needed */}
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