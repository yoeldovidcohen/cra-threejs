import styled, { createGlobalStyle } from "styled-components/macro";
import React from "react";

interface Props {
  opacity: number;
}

const CoolBox = styled.div<Props>`
  background-color: red;
  height: 20vh;
  width: 20vw;
  opacity: ${(props) => props.opacity};
`;

export default CoolBox;
