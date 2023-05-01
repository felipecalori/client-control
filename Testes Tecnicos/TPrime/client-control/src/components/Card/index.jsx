import { CardBox } from "./styles";

function Card({ contact }) {
  return (
    <CardBox>
      <h3>{contact.codigo}</h3>
      <p>
        <span>Nome:</span>
        {contact.nome}
      </p>
      <p>
        <span>Email:</span>
        {contact.email}
      </p>
      <p>
        <span>Telefone:</span>
        {contact.telefone}
      </p>
    </CardBox>
  );
}

export default Card;
