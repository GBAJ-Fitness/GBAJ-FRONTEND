

import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Forms = () => {
  const cardInfo = [
    { image: "/public/member flyer.PNG", 
    title: "Subscription", 
    text: "Here You can find our monthly Subscriptions" },
    { image: "/public/Black and Green Gyms Back to Business Landscape Poster.png",
     title: "Performance", 
     text: "This is information for your data" },
    { image: "/public/Lime Green Motivational Quote Photo Gym Poster.png", 
    title: "Workout Day", 
    text: "Pick the days you would like to workout" }
  ];

  return (
    <Row>
      {cardInfo.map((card, index) => (
        <Col md={4} key={index}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={card.image} />
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>{card.text}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Forms;


