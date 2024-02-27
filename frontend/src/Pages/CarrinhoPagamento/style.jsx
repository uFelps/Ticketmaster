import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Pagamento = styled.div`
  background-color: #ebebeb;
  width: 66%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5em 0em;

  @media (max-width: 1000px) {
    width: 100%;
    padding: 3em 0em 15em 0em;
  }
`;

export const ContentPagamento = styled.div`
  width: 60%;
  background-color: white;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    width: 100%;
    text-align: left;
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 1em;
  }
  @media (max-width: 1200px) {
    width: 90%;

    h1 {
      font-size: 20px;
      margin-bottom: 2em;
      text-align: center;
    }
  }
`;

export const Bandeiras = styled.div`
  display: flex;
  justify-content: center;
  gap: 2em;

  @media (max-width: 700px) {
    gap: 0.7em;
  }
`;

export const CardBandeira = styled.div`
  width: 70px;
  height: 50px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 15px;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    box-shadow: rgba(5, 109, 224, 0.25) 0px 5px 15px;
  }

  @media (max-width: 700px) {
    width: 60px;
    height: 40px;

    img {
      height: 30px;
    }
  }
`;
