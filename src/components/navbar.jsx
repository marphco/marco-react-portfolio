import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import {
  About,
  Portfolio,
  Contact,
  Resume,
  Linkedin,
  Github,
} from "./assets/img";

const PortfolioNavbar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const updateMedia = () => {
      setIsMobile(window.innerWidth < 992);
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", updateMedia);
    updateMedia();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateMedia);
    };
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <>
      {isMobile ? (
        <Navbar fixed="bottom" expand="lg" className="mobile-navbar">
          <Nav className="w-100 d-flex justify-content-center flex-row navbar-nav">
            <Nav.Item className="nav-item justify-content-around">
              <Nav.Link
                href="#about"
                className={activeLink === "about" ? "active" : ""}
                onClick={() => setActiveLink("about")}
              >
                <img src={About} alt="About Me" />
                <div>About Me</div>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item justify-content-around">
              <Nav.Link
                href="#portfolio"
                className={activeLink === "portfolio" ? "active" : ""}
                onClick={() => setActiveLink("portfolio")}
              >
                <img src={Portfolio} alt="Portfolio" />
                <div>Portfolio</div>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item justify-content-around">
              <Nav.Link
                href="#contact"
                className={activeLink === "contact" ? "active" : ""}
                onClick={() => setActiveLink("contact")}
              >
                <img src={Contact} alt="Contact" />
                <div>Contact</div>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item justify-content-around">
              <Nav.Link
                href="#resume"
                className={activeLink === "resume" ? "active" : ""}
                onClick={() => setActiveLink("resume")}
              >
                <img src={Resume} alt="Resume" />
                <div>Resume</div>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar>
      ) : (
        <Navbar
          id="desktop-nav"
          expand="lg"
          className={scrolled ? "scrolled" : "nav"}
        >
          <Container fluid>
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link
                  href="#about"
                  className={
                    activeLink === "about"
                      ? "active navbar-link"
                      : "navbar-link"
                  }
                  onClick={() => onUpdateActiveLink("about")}
                >
                  About me
                </Nav.Link>
                <Nav.Link
                  href="#portfolio"
                  className={
                    activeLink === "portfolio"
                      ? "active navbar-link"
                      : "navbar-link"
                  }
                  onClick={() => onUpdateActiveLink("portfolio")}
                >
                  Portfolio
                </Nav.Link>
                <Nav.Link
                  href="#contact"
                  className={
                    activeLink === "Contact"
                      ? "active navbar-link"
                      : "navbar-link"
                  }
                  onClick={() => onUpdateActiveLink("Contact")}
                >
                  Contact
                </Nav.Link>
                <Nav.Link
                  href="#resume"
                  className={
                    activeLink === "resume"
                      ? "active navbar-link"
                      : "navbar-link"
                  }
                  onClick={() => onUpdateActiveLink("resume")}
                >
                  Resume
                </Nav.Link>
              </Nav>
              <span className="navbar-text">
                <div className="social-icon">
                  <a href="https://github.com/marphco" target="_blank">
                    <img id="github" src={Github} alt="GitHub" />
                  </a>
                  <a href="https://www.linkedin.com/in/marco-franco/"  target="_blank">
                    <img id="linkedin" src={Linkedin} alt="LinkedIn" />
                  </a>
                </div>
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
    </>
  );
};

export default PortfolioNavbar;
