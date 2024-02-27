import { useEffect, useState } from "react";
import styled from "styled-components";
import { useApi } from "../../hooks/useApi";
import LogoMastercard from "../../assets/Mastercard-Logo.svg";
import LogoVisa from "../../assets/Visa-Logo.svg";
import { FiTrash } from "react-icons/fi";
import {
  notificationError,
  notificationSuccess,
} from "../../components/notifications/Notifications";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  h1 {
    font-size: 20px;
    font-weight: 600;
    color: #525252;
  }
`;

const Box = styled.div`
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px;
  height: 200px;
  padding: 2em;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 700px) {
    height: 100%;
  }
`;

const Cards = styled.div`
  display: flex;
  justify-content: start;
  gap: 1em;
  overflow-x: auto;
  border-collapse: collapse;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Card = styled.div`
  padding: 1.5em 1em 0.5em 1.5em;
  width: 250px;
  height: 140px;
  min-width: 250px;
  min-height: 140px;
  border-radius: 10px;
  background-color: white;
  color: black;
  border: 2px solid #727272;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 2em;
  border: 2px solid #056de0;

  i {
    color: red;
    font-size: 16px;
  }

  i:hover {
    cursor: pointer;
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

  @media (max-width: 700px) {
    h1,
    h2 {
      font-size: 12px;
    }

    h3,
    h4 {
      font-size: 10px;
    }

    div {
      img {
        width: 50px;
      }
    }
  }
`;

function Cartoes() {
  const api = useApi();
  const token = localStorage.getItem("authToken");
  const [cartoes, setCartoes] = useState([]);

  const buscarCartoes = async () => {
    const response = await api.buscarMeusCartoes(token);
    setCartoes(response.data);
  };

  const apagarCartao = async (numero) => {
    const response = await api.deletarCartao(numero, token);

    if (response.status == 200) {
      notificationSuccess("Cartão deletado com Sucesso");
      setCartoes([]);
    } else {
      notificationError("Erro ao deletar cartão");
    }
  };

  const handleClick = (numero) => {
    apagarCartao(numero);
  };

  useEffect(() => {
    buscarCartoes();
  }, []);

  return (
    <>
      {cartoes.length > 0 && (
        <Container>
          <h1>Cartões</h1>
          <Box>
            <Cards>
              {cartoes.map((cartao) => (
                <Card key={cartao.id}>
                  <span>
                    <h1>{cartao.titular}</h1>
                    <i>
                      <FiTrash onClick={() => handleClick(cartao.numero)} />
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
          </Box>
        </Container>
      )}
    </>
  );
}

export default Cartoes;
