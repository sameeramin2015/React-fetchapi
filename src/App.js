import React from "react";
import { Container } from "react-bootstrap";
import ChildComponent from "./components/childComponent";

function App({helloMessage}) {
  return (
    <Container>
      <h2>Hompage</h2>
      <h2>Hompage</h2>
      <h2>Hompage</h2>
      <h2>Hompage</h2>

      <ChildComponent helloMessage={helloMessage} />
    </Container>
  )
}

export default App;
