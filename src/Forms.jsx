import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AccordionComponent from "./Accordion";
import { useAuth0 } from "@auth0/auth0-react";


const Forms = ({ setSigningUp }) => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const cardInfo = [
    {
      image: "/public/member flyer.PNG",
      title: "Subscription",
      text: "Here You can find our monthly Subscriptions",
    },
    {
      image:
        "/public/Power Gym Instagram Story.png",
      title: "Nutrition",
      text: "This is where you will choose nutrition",
    },
    {
      image: "/public/Lime Green Motivational Quote Photo Gym Poster.png",
      title: "Workout Day",
      text: "Pick the days you would like to workout",
    },
  ];
  return (
    <>
    <Row>
      {cardInfo.map((card, index) => (
        <Col md={{span:3, offset:1}} key={index}>
          <Card style={{ width: "18rem", height:"30rem" }}>
            <Card.Img style={{height:"19rem"}} variant="top" src={card.image} />
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>{card.text}</Card.Text>
            </Card.Body>
            <AccordionComponent/>
          </Card>
        </Col>
      ))}
    </Row>
    <Row>
      <div style={{height:"500px"}}></div>
    </Row>
    </>
  );
};

export default Forms;
