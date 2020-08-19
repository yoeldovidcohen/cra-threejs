import React from "react";
import Hello from "./compoments/Hello";
import MyAnim from "./compoments/MyAnim";
import CoolBox from "./compoments/CoolBox";
import CoolNumber from "./compoments/CoolNumber";
import CoolB from "./compoments/CoolB";

function App() {
  return (
    <>
      <Hello>hi</Hello>
      <CoolNumber />
      {/* <MyAnim /> */}
      <CoolB />
    </>
  );
}

export default App;
