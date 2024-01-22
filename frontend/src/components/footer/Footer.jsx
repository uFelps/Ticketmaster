import styled from "styled-components";
import Logo from "../../assets/ticketmaster_logo.svg";
import { Link } from "react-router-dom";

const Container = styled.div`
  margin-top: 8em;
  padding: 5em 0em;
  width: 100%;
  background-color: #2c3947;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 2em;

  @media (max-width: 1100px) {
    flex-direction: column;
    gap: 4em;
  }
`;

const Conjunto = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8em;

  h1 {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 1em;
    color: white;
  }
`;

const Option = styled(Link)`
  color: #b3b3b3;
  font-size: 12px;
  font-weight: 500;

  &:hover {
    color: #056de0;
  }
`;

const BoxInfos = styled.div`
  width: 220px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;

  h1 {
    font-size: 12px;
    font-weight: 500;
  }

  p {
    font-size: 12px;
    font-weight: 300;
    color: #969696;
  }
`;

const ImgLogo = styled.img`
  width: 150px;
`;

function Footer() {
  return (
    <>
      <Container>
        <Content>
          <ImgLogo src={Logo} />

          <Conjunto>
            <h1>ACESSO RÁPIDO</h1>
            <Option to={"https://help.ticketmaster.com.br/hc/pt-br"}>
              Suporte ao Fã
            </Option>
          </Conjunto>
          <Conjunto>
            <h1>TERMOS E POLÍTICAS</h1>
            <Option to={"https://www.ticketmaster.com.br/static/termos-de-uso"}>
              Termo de Uso
            </Option>
            <Option
              to={"https://www.ticketmaster.com.br/static/politica-de-compra"}
            >
              Política de Compra
            </Option>
            <Option to={"https://privacy.ticketmaster.com.br/pt/cookie-policy"}>
              Política de Cookies
            </Option>
            <Option
              to={"https://privacy.ticketmaster.com.br/pt/privacy-policy"}
            >
              Política de Privacidade
            </Option>
          </Conjunto>
          <Conjunto>
            <h1>SOBRE A TICKETMASTER</h1>
            <Option to={"/"}>Ticketmaster Brasil</Option>
            <Option to={"https://www.ticketmaster.com"}>
              Ticketmaster Internacional
            </Option>
            <Option to={"https://www.linkedin.com/company/ticketmasterbr/"}>
              Trabalhe com a gente
            </Option>
          </Conjunto>
          <BoxInfos>
            <div>
              {" "}
              <p>
                ATENÇÃO: Este não é o site oficial da Tickemaster, foi
                desenvolvido apenas para estudo de software.
              </p>
              <p>
                Nenhuma compra realizada nesse site vai ser de fato concretizada
                e nenhum dos dados fornecidos pelo usuário será usada de forma
                maliciosa.
              </p>
            </div>
            <div>
              <h1>uFelps</h1>
              <h1> © 2024 Ticketmaster.</h1>
            </div>
          </BoxInfos>
        </Content>
      </Container>
    </>
  );
}

export default Footer;
