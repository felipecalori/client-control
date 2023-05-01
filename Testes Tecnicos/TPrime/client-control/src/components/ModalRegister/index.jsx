import { StyledModal } from "./styles";
import Register from "../Register";

function ModalRegister({ list, setList, open, setOpen }) {
  return (
    <StyledModal show={open}>
      <Register list={list} setList={setList} setOpen={setOpen} />
    </StyledModal>
  );
}

export default ModalRegister;
