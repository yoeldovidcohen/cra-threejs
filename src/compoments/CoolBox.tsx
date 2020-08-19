import styled from "styled-components/macro";

interface Props {
  opacity?: number;
}

const CoolBox = styled.div<Props>`
  background-color: red;
  height: 20vh;
  width: 20vw;
  border: 4px dotted blue;
  opacity: ${(props) => props.opacity};
`;

CoolBox.defaultProps = {
  opacity: 1,
};

export default CoolBox;
