import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AccordionComponent from "./Accordion";
import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";
import axios from "axios";


const Forms = ({ setSigningUp }) => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const cardInfo = [
    {
      image: "/public/member flyer.PNG",
      title: "Subscription",
      text: "Here You can find our monthly Subscriptions",
    },
    {
      image: "/public/Power Gym Instagram Story.png",
      title: "Nutrition",
      text: "This is where you will choose nutrition",
    },
    {
      image: "/public/Lime Green Motivational Quote Photo Gym Poster.png",
      title: "Workout Day",
      text: "Pick the days you would like to workout",
    },
  ];
  const [isSub, setIsSub] = useState(false);     
  const [id, setId] = useState(""); 
  const [emailInput, setEmailInput] = useState("");
  const url = import.meta.env.VITE_BACKEND_URL + "/subscriptions"
  const [subData, setSubData] = useState([]);

  useEffect(() => {
    if (isAuthenticated) setEmailInput(user.email)
  },
   // eslint-disable-next-line react-hooks/exhaustive-deps
   [isAuthenticated])
   useEffect(() => {
    const getData = async () => {
     const cancelData = await axios.get(url)
     setSubData(cancelData.data)
     console.log(cancelData.data)
     setId(cancelData.data[0]?._id)
     if(isAuthenticated) {
       if (cancelData.data.length > 0 ) setIsSub(true)
      }
  }
  getData()
},
[id, emailInput])
  return (
    <>
      <Row>
        {cardInfo.map((card, index) => (
          <Col md={{ span: 3, offset: 1 }} key={index}>
            <Card style={{ width: "18rem", height: "30rem" }}>
              <Card.Img
                style={{ height: "19rem" }}
                variant="top"
                src={card.image}
              />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
              </Card.Body>
              <AccordionComponent />
            </Card>
          </Col>
        ))}
      </Row>
      <Row>
        <div style={{ height: "300px", width:"100%"}}>
          </div>
          <div style={{display:"flex", justifyContent:"", width:"100%", height:"10rem",marginBottom:"250px"}}>
          <Card style={{ width: "20rem", height: "6rem", margin:"100px"}}>
            
          
            <Card.Body>
              {subData.map((card, index) => (
                <>
                  <div> {card.Name}</div>
                  <div> {card.Nutrition}</div>
                  <div> {card.Days}</div>
                </>
              ))}
            </Card.Body>
          </Card>
        </div>
      </Row>
    </>
  );
};

export default Forms;
