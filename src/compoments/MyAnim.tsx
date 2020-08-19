import React from "react";
import { useSpring, animated } from "react-spring";
import { useState } from "react";
import styled from "styled-components/macro";
import CoolBox from "./CoolBox";

const MyDiv = styled(animated.div)`
  background: tomato;
`;

const MyAnim = () => {
  const [isHide, setHide] = useState(false);
  const { opacity } = useSpring({ opacity: isHide ? 0 : 1 });
  const toggle = () => setHide(!isHide);

  return (
    <>
      <button onClick={toggle}>TOGGLE</button>
      <MyDiv>myDiv</MyDiv>
    </>
  );
};

export default MyAnim;
