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
  setOpen,
}) {
  return (
    <StyledModal show={open}>
      <Register
        setOpen={setOpen}
        onSubmitfunction={onSubmitFunction}
        setNome={setNome}
        setEmail={setEmail}
        setTel={setTel}
        nome={nome}
        email={email}
        tel={tel}
      />
    </StyledModal>
  );
}

export default ModalRegister;
