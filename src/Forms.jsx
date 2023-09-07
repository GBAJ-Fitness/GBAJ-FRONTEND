import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Forms extends Component {
  render() {
    return (
      <Row>
        <Col md={4}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="./assets/member card.PNG" />
            <Card.Body>
              <Card.Title>Subscription</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>

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
}

export default Forms;


