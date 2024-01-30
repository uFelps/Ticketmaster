import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import Lixeira from "../../assets/lixeira.svg";

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const MeuCarrinho = styled.div`
  background-color: #ebebeb;
  width: 66%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5em 0em;
`;

const ContentCarrinho = styled.div`
  width: 60%;

  h1 {
    width: 100%;
    text-align: left;
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 1em;
  }
  @media (max-width: 1000px) {
    width: 90%;
  }
`;

const Resumo = styled.div`
  background-color: white;
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 90vh;
`;

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
`;

const Card = styled.div`
  display: flex;
  background-color: white;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
  padding: 1em 1em 1em 3em;

  h2 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 0.3em;
  }

  h3 {
    font-size: 14px;
    font-weight: 300;
    margin-bottom: 3em;
  }

  h4 {
    font-size: 14px;
    font-weight: 500;
  }

  h5 {
    color: #056de0;
    font-weight: 600;
    font-size: 18px;
  }

  div {
    margin: 3em 0em 0em 0em;
    display: flex;
    justify-content: space-between;
  }

  img {
    width: 20px;
    height: 20px;
  }

  img:hover {
    cursor: pointer;
  }
`;

const Img = styled.div`
  width: 225px;
  height: 225px;
  background-image: url(${(props) => props.src});
  background-position: center;
  background-size: cover;
`;

const ResumoContent = styled.div`
  margin-top: 5em;
  width: 60%;

  display: flex;
  flex-direction: column;
  gap: 2em;

  h1 {
    text-align: left;
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 2em;
  }
  button {
    background-color: #056de0;
    padding: 0.8em;
    border-radius: 8px;
    color: white;
    font-size: 17px;
    font-weight: 500;
    border: none;
  }

  button:hover {
    background-color: white;
    color: #056de0;
    border: 1px solid #056de0;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  h2 {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 0.5em;
    color: #525252;
  }

  h3 {
    font-size: 14px;
    font-weight: 400;
    color: #727272;
  }

  h4 {
    font-size: 16px;
    font-weight: 600;
    color: #056de0;
  }

  h5 {
    font-size: 16px;
    color: #727272;
    font-weight: 500;
    margin-top: 1em;
  }

  h6 {
    margin-top: 2em;
    font-weight: 700;
    font-size: 20px;
  }

  p {
    font-weight: 700;
    font-size: 20px;
    color: #056de0;
  }
`;

function Carrinho() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.user) {
      navigate("/auth/login");
    }
  }, []);

  const shows = [
    {
      id: 1,
      artista: "Tame Impala",
      espaco: "Allianz Parque",
      data: "25 de Abril de 2025",
      img: "https://github.com/uFelps/assets/blob/main/Ticketmaster/imgs/tameimapla1.jpg?raw=true",
      ingresso: {
        setor: "Cadeira Superior",
        tipo: "Meia-Entrada",
        preco: 400.0,
      },
    },
    {
      id: 2,
      artista: "Tame Impala",
      espaco: "Allianz Parque",
      data: "25 de Abril de 2025",
      img: "https://github.com/uFelps/assets/blob/main/Ticketmaster/imgs/tameimapla1.jpg?raw=true",
      ingresso: {
        setor: "Cadeira Superior",
        tipo: "Meia-Entrada",
        preco: 400.0,
      },
    },
  ];

  const CalcularTotal = () => {
    let total = 0;
    shows.map((show) => {
      total += show.ingresso.preco;
    });

    return total;
  };

  return (
    <>
      <Header />
      <Container>
        <MeuCarrinho>
          <ContentCarrinho>
            {" "}
            <h1>Meu Carrinho</h1>
            <Cards>
              {shows.map((show) => (
                <Card key={show.id}>
                  <Img src={show.img} />
                  <CardContent>
                    <h2>{show.artista}</h2>
                    <h3>
                      {show.ingresso.setor} | {show.ingresso.tipo}
                    </h3>

                    <h4>{show.espaco}</h4>
                    <h4>{show.data}</h4>
                    <div>
                      <h5>R$ {show.ingresso.preco},00</h5>
                      <i>
                        <img src={Lixeira} />
                      </i>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </Cards>
          </ContentCarrinho>
        </MeuCarrinho>
        <Resumo>
          <ResumoContent>
            <h1>Resumo</h1>
            {shows.map((show) => (
              <Row key={show.id}>
                <div>
                  <h2>{show.artista}</h2>
                  <h3>{show.espaco}</h3>
                </div>
                <h4>R$ {show.ingresso.preco},00</h4>
              </Row>
            ))}
            <Row>
              <h5>Taxa de Serviço</h5>
              <h4>Grátis</h4>
            </Row>
            <Row>
              <h6>Total:</h6>
              <p>R${CalcularTotal()},00</p>
            </Row>
            <button>Finalizar Pedido</button>
          </ResumoContent>
        </Resumo>
      </Container>
    </>
  );
}

export default Carrinho;
