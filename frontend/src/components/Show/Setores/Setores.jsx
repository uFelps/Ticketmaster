import styled from "styled-components";
import ButtonsQtdIngressos from "../buttonsQtdIngressos/ButtonsQtdIngressos";
import { useApi } from "../../../hooks/useApi";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import {
  notificationError,
  notificationSuccess,
} from "../../../components/notifications/Notifications";

const Container = styled.div`
  padding: 2em 0em 10em 0em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4em;
`;
const colors = ["#056de0", "#011631", "#00b95c", "#00626d"];

const Box = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4em;

  @media (max-width: 900px) {
    width: 85%;

    align-items: center;
  }
`;

const Setor = styled.div`
  width: 100%;
`;
const Title = styled.h1`
  border-left: 8px solid ${(props) => props.cor};
  font-size: 18px;
  font-weight: 500;
  padding: 0em 0.5em;
  margin-bottom: 2em;

  @media (max-width: 900px) {
    font-size: 16px;
    margin-bottom: 1em;
  }
`;
const BoxSetor = styled.div`
  height: 200px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 8px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0em 4em;

  @media (max-width: 900px) {
    padding: 0em 2em;
  }
`;
const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1,
  h2 {
    width: 80px;
    font-weight: 500;
    font-size: 17px;
  }

  @media (max-width: 900px) {
    padding: 0em 0em;

    h1,
    h2 {
      width: 60px;
      font-size: 14px;
    }

    p {
      display: none;
    }
  }
`;

const BoxButton = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  gap: 1em;

  p {
    font-size: 14px;
  }
`;

const ButtonCarrinho = styled(Link)`
  padding: 1em 2em;
  background-color: #056de0;
  color: white;
  border-radius: 8px;

  &:hover {
    background-color: white;
    color: #056de0;
    border: 1px solid #056de0;
  }
`;

function Setores({ show }) {
  const api = useApi();

  const navigate = useNavigate();

  const [setores, setSetores] = useState([]);

  const auth = useContext(AuthContext);

  const BuscarSetoresPorEstadio = async () => {
    const response = await api.buscarSetoresPorEstadio(
      show?.espaco?.split(" | ")[0]
    );
    setSetores(response);
  };

  const [ingressosEscolhido, setingressosEscolido] = useState([]);

  const adicionarIngresso = (ingresso) => {
    setingressosEscolido([
      ...ingressosEscolhido,
      {
        setor: ingresso.setor,
        tipo: ingresso.tipo,
        valor: ingresso.valor,
        show: show,
      },
    ]);
  };

  const removerIngresso = (ingresso) => {
    const list = [...ingressosEscolhido];
    var index = 0;

    for (var i = 0; i < ingressosEscolhido.length; i++) {
      if (list[i].tipo === ingresso.tipo && list[i].setor === ingresso.setor) {
        index = i;
        break;
      }
    }

    const newlist = list.splice(index, 1);

    setingressosEscolido(list);
  };

  useEffect(() => {
    BuscarSetoresPorEstadio();
  }, [show]);

  const handleSubmit = () => {
    salvarItens();
  };

  const salvarItens = async () => {
    const token = localStorage.getItem("authToken");

    if (ingressosEscolhido.length <= 5) {
      try {
        const response = await api.salvarItensCarrinho(
          ingressosEscolhido,
          auth.email,
          token
        );

        if (response.status == 200) {
          notificationSuccess("Itens Adicionados ao Carrinho");
          navigate("/carrinho");
        }
      } catch (e) {
        notificationError("Erro: " + e.response.data.message);
      }
    } else {
      notificationError("Você não pode comprar mais de 5 ingressos");
    }
  };

  return (
    <>
      <Container>
        <Box>
          {setores.map((setor, index) => (
            <Setor key={setor.id}>
              <Title cor={colors[index]}>{setor.nome}</Title>
              <BoxSetor>
                <Row>
                  <h1>Inteira</h1>
                  <h2>R$ {setor.precoInteira}</h2>
                  <ButtonsQtdIngressos
                    remove={removerIngresso}
                    ad={adicionarIngresso}
                    setor={setor}
                    tipo={"Inteira"}
                    valor={setor.precoInteira}
                  />
                  <p>Disponível</p>
                </Row>
                <Row>
                  <h1>Meia</h1>
                  <h2>R$ {setor.precoMeia}</h2>
                  <ButtonsQtdIngressos
                    remove={removerIngresso}
                    ad={adicionarIngresso}
                    setor={setor}
                    tipo={"Meia"}
                    valor={setor.precoMeia}
                  />
                  <p>Disponível</p>
                </Row>
              </BoxSetor>
            </Setor>
          ))}

          <BoxButton>
            <p>
              {ingressosEscolhido.length >= 2
                ? `${ingressosEscolhido.length} Ingressos Selecionados`
                : `${ingressosEscolhido.length} Ingresso Selecionado`}
            </p>
            <ButtonCarrinho onClick={() => handleSubmit()}>
              Ir para o carrinho
            </ButtonCarrinho>
          </BoxButton>
        </Box>
      </Container>
    </>
  );
}

export default Setores;
