import { StyledModal } from "./styles";
import Register from "../Register";

function ModalRegister({
  open,
  setNome,
  setEmail,
  setTel,
  onSubmitFunction,
  nome,
  email,
  tel,
}) {
  return (
    <StyledModal show={open}>
      <Register
        onSubmitfunction={onSubmitFunction}
        setNome={setNome}
        setEmail={setEmail}
        setTel={setTel}
      />
    </StyledModal>
  );
}

export default ModalRegister;
