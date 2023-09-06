import React, { Component } from "react";
import axios from "axios";
import Forms from "./Forms";
import 'bootstrap/dist/css/bootstrap.min.css';

const apiKey = process.env.VITE_REACT_KEY;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
      nutrition: false,
      workouts: false,
    };
  }

  // async componentDidMount() {
  //   // Your async code here
  // }

  render() {
    return (
      <>
        {/* Your JSX here */}
      </>
    );
  }
}

export default App;
