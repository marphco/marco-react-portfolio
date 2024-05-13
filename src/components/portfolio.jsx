import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Container, Row } from 'react-bootstrap';
import "../App.css";

export const Portfolio = () => {
    useEffect(() => {
        AOS.init({
          duration : 1500 // Can be adjusted
        });
    }, []);

    return (
        <Row id="portfolio">
            <Container className="d-flex flex-column" id="projects">
                <div className="proj d-flex justify-content-center flex-column">
                    <div className="proj-title" data-aos="fade-up" data-aos-offset="300"><a href="https://github.com/marphco/pennywise" target="_blank" rel="noopener noreferrer">PENNYWISE</a></div>
                    <div className="proj-title" data-aos="fade-up" data-aos-offset="300"><a href="https://github.com/marphco/noteverse" target="_blank" rel="noopener noreferrer">NOTEVERSE</a></div>
                    <div className="proj-title" data-aos="fade-up" data-aos-offset="300"><a href="https://github.com/marphco/art-history" target="_blank" rel="noopener noreferrer">ART HISTORY</a></div>
                    <div className="proj-title" data-aos="fade-up" data-aos-offset="300"><a href="https://github.com/marphco/readme-bot" target="_blank" rel="noopener noreferrer">README BOT</a></div>
                    <div className="proj-title" data-aos="fade-up" data-aos-offset="300"><a href="https://github.com/marphco/flexi-social-api" target="_blank" rel="noopener noreferrer">FLEXI SOCIAL API</a></div>
                    <div className="proj-title" data-aos="fade-up" data-aos-offset="300"><a href="https://github.com/marphco/infini-cart" target="_blank" rel="noopener noreferrer">INFINI CART</a></div>
                    <div className="proj-title" data-aos="fade-up" data-aos-offset="300"><a href="https://github.com/marphco/employee-sync" target="_blank" rel="noopener noreferrer">EMPLOYEE SYNC</a></div>
                    <div className="proj-title" data-aos="fade-up" data-aos-offset="300"><a href="https://github.com/marphco/scribella" target="_blank" rel="noopener noreferrer">SCRIBELLA</a></div>
                    <div className="proj-title" data-aos="fade-up" data-aos-offset="300"><a href="https://github.com/marphco/svg-forge" target="_blank" rel="noopener noreferrer">SVG FORGE</a></div>
                    <div className="proj-title" data-aos="fade-up" data-aos-offset="300"><a href="https://github.com/marphco/sky-sway" target="_blank" rel="noopener noreferrer">SKY SWAY</a></div>
                </div>
            </Container>
        </Row>
    );
}

export default Portfolio;
