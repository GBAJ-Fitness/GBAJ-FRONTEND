import React, { Component } from "react";
import axios from "axios";
// import header
// import footer

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
  // }

  render() {
    return (
      <>
      </>
    );
  }
}

export default App;
