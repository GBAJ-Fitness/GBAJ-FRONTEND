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
      <Row className="mb-3">
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="name" placeholder="First & Last Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicBirthDate">
        <Form.Label>Birth Date</Form.Label>
        <Form.Control type="birthdate" placeholder="Birthdate" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>
        

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>


        <Form.Group className="mb-3" controlId="formBasicGender">
        <Form.Label>Gender</Form.Label>
        <Form.Control type="name" placeholder="Male or Female" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="gender" placeholder="Phone Number" />
        </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We will never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Sign Me Up" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default BasicExample;