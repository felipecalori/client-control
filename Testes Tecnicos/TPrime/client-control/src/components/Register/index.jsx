import { StyledModalBox } from "./styles";

function Register({
  onSubmitfunction,
  setNome,
  setTel,
  setEmail,
  nome,
  email,
  tel,
}) {
  return (
    <StyledModalBox onSubmit={onSubmitfunction}>
      <h2>Cadastrar Cliente</h2>
      <div>
        <label>Nome</label>
        <input
          type="text"
          value={nome}
          placeholder="Digite aqui o nome"
          onChange={(event) => setNome(event.target.value)}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="text"
          value={email}
          placeholder="Digite aqui o email"
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <label>Telefone</label>
        <input
          type="text"
          value={tel}
          placeholder="Digite aqui o telefone"
          onChange={(event) => setTel(event.target.value)}
        />
      </div>

      <button type="submit">Cadastrar</button>
    </StyledModalBox>
  );
}

export default Register;
