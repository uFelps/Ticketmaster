import { useState } from "react";
import styled from "styled-components";

export const Quantidade = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
`;

export const Button = styled.button`
  width: 40px;
  height: 40px;
  background-color: #d9d9d9;
  border-radius: 8px;
  border: none;
  font-size: 20px;
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #056de0;
    color: white;
  }

  @media (max-width: 900px) {
    width: 30px;
    height: 30px;
    font-size: 18px;
  }
`;

const Contador = styled.h3`
  font-size: 16px;

  @media (max-width: 900px) {
    display: inline;
    font-size: 14px;
  }
`;

function ButtonsQtdIngressos({ remove, ad, setor, tipo, valor }) {
  const [qtsIngressos, setQuantidade] = useState(0);

  return (
    <>
      <Quantidade>
        <Button
          onClick={() => {
            remove({
              setor: setor.nome,
              tipo: tipo,
              valor: valor,
            });
            setQuantidade(qtsIngressos === 0 ? 0 : qtsIngressos - 1);
          }}
        >
          -
        </Button>
        <Contador>{qtsIngressos}</Contador>
        <Button
          onClick={() => {
            ad({
              setor: setor.nome,
              tipo: tipo,
              valor: valor,
            });
            setQuantidade(qtsIngressos + 1);
          }}
        >
          +
        </Button>
      </Quantidade>
    </>
  );
}

export default ButtonsQtdIngressos;
