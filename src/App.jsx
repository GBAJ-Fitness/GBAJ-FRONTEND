import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import  ReactDOM  from "react";
import Forms from './Forms';

import LoginButton from "./login";
import LogoutButton from "./logout";
import Profile from "./profile";
import Auth from "./auth";

import { Modal } from "react-bootstrap";
import ModalComponent from "./Modal";
import Header from "./Header";
import Footer from "./Footer";


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
