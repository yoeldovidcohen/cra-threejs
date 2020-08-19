import React, { useState } from "react";
import { useSpring, animated, SpringValue } from "react-spring";
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
  const [isHigh, setHigh] = useState(false);
  const { number } = useSpring({
    number: isHigh ? 1 : 0.5,
  });
  const toggle = () => setHigh((state) => !state);

  return (
    <>
    <h1>hi</h1>
      {/* <button onClick={toggle}>TOGGLE</button> */}
      {/* <animated.span>{number.interpolate((x) => x.toFixed(10))}</animated.span> */}
      <CoolDiv style
    </>
  );
};

export default CoolNumber;
