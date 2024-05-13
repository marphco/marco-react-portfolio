import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row } from "react-bootstrap";
import "../App.css";
import { Skills } from './assets/img'

import { Css, Html, Js, React, Heroku, Github2, Adobe, Figma, Illustrator, Indesign, Markdown, Mongodb, Mysql, Npm, Photoshop } from "./assets/img";

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };


export const About = () => {
  return (
    <Row id="about">
      <Container
        id="main"
        className="align-items-center d-flex justify-content-center flex-wrap"
      >
        <Container>
            <h2>Get to know me</h2>
          <p>
            Greetings from NYC 🗽! I'm an Italian designer and developer who
            swapped Italian coasts for cityscapes in 2021. With a graphic and
            web design degree and leadership experience at a top PR agency in
            Italy, I'm now diving into new challenges in New York. Combining
            humor with professionalism, I’m here to blend my coding skills with creative flair.<br/>Let's create something exceptional together! 🚀
          </p>
        </Container>
      </Container>
      
      <img src={ Skills }></img>

    <Container id="skills">
      <h3>Skills</h3>
    <Carousel
    responsive={responsive}
    autoPlay={true}
    autoPlaySpeed={2000}
    infinite={true}
    removeArrowOnDeviceType={["tablet", "mobile"]}>
  <img src={React}></img>
  <img src={Js}></img>
  <img src={Github2}></img>
  <img src={Heroku}></img>
  <img src={Npm}></img>
  <img src={Mysql}></img>
  <img src={Mongodb}></img>
  <img src={Html}></img>
  <img src={Css}></img>
  <img src={Figma}></img>
  <img src={Adobe}></img>
  <img src={Illustrator}></img>
  <img src={Indesign}></img>
  <img src={Photoshop}></img>
  <img src={Markdown}></img>
</Carousel>
    </Container>



    </Row>


  );
};

export default About;