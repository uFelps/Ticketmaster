import styled from "styled-components";
import GraficoBlue from "../../assets/grafico-blue.svg";
import GraficoOrange from "../../assets/grafico-orange.svg";
import Calendario from "../../assets/calendario.svg";
import { useApi } from "../../hooks/useApi";
import { useEffect } from "react";

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

const Cards = styled.div`
  display: flex;
  justify-content: start;
  gap: 1em;
  flex-wrap: wrap;

  @media (max-width: 1000px) {
    gap: 0em;
    justify-content: space-between;
  }
`;

const Card = styled.div`
  width: 250px;
  height: 120px;
  padding: 1.5em;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px;
  border-radius: 8px;
  display: flex;
  align-items: end;
  gap: 0.8em;

  img {
    width: 60px;
  }

  h1 {
    color: ${(props) => props.color};
    font-size: 40px;
  }

  h2 {
    color: #525252;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 0.2em;
  }

  h3 {
    color: ${(props) => props.color};
    font-size: 40px;
    font-weight: 600;
  }

  p {
    font-size: 10px;
    font-weight: 400;
    color: #727272;
  }

  @media (max-width: 1000px) {
    width: 30%;
    min-width: 100px;
    min-height: 160px;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 0.3em;
    padding: 1em;

    img {
      width: 40px;
    }

    h1 {
      font-size: 30px;
    }

    h2 {
      font-size: 12px;

      margin-bottom: 0.2em;
    }

    h3 {
      font-size: 30px;
    }

    p {
      font-size: 8px;
    }
  }
`;

function Estatisticas({ user }) {
  return (
    <>
      <Container>
        <h1>Estatísticas</h1>
        <Cards>
          <Card color={"#056DE0"}>
            <div>
              <h1>{user.shows}</h1>
              <h2>Shows</h2>
              <p>Você foi a {user.shows} shows ao redor da América Latina</p>
            </div>
            <img src={GraficoBlue} />
          </Card>
          <Card color={"#FF5F00"}>
            <div>
              <h1>{user.ingressosDisponiveis}</h1>
              <h2>Ingressos</h2>
              <p>Você tem {user.ingressosDisponiveis} ingressos disponíveis</p>
            </div>
            <img src={GraficoOrange} />
          </Card>
          <Card color={"#00BD4C"}>
            <div>
              <h3>
                {user.diasAteProximoShow === null
                  ? "?"
                  : user.diasAteProximoShow}
              </h3>
              <h2>Dias até o próximo show</h2>
            </div>
            <img src={Calendario} />
          </Card>
        </Cards>
      </Container>
    </>
  );
}

export default Estatisticas;
