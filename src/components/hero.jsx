import { Container, Row, Col } from "react-bootstrap";
import {Avatar} from "./assets/img" 

export const Hero = () => {
  return (
    <section className="hero" id="home">
      <Container>
        <Row id="hero" className="align-items-center d-flex justify-content-center flex-wrap">
        <Col xs={12} md={12} xl={6}>
            <img src={ Avatar } className="avatar"></img>
        </Col> 
          <Col xs={12} md={12} xl={6}>
            <h1>
              Hi There! <span className="wave" role="img" aria-labelledby="wave">
                👋🏻
              </span>
              <br/>
              <span>I'm </span><span className="marco">Marco </span>
            </h1>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;