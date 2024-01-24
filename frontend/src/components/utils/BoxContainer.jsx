import styled from "styled-components";

export const Container = styled.div`
  padding: 2.5em 0em;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 700px) {
    padding: 1.5em 0em;
  }
`;

export const Box = styled.div`
  width: 60%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  min-width: 500px;

  @media (max-width: 700px) {
    width: 90%;
    min-width: 100px;
  }
`;

export const Titulos = styled.div`
  width: 100%;
  h1 {
    color: #525252;
    font-weight: 600;
  }

  margin-bottom: 1.5em;

  @media (max-width: 700px) {
    div {
      display: none;
    }

    h1 {
      text-align: center;
    }
  }
`;

function BoxContainer({ children, titulo }) {
  return (
    <>
      <Container>
        <Box>
          <Titulos>
            <h1>{titulo}</h1>
            <div></div>
          </Titulos>
          {children}
        </Box>
      </Container>
    </>
  );
}

export default BoxContainer;
