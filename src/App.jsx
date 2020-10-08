import React, {useState} from "react";
import "./index.css";
import Greeting from "./components/Greeting";
import {Container} from "react-bootstrap";
import {Jumbotron} from "react-bootstrap";

const App = () => {
  const [name, setName] = useState({});

  return (
    <Container id="container">
      <Jumbotron id="jumbotron">
        <input
          onChange={({target: {value}}) => setName(value)}
          placeholder="Enter your name"
        />
        <Greeting name={name} />
      </Jumbotron>
    </Container>
  );
};

export default App;
