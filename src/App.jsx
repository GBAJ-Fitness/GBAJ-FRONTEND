import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import  ReactDOM  from "react";
import Forms from './Forms';
import { Modal } from "react-bootstrap";
import ModalComponent from "./Modal";

// short curcuit
function App () {
  const [singingUp, setSigningUp] = useState(false)
    return (
      <div style={backgroundStyle}>
        <Forms  setSigningUp={setSigningUp}/>
        {singingUp && <ModalComponent setSigningUp={setSigningUp}/>}
        </div>
    );
  }


const backgroundStyle = {
  backgroundImage: `url("/images/black___white_brick_grunge_fitness_gym_poster_-_2.png")`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "100vh",
};

export default App;
