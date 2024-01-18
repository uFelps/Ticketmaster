import styled from "styled-components";
import Lupa from "../../../assets/lupa.svg";
import { useState } from "react";
import { useApi } from "../../../hooks/useApi";
import { LinkStyled } from "../../utils/LinkStyled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Barra = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: 704px) {
    height: 50px;
  }
`;

const Background = styled.div`
  width: 60%;
  background-color: #d9d9d9;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 704px) {
    width: 80%;
  }
`;

const Input = styled.input`
  height: 100%;
  width: 75%;
  background-color: #d9d9d9;
  font-size: 16px;
  font-weight: 600;
  margin-left: 2em;
  outline: none;
  border: none;

  @media (max-width: 704px) {
    font-size: 13px;
  }
`;

const ImgLupa = styled.img`
  width: 24px;
  margin-right: 2em;

  @media (max-width: 704px) {
    width: 16px;
  }
`;

const ContainerResults = styled.div`
  width: 60%;
  background-color: #d9d9d9;
  border-radius: 0px 0px 8px 8px;

  @media (max-width: 704px) {
    width: 80%;
  }
`;

const Tour = styled.div`
  h1 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 0.3em;
  }

  p {
    font-size: 14px;
    font-weight: 400;
  }
  padding: 1.5em 2em;

  &:hover {
    background-color: #cecece;
    color: #056de0;
  }

  @media (max-width: 704px) {
    h1 {
      font-size: 16px;
    }

    p {
      font-size: 12px;
    }
  }
`;

function BarraDePesquisa() {
  const api = useApi();

  const [input, setInput] = useState("");

  const [tours, setTours] = useState([]);

  const toursFiltradas = tours.filter((tour) => {
    if (
      tour.artista.toLowerCase().startsWith(input.toLowerCase()) ||
      tour.nome.toLowerCase().startsWith(input.toLowerCase())
    ) {
      return true;
    }
    return false;
  });

  const buscarTours = async () => {
    const response = await api.buscarTours();

    if (response != null) {
      setTours(response.content);
    }
  };

  return (
    <>
      <Container>
        <Barra>
          <Background>
            <Input
              type="text"
              onClick={buscarTours}
              placeholder="Escolha seu artista favorito:"
              onChange={(e) => setInput(e.target.value)}
            />
            <ImgLupa src={Lupa} />
          </Background>
        </Barra>

        {input != "" && (
          <ContainerResults>
            {toursFiltradas.map((tour) => (
              <LinkStyled to={`/tour${tour.link}`} key={tour.id}>
                <Tour>
                  <h1>{tour.artista}</h1>
                  <p>{tour.nome}</p>
                </Tour>
              </LinkStyled>
            ))}
          </ContainerResults>
        )}
      </Container>
    </>
  );
}

export default BarraDePesquisa;
