import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import  ReactDOM  from "react";
import Forms from './Forms';
import Auth from "./auth";
import ModalComponent from "./Modal";
import { Route, Routes } from "react-router-dom";
import About from './About';
import { NavLink,} from "react-router-dom"
import "./App.css"

const  MONGODB_URI = import.meta.env.MONGODB_URI || "http://localhost:3001";

function App () {
  const [singingUp, setSigningUp] = useState(false)
  return (
    
      <div style={backgroundStyle}>      
        {singingUp && <ModalComponent setSigningUp={setSigningUp}/>}
          

        <Routes>
            <Route path="/" element={ <Forms setSigningUp={setSigningUp}/>} />
            <Route path="/about" element={<About />} />

          </Routes>
        </div>
    );
  }


const backgroundStyle = {
  backgroundImage: `url("/Black & White Brick Grunge Fitness Gym Poster - 2.png")`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "100vh",
};


export default App;

