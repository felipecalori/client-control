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

  return (
    <div className="App">
      <ModalRegister
        open={open}
        setOpen={setOpen}
        setList={setList}
        list={list}
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
