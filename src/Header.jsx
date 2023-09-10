//import React
import React from "react";
import Auth from "./auth";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

//Create component
class Header extends React.Component {
  render() {
    return (
      <div>
        <h1
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          GBAJ Fitness{" "}
          <img
            style={{ height: "40px", width: "40px" }}
            src="./assets/Gym Fitness.png"
          />
          <nav style={{ display: "flex", justifyContent: "flex-end" }}>
            <Link to="/"> <Button variant="dark">Home</Button> </Link>
            <Link to="/about"><Button variant="dark">About Us</Button></Link>
            <Auth />
          </nav>
        </h1>
      </div>
    );
  }
}

//Export component
export default Header;
