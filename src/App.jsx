import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react";
import Forms from "./Forms";
import Auth from "./auth";
import ModalComponent from "./Modal";
import { Route, Routes } from "react-router-dom";
import About from './About';
import { NavLink,} from "react-router-dom"
import "./App.css"
const  MONGODB_URI = import.meta.env.MONGODB_URI || "http://localhost:3001";


// short curcuit
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signingUp: false,
    };
  }

  setSigningUp = (s) => {
    this.setState({
      signingUp: s,
    });
  };
  render() {
    // const [singingUp, setSigningUp] = useState(false)
    return (
      <div style={backgroundStyle}>
        <Auth />
        <nav>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/">Home</NavLink>
        </nav>
        {this.state.signingUp && (
          <ModalComponent setSigningUp={this.setSigningUp} />
        )}

        <Routes>
          <Route
            path="/"
            element={<Forms setSigningUp={this.setSigningUp} />}
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    );
  }
}

const backgroundStyle = {
  backgroundImage: `url("/public/Black & White Brick Grunge Fitness Gym Poster - 2.png")`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "100vh",
};

export default App;
