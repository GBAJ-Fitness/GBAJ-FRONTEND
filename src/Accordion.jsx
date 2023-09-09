import React, { useState } from "react";
import {
  Accordion,
  Button,
  Card,
  Form,
  useAccordionButton,
} from "react-bootstrap";

export default function AccordionComponent() {
    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");

    function handleSubmit (e) {
        e.preventDefault();

        // add axios email/password input 
         const body = {emailInput, passwordInput} // pass this to backend in axios function 
        setEmailInput ("");
        setPasswordInput ("");
        console.log("STATE", emailInput, passwordInput)
    }
  return (
    <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header>
          <CustomToggle eventKey="1">Click me!</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            {" "}
            <Form onSubmit={handleSubmit}>
              <Form.Group onChange={(e) => {
                setEmailInput(e.target.value)
              }} className="mb-3" controlId="Email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group onChange={(e) => {
                setPasswordInput(e.target.value)
              }} className="mb-3" controlId="Password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("totally custom!")
  );

  return (
    <Button onClick={decoratedOnClick} variant="primary">
      {children}
    </Button>
  );
}
