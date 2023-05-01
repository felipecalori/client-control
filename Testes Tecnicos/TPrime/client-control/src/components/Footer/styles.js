import styled from "styled-components";

export const FooterBox = styled.div`
  width: 100%;
  background-color: #423e3e;
  margin: 0;
  height: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 30px 30px 0px 0px;
  h3 {
    height: fit-content;
    margin: 0;
    color: white;
  }
  span {
    margin-left: 5px;
    font-size: 20px;
    color: black;
  }

  @media only screen and (min-width: 600px) {
    flex-direction: row;
    max-width: 100%;
    margin: auto;
    h3 {
      padding-left: 10%;
    }
  }
`;

export const FooterContact = styled.div`
  padding-right: 5%;
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 20px;
  color: white;
  svg {
    cursor: pointer;
  }
  @media only screen and (min-width: 600px) {
    padding-right: 10%;
  }
`;
