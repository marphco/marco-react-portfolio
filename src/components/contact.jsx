import React, { useRef, useState } from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import "../App.css";
import { ContactAvatar } from './assets/img'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import emailjs from '@emailjs/browser';

const Result = () => {
    return(
        <p>Your message has been sent successfully!</p>
    )
}

export const Contact = () => {

    const [result, showResult] = useState(false)

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_zhkz76w', 'template_ag6gvqu', form.current, {
        publicKey: 'ARJvD0-KrpfKdOpze',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset()
      showResult(true)
  };

    return(
        <Row id="contact">
    <Container id="form-block">
      <h2>Get in Touch!<span><img src={ContactAvatar}></img></span></h2>
      <Form ref={form} onSubmit={sendEmail}>
      <FloatingLabel controlId="floatingName" label="Name" className="mb-3">
        <Form.Control type="text" placeholder="Name" name="from_name" required />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingEmail"
        label="Email"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" name="reply_to" required />
      </FloatingLabel>

      <FloatingLabel controlId="floatingTextarea2" label="Message">
        <Form.Control
          as="textarea"
          placeholder="Leave your message here"
          style={{ height: '200px' }}
          className="mb-3"
          name="message"
          required
        />
      </FloatingLabel>

      <Button as="input" type="submit" value="Send Message!" className="form-button"/>{' '}

        <Row>
            {result ? <Result/> : null}
        </Row>

      </Form>

    </Container>
    </Row>
    )
}

export default Contact