import { useState } from "react";
import "./App.css";
import { aData } from "./DB/db";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ClientList from "./components/ClientList";
import ModalRegister from "./components/ModalRegister";

function App() {
  const [list, setList] = useState(aData);
  const [open, setOpen] = useState(false);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");

  function codeGenerate() {
    return "00" + (parseInt(list[list.length - 1].codigo) + 1).toString();
  }

  function validationData() {
    return nome !== "" && email !== "" && tel !== "";
  }

  const onSubmitFunction = (event) => {
    event.preventDefault();
    if (validationData()) {
      const data = {
        codigo: codeGenerate(),
        nome: nome,
        email: email,
        telefone: tel,
      };
      setList([...list, data]);
      setNome("");
      setEmail("");
      setTel("");
      setOpen(false);
    } else {
      alert("Preencha todos os campos");
    }
  };

  return (
    <div className="App">
      <ModalRegister
        open={open}
        nome={nome}
        email={email}
        tel={tel}
        setNome={setNome}
        setEmail={setEmail}
        setTel={setTel}
        onSubmitFunction={onSubmitFunction}
      />
      <Header className="App-header"></Header>
      <main>
        <ClientList list={list} setList={setList} setOpen={setOpen} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
