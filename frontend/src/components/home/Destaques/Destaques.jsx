import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useApi } from "../../../hooks/useApi";
import { Link } from "react-router-dom";
import BoxContainer from "../../utils/BoxContainer";
import { LoadContext } from "../../../context/LoadContext";

const BoxCards = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1em;
  padding-bottom: 2em;

  @media (max-width: 700px) {
    gap: 1em;
    padding-bottom: 3em;
  }
`;

const Card = styled(Link)`
  &:first-child {
    width: 38%;
  }

  &:last-child {
    width: 38%;
  }

  width: 58%;
  height: 300px;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.urlimg});
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.5em;

  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
    cursor: pointer;
  }

  h1 {
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 0.5em;
  }

  p {
    font-size: 14px;
    font-weight: 300;
  }

  @media (max-width: 700px) {
    width: 150px;
    height: 150px;

    h1 {
      font-size: 16px;
    }

    p {
      font-size: 10px;
    }

    &:first-child {
      width: 150px;
    }

    &:last-child {
      width: 150px;
    }
  }
`;

function Destaques() {
  const api = useApi();
  const loader = useContext(LoadContext);
  const [destaques, setDestaques] = useState([]);

  useEffect(() => {
    buscarDestaques();
  }, []);

  const buscarDestaques = async () => {
    loader.setLoading(true);

    const response = await api.buscarPorCategoria("destaque");
    setDestaques(response.content);

    loader.setLoading(false);
  };

  return (
    <>
      <BoxContainer titulo={"Destaques"}>
        <BoxCards>
          {destaques.map((destaque) => (
            <Card
              urlimg={destaque.img}
              key={destaque.id}
              to={`/tours${destaque.link}`}
            >
              <h1>{destaque.artista}</h1>
              <p>{destaque.nome}</p>
            </Card>
          ))}
        </BoxCards>
      </BoxContainer>
    </>
  );
}

export default Destaques;
