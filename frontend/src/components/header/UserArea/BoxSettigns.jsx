import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 250px;
  border-radius: 8px;
  background-color: white;
  top: 75px;
  transition: all 0.3s ease-in-out;
  gap: 1.5em;

  @media (max-width: 704px) {
    position: relative;
    align-items: flex-start;
    top: 50px;
    height: 50px;
    margin-bottom: 5em;
  }
`;

const Options = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5em 0em;
  gap: 0.8em;

  align-items: flex-start;
`;

const Option = styled(Link)`
  font-weight: 500;
  font-size: 14px;
  color: #525252;
  width: 100%;
  padding: 0.5em 0.5em;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
    background-color: #dfdfdf;
  }

  &:last-child {
    border-top: 1px solid gray;
    padding-top: 0.5em;
    font-weight: 600;

    &:hover {
      color: red;
    }
  }
`;

const DadosUser = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5em;

  p {
    font-size: 14px;
    font-weight: 700;
  }

  @media (max-width: 704px) {
    display: none;
  }
`;

const Foto = styled.div`
  width: 50px;
  height: 50px;
  font-size: 30px;
  background-color: gray;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

function BoxSettings({ nomeUser }) {
  return (
    <>
      <Container>
        <DadosUser>
          <Foto>{nomeUser[0]}</Foto>
          <p>{nomeUser}</p>
        </DadosUser>

        <Options>
          <Option to={"/perfil"}>Perfil</Option>
          <Option to={"/configuracoes"}>Configurações</Option>
          <Option to={"/sair"}>Sair</Option>
        </Options>
      </Container>
    </>
  );
}

export default BoxSettings;
