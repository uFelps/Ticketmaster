import styled from "styled-components";
import Login from "./Login";
import Signup from "./Signup";
import Header from "../../components/header/Header";

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;

  @media (max-width: 851px) {
    flex-direction: column;
    height: 100%;
  }
`;

const ImgBox = styled.div`
  height: 100%;
  width: 50%;
  background-image: url("https://github.com/uFelps/assets/blob/main/Ticketmaster/login_stage.jpg?raw=true");
  background-size: cover;
  background-position: center;

  @media (max-width: 851px) {
    display: none;
  }
`;

function AuthPage({ typeAuth }) {
  return (
    <>
      <Container>
        <ImgBox></ImgBox>
        {typeAuth == "login" ? <Login /> : <Signup />}
      </Container>
    </>
  );
}

export default AuthPage;
