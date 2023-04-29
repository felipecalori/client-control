import { useEffect, useState } from "react";
import "./App.css";
import { aData } from "./DB/db";

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(aData);
  });
  return (
    <div className="App">
      <header className="App-header">
        <h1>Logo</h1>
      </header>
      <main>
        <h2>Lista de Contatos</h2>
        <div>
          <input></input>
          <button>Pesquisar</button>
        </div>
        <div>
          {list.length > 0 ? (
            list.map((contact, index) => (
              <div>
                <p>Codigo:{contact.codigo}</p>
                <p>Nome:{contact.nome}</p>
                <p>Email:{contact.email}</p>
                <p>Telefone:{contact.telefone}</p>
              </div>
            ))
          ) : (
            <p>Cadastre um Contato</p>
          )}
          <button>Cadastrar</button>
        </div>
      </main>
      <footer>
        <h3>Logo</h3>
        <p>contact</p>
      </footer>
    </div>
  );
}

export default App;
