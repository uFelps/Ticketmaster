import styled from "styled-components";
import { useApi } from "../../../hooks/useApi";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BoxContainer from "../../utils/BoxContainer";

export const BoxCards = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2em 2em;
  overflow-x: auto;
  border-collapse: collapse;

  @media (max-width: 700px) {
    width: 90%;
    gap: 2em 2em;
  }
`;

export const Card = styled.div`
  width: 300px;
  height: 349px;
  border-radius: 8px;

  h1 {
    font-size: 16px;
    font-weight: 700;
    margin: 1em 0em 0.5em 0em;
  }

  p {
    font-size: 14px;
    font-weight: 500;
    color: #727272;
    margin-bottom: 1.5em;
  }

  i {
    font-size: 12px;
    font-weight: 400;
    color: #727272;
    display: block;
    margin-bottom: 1.5em;
  }

  @media (max-width: 700px) {
    width: 150px;
    height: 220px;

    h1 {
      font-size: 14px;
    }

    p {
      font-size: 12px;
    }

    i {
      font-size: 10px;
    }
  }
`;

export const Img = styled.div`
  width: 300px;
  height: 200px;
  border-radius: 8px 8px 0px 0px;

  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;

  @media (max-width: 700px) {
    width: 140px;
    height: 90px;
  }
`;

export const Button = styled(Link)`
  background: none;
  border: none;
  font-size: 12px;
  color: #056de0;
  font-weight: 600;

  &:hover {
    cursor: pointer;
  }
`;

function Eventos() {
  const api = useApi();
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    buscarEventos();
  }, []);

  const buscarEventos = async () => {
    const response = await api.buscarPorCategoria("evento");
    setEventos(response.content);
  };
  return (
    <>
      <BoxContainer titulo={"Eventos"}>
        <BoxCards>
          {eventos.map((evento) => (
            <Card key={evento.id}>
              <Img src={evento.img} />
              <h1>{evento.artista}</h1>
              <p>{evento.nome}</p>
              <i>Ingressos Disponíveis</i>
              <Button to={`/tours${evento.link}`}>Comprar &#10132;</Button>
            </Card>
          ))}
        </BoxCards>
      </BoxContainer>
    </>
  );
}

export default Eventos;
