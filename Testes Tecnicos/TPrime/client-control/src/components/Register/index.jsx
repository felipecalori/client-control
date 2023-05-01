import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { StyledModalBox } from "./styles";

function Register({ list, setList, setOpen }) {
  const schema = yup.object().shape({
    nome: yup.string().required("Campo Obrigatório!"),
    email: yup.string().email("Email inválido").required("Campo Obrigatório!"),
    telefone: yup.string().required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitfunction = (data) => {
    data.codigo =
      "00" + (parseInt(list[list.length - 1].codigo) + 1).toString();
    setList([...list, data]);
    setOpen(false);
    console.log(data);
    console.log(list);
  };
  return (
    <StyledModalBox onSubmit={handleSubmit(onSubmitfunction)}>
      <h2>Cadastrar Cliente</h2>
      <div>
        <label>Nome</label>
        <input
          type="text"
          placeholder="Digite aqui o nome"
          {...register("nome")}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="text"
          placeholder="Digite aqui o email"
          {...register("email")}
        />
      </div>
      <div>
        <label>Telefone</label>
        <input
          type="text"
          placeholder="Digite aqui o telefone"
          {...register("telefone")}
        />
        {errors.telefone?.message}
      </div>

      <button type="submit">Cadastrar</button>
    </StyledModalBox>
  );
}

export default Register;
