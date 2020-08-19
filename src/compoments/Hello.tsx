import styled from "styled-components/macro";
import { useSpring, animated } from "react-spring";
import React from "react";

// const props = useSpring({
//   opacity: 1,
//   from: { opacity: 0 },
// });

// const PrPP = () => {
//   return (
//     <>
//       <animated.h1>hello</animated.h1>
//     </>
//   );
// };

const Hello = styled.h1`
  color: red;
  text-align: center;
`;

export default Hello;
