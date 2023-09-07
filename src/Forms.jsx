






//         <Form.Group className="mb-3" controlId="formGridAddress1">
//         <Form.Label>Address</Form.Label>
//         <Form.Control placeholder="1234 Main St" />
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formGridAddress2">
//         <Form.Label>Address 2</Form.Label>
//         <Form.Control placeholder="Apartment, studio, or floor" />
//       </Form.Group>

//       <Row className="mb-3">
//         <Form.Group as={Col} controlId="formGridCity">
//           <Form.Label>City</Form.Label>
//           <Form.Control />
//         </Form.Group>
        

//         <Form.Group as={Col} controlId="formGridState">
//           <Form.Label>State</Form.Label>
//           <Form.Select defaultValue="Choose...">
//             <option>Choose...</option>
//             <option>...</option>
//           </Form.Select>
//         </Form.Group>

//         <Form.Group as={Col} controlId="formGridZip">
//           <Form.Label>Zip</Form.Label>
//           <Form.Control />
//         </Form.Group>
//       </Row>


//         <Form.Group className="mb-3" controlId="formBasicGender">
//         <Form.Label>Gender</Form.Label>
//         <Form.Control type="name" placeholder="Male or Female" />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
//         <Form.Label>Phone Number</Form.Label>
//         <Form.Control type="gender" placeholder="Phone Number" />
//         </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control type="email" placeholder="Enter email" />
//         <Form.Text className="text-muted">
//           We will never share your email with anyone else.
//         </Form.Text>
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control type="password" placeholder="Password" />
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicCheckbox">
//         <Form.Check type="checkbox" label="Sign Me Up" />
//       </Form.Group>
//       <Button variant="primary" type="submit">
//         Submit
//       </Button>
//     </Form>
//   );
// }

// export default Forms;


// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

// function BasicExample() {
//   return (
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="holder.js/100px180" />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
//   );
// }

// export default BasicExample;

// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import CardGroup from 'react-bootstrap/CardGroup';

// function BasicExample() {
//   return (
//     <CardGroup>
//       {/* First Card */}
//       <Card style={{ width: '18rem' }}>
//         <Card.Img variant="top" src="holder.js/100px180?text=Image1" />
//         <Card.Body>
//           <Card.Title>Card Title 1</Card.Title>
//           <Card.Text>
//             Some quick example text to build on the card title and make up the
//             bulk of the card's content.
//           </Card.Text>
//           <Button variant="primary">Go somewhere</Button>
//         </Card.Body>
//       </Card>

//       {/* Second Card */}
//       <Card style={{ width: '18rem' }}>
//         <Card.Img variant="top" src="holder.js/100px180?text=Image2" />
//         <Card.Body>
//           <Card.Title>Card Title 2</Card.Title>
//           <Card.Text>
//             Some quick example text to build on the card title and make up the
//             bulk of the card's content.
//           </Card.Text>
//           <Button variant="primary">Go somewhere</Button>
//         </Card.Body>
//       </Card>

//       {/* Third Card */}
//       <Card style={{ width: '18rem' }}>
//         <Card.Img variant="top" src="holder.js/100px180?text=Image3" />
//         <Card.Body>
//           <Card.Title>Card Title 3</Card.Title>
//           <Card.Text>
//             Some quick example text to build on the card title and make up the
//             bulk of the card's content.
//           </Card.Text>
//           <Button variant="primary">Go somewhere</Button>
//         </Card.Body>
//       </Card>
//     </CardGroup>
//   );
// }

// export default BasicExample;


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function BasicExample() {
  return (
    <Row>
      {/* First Card */}
      <Col md={4}>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="./assets/member card.PNG" />
          <Card.Body>
            <Card.Title> Subscription</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>

      {/* Second Card */}
      <Col md={4}>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="./assets/Black and Green Gyms Back to Business Landscape Poster.png" />
          <Card.Body>
            <Card.Title>Nutrition</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>

      {/* Third Card */}
      <Col md={4}>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="./assets/Gym Fitness.png" />
          <Card.Body>
            <Card.Title>Workout Days</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default BasicExample;


