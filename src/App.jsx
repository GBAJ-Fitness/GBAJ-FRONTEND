import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import  ReactDOM  from "react";
import Forms from './Forms';


class App extends React.Component {
  render() {
    return (
      <div style={backgroundStyle}>
        <Forms />
        </div>
    );
  }
}

const backgroundStyle = {
  backgroundImage: `url("/images/black___white_brick_grunge_fitness_gym_poster_-_2.png")`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "100vh",
};

export default App;
