import styled from "styled-components";

export const StyledModal = styled.div`
  position: absolute;
  display: ${(props) => (props.show ? "flex" : "none")};
  justify-content: center;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 10000;
  background-color: rgba(0, 0, 0, 0.5);

  span {
    font-size: 10px;
  }
`;
