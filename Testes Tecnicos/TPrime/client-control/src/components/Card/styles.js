import styled from "styled-components";

export const CardBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 95%;
  max-width: 500px;
  border: 2px solid grey;
  border-radius: 15px;
  background-color: rgb(66, 62, 62, 0.2);
  padding: 5px;

  h3 {
    margin: 0;
    width: 100%;
  }

  span {
    font-size: 10px;
    font-weight: bold;
    margin-right: 5px;
  }

  p {
    margin: 0;
    max-height: 23px;
    min-width: 230px;
    max-width: 230px;
    font-weight: 500;
    overflow: hidden;
  }

  @media only screen and (min-width: 600px) {
    padding: 15px;
  }
`;
