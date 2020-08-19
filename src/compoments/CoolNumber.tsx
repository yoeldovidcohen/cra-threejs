import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components/macro";

const CoolDiv = styled(animated.div)`
  background-color: red;
  margin: 1rem;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CoolNumber = () => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });
  return (
    <>
      <h1>hi</h1>
      {/* <button onClick={toggle}>TOGGLE</button> */}
      {/* <animated.span>{number.interpolate((x) => x.toFixed(10))}</animated.span> */}
      {/* <CoolDiv style={{ props }} /> */}
      {/* <animated.h1 style={props}>hello</animated.h1> */}
    </>
  );
};

export default CoolNumber;
