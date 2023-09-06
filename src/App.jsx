import React, { Component } from "react";
import axios from "axios";
import Forms from "./Forms";

class App extends Component {
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
        <div>We here </div>
      </>
    );
  }
}

export default App;
