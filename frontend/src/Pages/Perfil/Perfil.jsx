import styled from "styled-components";

import Header from "../../components/header/Header";
import SectionProfile from "./Profile/SectionProfile";
import Estatisticas from "./Estatisticas";
import Pedidos from "./Pedidos/Pedidos";
import { useContext, useEffect, useState } from "react";
import { useApi } from "../../hooks/useApi";
import Cartoes from "./Cartoes";
import { Link, useNavigate } from "react-router-dom";
import { LoadContext } from "../../context/LoadContext";

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 8em;
  padding: 1em 4em 10em 4em;

  @media (max-width: 1000px) {
    flex-wrap: wrap;
    padding: 1em 2em 10em 2em;
    gap: 4em;
  }
`;

const ContainerPerfil = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
  justify-content: space-between;
  width: 300px;

  @media (max-width: 1000px) {
    flex-direction: row;
    justify-content: center;
    width: 100%;
  }

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const ContainerContent = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;
  gap: 2em;
`;

export const Button = styled(Link)`
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Inter", sans-serif;
  background-color: ${(props) => (props.type == "edit" ? "#056DE0" : "#fff")};
  color: ${(props) => (props.type == "edit" ? "#fff" : "#EB001B")};
  border: ${(props) => (props.type == "edit" ? "none" : "1px solid #EB001B")};
  font-weight: ${(props) => (props.type == "edit" ? "500" : "700")};
  margin-top: 1em;

  &:hover {
    cursor: pointer;
    box-shadow: ${(props) =>
      props.type == "edit"
        ? "rgba(5, 109, 224, 0.25) 0px 5px 15px"
        : "rgba(235, 0, 27, 0.15) 0px 5px 15px"};
  }

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

function Perfil() {
  const api = useApi();
  const token = localStorage.getItem("authToken");
  const loader = useContext(LoadContext);
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState({
    id: 0,
    nome: "",
    email: "",
    telefone: "",
    cpf: "",
    cidade: "",
    token: "",
    shows: 0,
    ingressosDisponiveis: 0,
    diasAteProximoShow: 0,
  });

  const buscarDadosDoPerfil = async () => {
    loader.setLoading(true);

    const response = await api.buscarDadosPerfil(token);
    setUsuario(response.data);

    loader.setLoading(false);
  };

  useEffect(() => {
    buscarDadosDoPerfil();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <ContainerPerfil>
          <SectionProfile user={usuario} />
        </ContainerPerfil>
        <ContainerContent>
          <Estatisticas user={usuario} />
          <Pedidos />
          <Cartoes />
        </ContainerContent>
      </Container>
    </>
  );
}

export default Perfil;
