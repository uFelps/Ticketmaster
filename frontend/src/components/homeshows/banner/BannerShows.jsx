import styled from "styled-components";
import BarraDePesquisa from "../../home/banner/BarraDePesquisa";

const Container = styled.div`
  background-color: #101c34;

  height: 517px;
  margin-bottom: 4em;

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
  width: 500px;

  h1 {
    font-size: 40px;
    font-weight: 700;
    color: white;
  }

  h2 {
    font-size: 40px;
    font-weight: 700;
    color: #056de0;
    margin-bottom: 0.5em;
  }

  p {
    font-size: 18px;
    color: #d4d4d4;
    font-weight: 400;
  }
  @media (max-width: 704px) {
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1,
    h2 {
      font-size: 26px;
      text-align: center;
    }

    p {
      text-align: center;
      font-size: 12px;
    }
  }
`;

const Subtitle = styled.p``;

function BannerShows() {
  return (
    <>
      <Container>
        <Content>
          <Titles>
            <h1>Encontre concertos na</h1>
            <h2>América Latina</h2>
            <p>Busque seus artistas favoritos que estão em tour.</p>
          </Titles>
          <div></div>
        </Content>
        <BarraDePesquisa />
      </Container>
    </>
  );
}

export default BannerShows;
