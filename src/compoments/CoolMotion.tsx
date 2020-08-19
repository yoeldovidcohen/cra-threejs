import { animated, useSpring } from "react-spring";
import React from "react";
import CoolBox from "./CoolBox";

const CoolMotion = () => {
  const fade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 1000,
  });

  return (
    <>
      <animated.div style={fade}>
        <h1>hi</h1>
        <CoolBox />
      </animated.div>
    </>
  );
};

export default CoolMotion;
