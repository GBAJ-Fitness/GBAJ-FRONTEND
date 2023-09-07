// import React from 'react';

// class Forms extends React.Component {
//   render() {
//     return (
//       <div>Forms</div>
//     )
//   }
// }

// export default Forms;

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BasicExample() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="name" placeholder="First & Last Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicBirthDate">
        <Form.Label>Birth Date</Form.Label>
        <Form.Control type="name" placeholder="Birthdate" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicFullAddress">
        <Form.Label>Full Address</Form.Label>
        <Form.Control type="name" placeholder="Full Address" />
        </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default BasicExample;