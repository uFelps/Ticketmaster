import styled from "styled-components";
import BoxContainer from "../../utils/BoxContainer";
import { IoMdPin } from "react-icons/io";
import { Link } from "react-router-dom";

const Pin = styled(IoMdPin)`
  color: #056de0;
  margin-right: 0.5em;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 1em;

  @media (max-width: 1100px) {
    flex-direction: column;
    width: 90%;
    gap: 0em;
  }
`;

const Img = styled.div`
  width: 60%;
  height: 400px;
  background-image: url(${(props) => props.imgurl});
  background-size: cover;
  background-position: center;

  @media (max-width: 1100px) {
    width: 100%;
  }

  @media (max-width: 700px) {
    height: 150px;
    border-radius: 8px 8px 0px 0px;
  }
`;

const Content = styled.div`
  width: 40%;
  background-color: #101c34;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 3em;
  gap: 1em;

  h1 {
    font-size: 26px;
    font-weight: 600;
    margin-bottom: 0.5em;
  }
  h2 {
    font-size: 14px;
    font-weight: 300;
    color: #cecece;
  }

  i {
    font-size: 16px;
    font-weight: 400;
  }
  P {
    margin-top: 0.8em;
    font-size: 14px;
    font-size: 400;
  }

  @media (max-width: 1100px) {
    width: 100%;
  }

  @media (max-width: 700px) {
    border-radius: 0px 0px 8px 8px;
    padding: 2em;
    gap: 2em;

    h1 {
      font-size: 26px;
    }
    h2 {
      font-size: 12px;
      font-weight: 300;
      color: #cecece;
    }

    i {
      font-size: 14px;
      font-weight: 400;
    }
    P {
      margin-top: 0.8em;
      font-size: 12px;
      font-size: 400;
    }
  }
`;

const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-family: "Inter", sans-serif;
  color: white;
  font-weight: 500;
  width: 100px;
  height: 40px;
  background-color: #056de0;
  border: none;
  border-radius: 8px;

  &:hover {
    background-color: #2c3947;
    border: 1px solid white;
    cursor: pointer;
  }
`;

function EmAlta() {
  return (
    <>
      <BoxContainer titulo={"Em alta"}>
        <Container>
          <Img imgurl="https://github.com/uFelps/assets/blob/main/Ticketmaster/cards/thetown.jpg?raw=true"></Img>
          <Content>
            <div>
              <h1>The Town</h1>
              <h2>
                O maior festival de música, cultura e arte chega com tudo na
                cidade multicultural que é São Paulo. Serão mais de 235 horas de
                música, espalhadas por 8 grandes espaços, com 5 palcos.
              </h2>
            </div>
            <div>
              {" "}
              <i>{<Pin />}Autódromo de Interlagos </i>
              <p>6, 7, 13 e 14 de Setembro de 2025</p>
            </div>
            <Button to={"/festivais/thetown"}>Saiba Mais</Button>
          </Content>
        </Container>
      </BoxContainer>
    </>
  );
}

export default EmAlta;
