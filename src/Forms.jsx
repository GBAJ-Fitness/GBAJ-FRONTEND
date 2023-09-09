import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AccordionComponent from "./Accordion";

const Forms = ({ setSigningUp }) => {
  const cardInfo = [
    {
      image: "/public/member flyer.PNG",
      title: "Subscription",
      text: "Here You can find our monthly Subscriptions",
    },
    {
      image:
        "/public/Black and Green Gyms Back to Business Landscape Poster.png",
      title: "Nutrition",
      text: "This is information for your data",
    },
    {
      image: "/public/Lime Green Motivational Quote Photo Gym Poster.png",
      title: "Workout Day",
      text: "Pick the days you would like to workout",
    },
  ];
  console.log(setSigningUp);
  return (
    <Row>
      {cardInfo.map((card, index) => (
        <Col md={{span:3, offset:1}} key={index}>
          <Card style={{ width: "18rem", height:"33rem" }}>
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
  );
};

export default Forms;
