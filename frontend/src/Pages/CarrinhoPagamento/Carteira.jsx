import styled from "styled-components";
import CarteiraImg from "../../assets/carteira.svg";
import { useEffect, useState } from "react";
import { useApi } from "../../hooks/useApi";

import LogoMastercard from "../../assets/Mastercard-Logo.svg";
import LogoVisa from "../../assets/Visa-Logo.svg";
import { FaRegCheckCircle } from "react-icons/fa";

const colors = ["#056DE0", "#ff6c04", "#000000"];

const Container = styled.div`
  padding: 4em;

  @media (max-width: 700px) {
    padding: 5em 2em;
  }
`;

const CarteiraVazia = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img {
    width: 100px;
    margin-bottom: 1em;
  }

  h6 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 0.5em;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    color: #727272;
  }

  @media (max-width: 700px) {
    img {
      width: 70px;
    }

    h6 {
      font-size: 16px;
    }

    p {
      font-size: 12px;
    }
  }
`;

const Cards = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
`;

export const Card = styled.div`
  padding: 1.5em 1em 0.5em 1.5em;
  width: 270px;
  height: 160px;
  border-radius: 10px;
  background-color: white;
  color: black;
  border: 2px solid #727272;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 2em;

  border: ${(props) => props.selecionado && "2px solid #056DE0"};

  i {
    display: ${(props) => (props.selecionado ? "inline" : "none")};
    color: #056de0;
    font-size: 16px;
  }

  span {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    font-size: 14px;
    font-weight: 600;
    text-align: left;
    margin: 0;
  }

  h2 {
    font-size: 14px;
    font-weight: 400;
  }

  h3,
  h4 {
    font-size: 12px;
    font-weight: 500;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

function Carteira({ onSubmit }) {
  const api = useApi();
  const token = localStorage.getItem("authToken");

  const [cartoes, setCartoes] = useState([]);

  const BuscarCartoes = async () => {
    const response = await api.buscarMeusCartoes(token);
    setCartoes(response.data);
  };

  const [cartaoSelecionado, setCartaoSelecionado] = useState();
  const handleSelect = (cartao) => {
    setCartaoSelecionado(cartao);

    onSubmit("titular", cartao.titular);
    onSubmit("numero", cartao.numero);
    onSubmit("cvv", cartao.cvv);
    onSubmit("validade", cartao.validade);
    onSubmit("saveCartao", cartao.saveCartao);
    onSubmit("bandeira", cartao.bandeira);
  };

  useEffect(() => {
    BuscarCartoes();
  }, []);
  return (
    <>
      <Container>
        {cartoes.length > 0 ? (
          <Cards>
            {cartoes.map((cartao, index) => (
              <Card
                key={cartao.id}
                color={colors[index]}
                onClick={() => handleSelect(cartao)}
                selecionado={cartao === cartaoSelecionado}
              >
                <span>
                  <h1>{cartao.titular}</h1>
                  <i>
                    <FaRegCheckCircle />
                  </i>
                </span>

                <div>
                  <h2>**** **** **** {cartao.numIdentificador}</h2>
                  <img
                    src={
                      cartao.bandeira == "Mastercard"
                        ? LogoMastercard
                        : LogoVisa
                    }
                  />
                </div>
              </Card>
            ))}
          </Cards>
        ) : (
          <CarteiraVazia>
            <img src={CarteiraImg} />
            <h6>Sua carteira está vazia</h6>
            <p>Salve cartões para usar em compras futuras</p>
          </CarteiraVazia>
        )}
      </Container>
    </>
  );
}

export default Carteira;
