import React from "react";
import logo from "./logo.svg";
import Hello from "./compoments/Hello";
import CoolBox from "./compoments/CoolBox";
import CoolTransition from "./compoments/CoolTransition";

function App() {
  return (
    <>
      <Hello>hi</Hello>
      <CoolBox opacity={0.2} />
      <CoolTransition />
    </>
  );
}

export default App;
