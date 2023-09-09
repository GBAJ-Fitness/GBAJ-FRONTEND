import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import  ReactDOM  from "react";
import Forms from './Forms';
import Auth from "./auth";
import ModalComponent from "./Modal";


// short curcuit
function App () {
  const [singingUp, setSigningUp] = useState(false)
  return (
    
      <div style={backgroundStyle}>

       <Auth/>
      

        <Forms  setSigningUp={setSigningUp}/>
        {singingUp && <ModalComponent setSigningUp={setSigningUp}/>}

        </div>
    );
  }


const backgroundStyle = {
  backgroundImage: `url("/public/Black & White Brick Grunge Fitness Gym Poster - 2.png")`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "100vh",
};

export default App;
