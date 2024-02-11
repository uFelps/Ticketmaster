import styled from "styled-components";
import NoTicket from "../../assets/no-ticket.svg";

const Container = styled.div`
  padding: 10em 0em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  img {
    width: 200px;
  }

  h1 {
    font-size: 24px;
    font-weight: 600;

    margin: 1em 0em 0.5em 0em;
  }

  p {
    font-size: 16px;
    font-weight: 400;
    color: #727272;
  }

  @media (max-width: 1000px) {
    padding: 5em 1em;

    img {
      width: 100px;
    }

    h1 {
      font-size: 24px;
    }

    p {
      font-size: 14px;
    }
  }
`;

function NoIngressos() {
  return (
    <>
      <Container>
        <img src={NoTicket} />
        <h1>Nenhum Ingresso Disponível</h1>
        <p>
          Você ainda não tem ingressos disponíveis, volte para home e explore os
          shows.
        </p>
      </Container>
    </>
  );
}

export default NoIngressos;
