import { useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";
import { aData } from "./DB/db";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Header from "./components/Header";

function App() {
  const [list, setList] = useState(aData);

  const schema = yup.object().shape({
    nome: yup.string().required("Campo Obrigatório!"),
    email: yup.string().email("Email inválido").required("Campo Obrigatório!"),
    telefone: yup.number().required("Campo obrigatório!"),
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
  };

  return (
    <div className="App">
      <Header className="App-header"></Header>
      <main>
        <h2>Lista de Contatos</h2>
        <div>
          <input></input>
          <button>Pesquisar</button>
        </div>
        <div>
          {list.length > 0 ? (
            list.map((contact, index) => (
              <div key={index}>
                <p>Codigo:{contact.codigo}</p>
                <p>Nome:{contact.nome}</p>
                <p>Email:{contact.email}</p>
                <p>Telefone:{contact.telefone}</p>
              </div>
            ))
          ) : (
            <p>Cadastre um Contato</p>
          )}
        </div>
        <form onSubmit={handleSubmit(onSubmitfunction)}>
          <label>nome</label>
          <input
            type="text"
            placeholder="Digite aqui o nome"
            {...register("nome")}
          />
          {errors.nome?.message}
          <label>email</label>
          <input
            type="text"
            placeholder="Digite aqui o email"
            {...register("email")}
          />
          {errors.email?.message}
          <label>telefone</label>
          <input
            type="text"
            placeholder="Digite aqui o telefone"
            {...register("telefone")}
          />
          {errors.telefone?.message}
          <button type="submit">Cadastrar</button>
        </form>
      </main>
      <footer>
        <h3>Logo</h3>
        <p>contact</p>
      </footer>
    </div>
  );
}

export default App;
