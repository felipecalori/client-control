import styled from "styled-components";

export const HeaderBox = styled.div`
  width: 100%;
  background-color: #6bc2df;
  margin: 0;
  height: 4rem;
  display: flex;
  align-items: center;
  border-radius: 0px 0px 30px 30px;

  h1 {
    height: fit-content;
    margin: 0;
    color: white;
    margin-left: 5%;
  }
  span {
    margin-left: 5px;
    font-size: 20px;
    color: black;
  }

  @media only screen and (min-width: 600px) {
    width: 90%;
    border-radius: 30px;
    h1 {
      margin-left: 10%;
    }
  }
`;
