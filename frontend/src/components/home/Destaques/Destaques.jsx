import { useEffect, useState } from "react";
import styled from "styled-components";
import { useApi } from "../../../hooks/useApi";
import { LinkStyled } from "../../utils/LinkStyled";
import { Link } from "react-router-dom";

const Container = styled.div`
  padding: 5em 0em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Box = styled.div`
  width: 60%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  min-width: 800px;

  @media (max-width: 800px) {
    min-width: 300px;
  }
`;

const Titulos = styled.div`
  width: 100%;
  h1 {
    color: #525252;
    font-weight: 600;
  }

  margin-bottom: 3em;
`;

const BoxCards = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2em;

  @media (max-width: 800px) {
    flex-direction: column;
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
  background-position: right;
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

  @media (max-width: 900px) {
    width: 100%;

    h1 {
      font-size: 20px;
    }

    p {
      font-size: 12px;
    }

    &:first-child {
      width: 100%;
    }

    &:last-child {
      width: 100%;
    }
  }
`;

function Destaques() {
  const api = useApi();
  const [destaques, setDestaques] = useState([]);

  useEffect(() => {
    buscarDestaques();
  }, []);

  const buscarDestaques = async () => {
    const response = await api.buscarDestaques();
    setDestaques(response.content);
  };

  return (
    <>
      <Container>
        <Box>
          <Titulos>
            <h1>Destaques</h1>
            <div></div>
          </Titulos>

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
        </Box>
      </Container>
    </>
  );
}

export default Destaques;
