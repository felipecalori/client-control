import styled from "styled-components";

export const StyledModalBox = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  background-color: grey;
  height: 48%;
  margin: auto;
  width: 90%;
  border-radius: 15px;
  border: 2px solid darkgrey;
  padding: 10px;
  max-width: 400px;

  h2 {
    margin-bottom: 0;
  }

  label {
    font-size: 14px;
    font-weight: bold;
  }

  div {
    width: 90%;
    margin: 0;
    padding: 0;

    #text {
      color: red;
    }
  }
  input {
    margin-top: 5px;
    width: 95%;
    height: 35px;
    border-radius: 5px;
    border: solid 1px grey;
    padding-left: 10px;
    max-width: 400px;
  }

  button {
    width: 90%;
    max-width: 400px;
    height: 30px;
    background-color: white;
    border: 1px solid grey;
    border-radius: 19px;
    font-weight: bold;
  }
`;
