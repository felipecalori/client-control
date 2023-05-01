import {
  AddButton,
  CardsList,
  ListContainer,
  ListHeader,
  SearchBox,
} from "./styles";
import { FaSistrix } from "react-icons/fa";
import Card from "../Card";
import { useState } from "react";

function ClientList({ list, setOpen }) {
  const [filteredList, setFilteredList] = useState([]);
  const [filter, setFilter] = useState("");
  const [isFiltered, setIsFiltred] = useState(false);

  function showClients() {
    if (!isFiltered) {
      setIsFiltred(true);
    } else if (!filter) {
      setIsFiltred(false);
    }
    setFilteredList(
      list.filter(
        (client) =>
          client.nome.toLowerCase().includes(filter.toLowerCase()) ||
          client.email.toLowerCase().includes(filter.toLowerCase()) ||
          client.codigo.includes(filter)
      )
    );
  }

  return (
    <>
      <ListContainer>
        <ListHeader>
          <h2>Lista de Contatos</h2>
          <SearchBox>
            <input
              className="search"
              type="text"
              placeholder="Digitar Pesquisa"
              value={filter}
              onChange={(event) => setFilter(event.target.value)}
            />
            <button onClick={() => showClients()}>
              <FaSistrix />
            </button>
          </SearchBox>
        </ListHeader>

        <CardsList>
          {!isFiltered ? (
            list.length > 0 ? (
              list.map((contact, index) => (
                <Card contact={contact} key={index}></Card>
              ))
            ) : (
              <p>Cadastre um Contato</p>
            )
          ) : (
            filteredList.map((contact, index) => (
              <Card contact={contact} key={index}></Card>
            ))
          )}
        </CardsList>
        <AddButton onClick={() => setOpen(true)}>Adicionar Contato</AddButton>
      </ListContainer>
    </>
  );
}

export default ClientList;
