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


// short curcuit
function App () {
  const [singingUp, setSigningUp] = useState(false)
  return (
    
      <div style={backgroundStyle}>

       <Auth/>
        <nav>
       <NavLink to="/about">About Us</NavLink>
       <NavLink to="/">Home</NavLink>
       </nav>
        {singingUp && <ModalComponent setSigningUp={setSigningUp}/>}

        <Routes>
            <Route path="/" element={ <Forms setSigningUp={setSigningUp}/>} />
            <Route path="/about" element={<About />} />

          </Routes>
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

