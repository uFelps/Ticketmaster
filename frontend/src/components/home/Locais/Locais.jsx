import styled from "styled-components";
import BoxContainer from "../../utils/BoxContainer";
import { Button } from "../Eventos/Eventos";
import { useApi } from "../../../hooks/useApi";
import { useEffect, useState } from "react";
import { IoMdPin } from "react-icons/io";

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 1em;

  @media (max-width: 1000px) {
    flex-direction: column-reverse;
    justify-content: flex-end;
    width: 90%;
    gap: 1em;
  }
`;

const BoxCards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 1.5em;
`;

const Card = styled.div`
  display: flex;
  gap: 1em;

  h1 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 0.2em;
  }

  i {
    font-size: 13px;
    font-weight: 400;
  }

  p {
    font-size: 14px;
    font-weight: 600;
    margin: 1em 0em;
  }

  @media (max-width: 700px) {
    h1 {
      font-size: 14px;
    }

    i {
      font-size: 11px;
    }

    p {
      font-size: 12px;
      display: flex;
      gap: 0.5em;
    }
  }
`;

const ImgCard = styled.div`
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  width: 150px;
  height: 100px;
`;

const Local = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1em;
  div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1em;

    h1 {
      font-weight: 600;
      color: #525252;
    }
  }

  @media (max-width: 1200px) {
    div {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  @media (max-width: 1000px) {
    align-items: flex-start;
  }
`;

const Select = styled.select`
  width: 300px;
  height: 40px;
  padding: 0em 1em;
  font-size: 15px;
  border-radius: 8px;
  border: none;
  outline: none;
  background-color: #d9d9d9;
  font-weight: 600;
  font-family: "Inter", sans-serif;

  &:hover {
    cursor: pointer;
  }
`;

const ImgLocal = styled.div`
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  width: 500px;
  height: 500px;
  border-radius: 8px;

  @media (max-width: 1400px) {
    width: 300px;
    height: 300px;
  }

  @media (max-width: 1000px) {
    width: 0px;
    height: 0px;
  }
`;

function Locais() {
  const api = useApi();

  const [cidades, setCidades] = useState([]);
  const [selectValue, setSelectValue] = useState();

  const buscarCidades = async () => {
    const response = await api.buscarCidades();
    setCidades(response.content);
    setSelectValue(response.content[0].nome);
  };

  useEffect(() => {
    buscarCidades();
  }, []);

  const buscarShowsPorCidade = async (cidade) => {
    const response = await api.buscarShowsPorCidade(cidade);
    setShows(response.content);
  };

  useEffect(() => {
    buscarShowsPorCidade(selectValue);
  }, [selectValue]);

  const [shows, setShows] = useState([]);

  return (
    <>
      <BoxContainer>
        <Content>
          <BoxCards>
            {shows.map((show) => (
              <Card key={show.id}>
                <div>
                  <ImgCard src={show.imgUrl} />
                </div>
                <div>
                  <h1>{show.artista}</h1>
                  <i>{show.data}</i>
                  <p>
                    {<IoMdPin />}
                    {String(show.espaco).split("|")[0].trim()}
                  </p>
                  <Button to={`/tours${show.linkTour}`}>
                    Ingressos &#10132;
                  </Button>
                </div>
              </Card>
            ))}
          </BoxCards>
          <Local>
            <div>
              <h1>Cidade</h1>
              <Select
                value={selectValue}
                onChange={(e) => setSelectValue(e.target.value)}
              >
                {cidades.map((cidade) => (
                  <option key={cidade.id} value={cidade.nome}>
                    {cidade.nome}
                  </option>
                ))}
              </Select>
            </div>

            <ImgLocal src="https://github.com/uFelps/assets/blob/main/Ticketmaster/cards/allianz.jpeg?raw=true" />
          </Local>
        </Content>
      </BoxContainer>
    </>
  );
}

export default Locais;
