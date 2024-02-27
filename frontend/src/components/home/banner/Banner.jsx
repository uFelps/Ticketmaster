import styled from "styled-components";
import BarraDePesquisa from "./BarraDePesquisa";

const Container = styled.div`
  background-image: url("https://github.com/uFelps/assets/blob/main/Ticketmaster/bg_banner.jpg?raw=true");
  background-size: cover;
  background-position: right;
  height: 517px;
  margin-bottom: 4em;

  @media (max-width: 704px) {
    background-image: url("https://github.com/uFelps/assets/blob/main/Ticketmaster/bg_mobile.jpg?raw=true");
    background-position: center;
  }

  @media (max-width: 704px) {
    height: 300px;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 92%;

  @media (max-width: 704px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Titles = styled.div`
  width: 400px;
  @media (max-width: 704px) {
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 700;
  color: white;
  margin-bottom: 0.5em;

  @media (max-width: 704px) {
    font-size: 26px;
    text-align: center;
  }
`;

const Subtitle = styled.p`
  font-size: 20px;
  color: #d4d4d4;
  font-weight: 400;

  @media (max-width: 704px) {
    font-size: 12px;
    text-align: center;
  }
`;

function Banner() {
  return (
    <>
      <Container>
        <Content>
          <Titles>
            <Title>Explore o universo da música</Title>
            <Subtitle>Descubra shows espalhados pela América Latina.</Subtitle>
          </Titles>
          <div></div>
        </Content>
        <BarraDePesquisa />
      </Container>
    </>
  );
}

export default Banner;
