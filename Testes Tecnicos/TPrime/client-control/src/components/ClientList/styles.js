import styled from "styled-components";

export const Container = styled.div`
  section {
    display: none;
  }
  @media only screen and (min-width: 600px) {
    max-height: 100%;
    display: flex;
    section {
      display: flex;
      max-width: 40%;
    }
  }
`;

export const ListContainer = styled.div`
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  gap: 20px;
`;

export const ListHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: 600px) {
    width: 90%;
    max-width: 700px;
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const SearchBox = styled.div`
  display: flex;
  gap: 5px;

  input {
    height: 25px;
    border-radius: 5px;
    border: solid 1px grey;
    padding-left: 10px;
  }

  button {
    border-radius: 25%;
    background-color: grey;
    border: 1px solid grey;
    font-weight: bolder;
  }
`;

export const CardsList = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  max-height: 100%;
  gap: 20px;
`;

export const AddButton = styled.button`
  width: 90%;
  max-width: 400px;
  height: 30px;
  background-color: white;
  border: 1px solid grey;
  border-radius: 19px;
  font-weight: bold;
`;
