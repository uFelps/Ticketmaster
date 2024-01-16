import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 1em;

  @media (max-width: 704px) {
    width: 100%;
    flex-direction: column-reverse;
    align-items: flex-start;
    padding-bottom: 1.5em;
  }
`;

const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  width: 100px;
  height: 45px;
  border-radius: 8px;
  background-color: ${(props) => (props.color == "Blue" ? "#056DE0" : "White")};
  border: 1px solid #056de0;
  color: ${(props) => (props.color == "Blue" ? "White" : "#056DE0")};
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 704px) {
    width: 90%;
  }
`;

function AuthButtons() {
  return (
    <>
      <Container>
        <Button to={"/signup"} color="White">
          Signup
        </Button>
        <Button to={"/"} color="Blue">
          Login
        </Button>
      </Container>
    </>
  );
}

export default AuthButtons;
