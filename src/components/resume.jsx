import React from "react";
import { Container, Row, Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import resume from './assets/documents/Resume.pdf';

import {
    Resume2,
    Github,
    Linkedin,
  } from "./assets/img";
  

const Resume = () => {

    const handleDownloadResume = () => {
        window.open(resume);
    };


    return(
        <Row id="resume">
            <Container className="resume-block d-flex justify-content-center w-100">
            <img className="resume-avatar" src={Resume2}></img>
            <Button className="resume-button" onClick={handleDownloadResume}>
    Download my Resume
</Button>

            </Container>

<Container className="d-flex justify-content-center w-100">
<span className="social-icon">
                  <a href="https://github.com/marphco" target="_blank">
                    <img id="github" src={Github} alt="GitHub" />
                  </a>
                  <a href="https://www.linkedin.com/in/marco-franco/"  target="_blank">
                    <img id="linkedin" src={Linkedin} alt="LinkedIn" />
                  </a>
              </span>
</Container>
            

        </Row>
    )
  }

export default Resume