import styled from "styled-components";
import CodigoBarras from "../../assets/codigoBarras.svg";
import { IoClose } from "react-icons/io5";
import Check from "../../components/utils/Check";
import { useState } from "react";
import { useApi } from "../../hooks/useApi";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 100%;

  background-color: #00000037;
`;

const Content = styled.div`
  background-color: white;
  width: 400px;

  border-radius: 8px;

  @media (max-width: 700px) {
    width: 300px;
  }
`;

const Header = styled.div`
  position: relative;
  padding: 2em 3em;
  h1 {
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 0.3em;
  }
  h2 {
    font-size: 14px;
    font-weight: 500;
    color: #8d8d8d;
  }

  border-bottom: 1px solid #c0c0c0;

  @media (max-width: 700px) {
    padding: 2em;
    h1 {
      font-size: 18px;
    }

    h2 {
      font-size: 12px;
    }
  }
`;

const Data = styled.div`
  padding: 3em;
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2em;
  }

  @media (max-width: 700px) {
    padding: 1.5em;
  }
`;

const Label = styled.i`
  width: 130px;

  h1 {
    font-size: 12px;
    font-weight: 700;
    color: #8d8d8d;
    margin-bottom: 0.4em;
  }

  p {
    font-size: 15px;
    font-weight: 500;
  }

  @media (max-width: 700px) {
    width: 100px;
    h1 {
      font-size: 10px;
    }

    p {
      font-size: 13px;
    }
  }
`;

const Codigo = styled.div`
  width: 400px;
  padding: 2em 3em;
  border-top: 1px solid #c0c0c0;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  background-color: white;

  button {
    background-color: #056de0;
    color: white;
    border: none;
    border-radius: 8px;
    width: 100%;
    height: 40px;
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-weight: 500;
  }

  button:hover {
    cursor: pointer;
    background-color: white;
    border: 1px solid #056de0;
    color: #056de0;
  }

  img {
    width: 100%;
  }

  @media (max-width: 700px) {
    width: 300px;
  }

  button {
    font-size: 12px;
  }
`;

const IconClose = styled(IoClose)`
  position: absolute;
  top: 30px;
  right: 20px;
  font-size: 28px;

  &:hover {
    cursor: pointer;
    color: red;
  }
`;

function PopUpIngresso({ ingresso, setIngresso }) {
  const api = useApi();
  const token = localStorage.getItem("authToken");

  const handleClose = () => {
    setIngresso(null);
  };

  const [ingressoAberto, setIngressoAberto] = useState(false);

  const handleAbrirIngresso = () => {
    setIngressoAberto(true);
    const response = api.validarIngresso(ingresso.id, token);
  };

  return (
    <>
      <Container>
        <Content>
          <Header>
            <h1>1x {ingresso.show.artista}</h1>
            <h2>{ingresso.show.tour}</h2>
            <IconClose onClick={() => handleClose()} />
          </Header>
          <Data>
            <div>
              <Label>
                <h1>LOCAL</h1>
                <p>{ingresso.show.espaco}</p>
              </Label>

              <Label>
                <h1>TIPO</h1>
                <p>{ingresso.tipo}</p>
              </Label>

              <Label>
                <h1>VALOR</h1>
                <p>R$ {ingresso.valor},00</p>
              </Label>
            </div>
            <div>
              <Label>
                <h1>DATA</h1>
                <p>{ingresso.show.data}</p>
              </Label>
              <Label>
                <h1>SETOR</h1>
                <p>{ingresso.setor}</p>
              </Label>
              <Label>
                <h1>TITULAR</h1>
                <p>{ingresso.usuario}</p>
              </Label>
            </div>
          </Data>
        </Content>
        <Codigo>
          <img src={CodigoBarras} />
          <button onClick={() => handleAbrirIngresso()}>
            Validar Ingresso
          </button>
        </Codigo>
        {ingressoAberto && (
          <Check h1={"Ingresso Validado"} p={"Aproveite o show!"} url={"/"} />
        )}
      </Container>
    </>
  );
}

export default PopUpIngresso;
