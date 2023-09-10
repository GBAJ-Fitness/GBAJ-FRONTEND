import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";


import {
  Accordion,
  Button,
  Card,
  Form,
  useAccordionButton,
} from "react-bootstrap";
import axios from "axios";

export default function AccordionComponent() { 
   const { user, isAuthenticated, isLoading } = useAuth0();
  const [emailInput, setEmailInput] = useState("");
  const [name, setName] = useState("");  //  Added this
  const [nutrition, setNutrition] = useState("");  // Added this
  const [days, setDays] = useState("");     
  const [isSub, setIsSub] = useState(false);     
  const [id, setId] = useState("");     
  const url = import.meta.env.VITE_BACKEND_URL + "/subscriptions"

  useEffect(() => {
    if (isAuthenticated) setEmailInput(user.email)
  },
   // eslint-disable-next-line react-hooks/exhaustive-deps
   [isAuthenticated])
   useEffect(() => {
    const getData = async () => {
     const cancelData = await axios.get(url)
     console.log(cancelData.data)
     setId(cancelData.data[0]?._id)
     if(isAuthenticated) {
       if (cancelData.data.length > 0 ) setIsSub(true)
      }
  }
  getData()
},
[id, emailInput])

console.log(id)
  const  handleClick = async (id) => {
    await axios.delete(url + "/" + id);
    setId ("")
    location.reload()
  } 
  async function handleSubmit(e) {
  

        console.log({
      email: emailInput,
      name: name,
      nutrition: nutrition,
      days: days
    });


    const body = { Email:emailInput, Name:name, Nutrition:nutrition, Days:days }; 
    setEmailInput("");
    setName("");  
    setNutrition("");  
    setDays(""); 
    
  
    const test = await axios.post(url ,body)
  }
 

  return (
    

    <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header>
         { !isSub && <CustomToggle eventKey="1">Click me!</CustomToggle>}
         {isSub && <Button onClick={() => handleClick(id)}  variant="danger" >Cancel</Button>}
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            {" "}
            <Form onSubmit={handleSubmit}>
              <Form.Group
              value={emailInput}
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
    <Form.Control 
        value={name}
        type="text" 
        placeholder="Name" 
        onChange={e => setName(e.target.value)} 
    />
</Form.Group>
<Form.Group>
    <Form.Label>Nutrition</Form.Label>
    <Form.Control 
        value={nutrition}
        type="text" 
        placeholder="Nutrition" 
        onChange={e => setNutrition(e.target.value)} 
    />
</Form.Group>
<Form.Group>
    <Form.Label>Days</Form.Label>
    <Form.Control 
        value={days}
        type="number" 
        placeholder="Days" 
        onChange={e => setDays(e.target.value)} 
    />
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

