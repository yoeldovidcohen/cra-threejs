import React from "react";
import CoolBox from "./CoolBox";
import { useSpring, animated, to } from "react-spring";

const CoolTransition = () => {
  const [fade] = useSpring({ from: { opacity: 0 } }, to: { opacity: 1}});
  return (
    <>
      <animated.div>
        <CoolBox opacity={fade} />
      </animated.div>
    </>
  );
};

export default CoolTransition;
