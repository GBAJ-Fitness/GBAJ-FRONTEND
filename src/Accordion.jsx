import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios'; 

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
  const { user, isAuthenticated, isLoading } = useAuth0();

  function handleSubmit(e) {
    e.preventDefault();

  

    const emailInput = "your_email_input_value"; // Replace with actual email input value
    const passwordInput = "your_password_input_value"; // Replace with actual password input value

    // Create an object with the data you want to send to the backend
    const data = {
      email: emailInput,
      password: passwordInput,
    };

    // Send a POST request to your backend
    axios
      .post("your_backend_url_here", data)
      .then((response) => {
        // Handle the response from the backend here
        console.log("Response from backend:", response.data);
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error:", error);
      });

    // Clear the input fields
    setEmailInput("");
    setPasswordInput("");
    console.log("STATE", emailInput, passwordInput);
  }
// add axios email/password input


  //   const body = { emailInput, passwordInput }; // pass this to backend in axios function
  //   setEmailInput("");
  //   setPasswordInput("");
  //   console.log("STATE", emailInput, passwordInput);
  // }
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
              <Form.Group
                onChange={({e}) => {
                  setEmailInput(e.target.value);
                }}
                className="mb-3"
                controlId="Email"
              >
              <div>
                {isAuthenticated && user.email}
                </div>
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Nutrition</Form.Label>{" "}
                <Form.Control type="text" placeholder="Nutrition" />
              </Form.Group>
              <Form.Group>
                {" "}
                <Form.Label>Days</Form.Label>
                <Form.Control type="number" placeholder="Days" />
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

// import React, { useState } from "react";
// import { Accordion, Button, Form } from "react-bootstrap";
// import { useAuth0 } from "@auth0/auth0-react";

// ... other imports ...

// export default function AccordionComponent() {
//   const [emailInput, setEmailInput] = useState("");
//   const [name, setName] = useState("");  // <-- Added this
//   const [nutrition, setNutrition] = useState("");  // <-- Added this
//   const [days, setDays] = useState("");  // <-- Added this
//   const { user, isAuthenticated, isLoading } = useAuth0();

//   function handleSubmit(e) {
//     e.preventDefault();

//     console.log({
//       email: emailInput,
//       name: name,
//       nutrition: nutrition,
//       days: days
//     });

//     // Here you can also send this data to your backend or do whatever you want with it

//     setEmailInput("");
//     setName("");  // <-- Added this
//     setNutrition("");  // <-- Added this
//     setDays("");  // <-- Added this
//   }

//   return (
//     <Accordion defaultActiveKey="0">
//       {/* ... other components ... */}
//       <Form onSubmit={handleSubmit}>
//         {/* ... other input fields ... */}

//         <Form.Group>
//           <Form.Label>Name</Form.Label>
//           <Form.Control 
//             type="text" 
//             placeholder="Name" 
//             value={name} 
//             onChange={e => setName(e.target.value)}  // <-- Added this
//           />
//         </Form.Group>
//         <Form.Group>
//           <Form.Label>Nutrition</Form.Label>
//           <Form.Control 
//             type="text" 
//             placeholder="Nutrition" 
//             value={nutrition} 
//             onChange={e => setNutrition(e.target.value)}  // <-- Added this
//           />
//         </Form.Group>
//         <Form.Group>
//           <Form.Label>Days</Form.Label>
//           <Form.Control 
//             type="number" 
//             placeholder="Days" 
//             value={days}
//             onChange={e => setDays(e.target.value)}  // <-- Added this
//           />
//         </Form.Group>

//         <Button variant="primary" type="submit">
//           Submit
//         </Button>
//       </Form>
//       {/* ... other components ... */}
//     </Accordion>
//   );
// }
