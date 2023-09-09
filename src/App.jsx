import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import  ReactDOM  from "react";
import Forms from './Forms';
<<<<<<< HEAD
import LoginButton from "./login";
import LogoutButton from "./logout";
import Profile from "./profile";
import Auth from "./auth";
=======
import { Modal } from "react-bootstrap";
import ModalComponent from "./Modal";
import Header from "./Header";
import Footer from "./Footer";
>>>>>>> 517ee830fbaac6bea23f97984163e0ddda5ffa98

// short curcuit
function App () {
  const [singingUp, setSigningUp] = useState(false)
  return (
    
      <div style={backgroundStyle}>
<<<<<<< HEAD
       <Auth/>
        <Forms />
=======
        <Forms  setSigningUp={setSigningUp}/>
        {singingUp && <ModalComponent setSigningUp={setSigningUp}/>}
>>>>>>> 517ee830fbaac6bea23f97984163e0ddda5ffa98
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
