import styled from "styled-components";

export const Container = styled.div`
  padding: 2em 0em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 55%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1em;

  h1 {
    color: #056de0;
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 0.3em;
  }

  h2 {
    font-size: 20px;
    font-weight: 300;
    margin-bottom: 1.5em;
  }

  h3 {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 0.3em;
  }

  h4 {
    font-weight: 400;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    text-align: center;
    gap: 2em;

    h1 {
      font-size: 30px;
    }

    h2 {
      font-size: 16px;
    }

    h3 {
      font-size: 16px;
      margin-bottom: 0.5em;
    }

    h4 {
      font-size: 12px;
    }
  }
`;

export const Img = styled.div`
  width: 260px;
  height: 260px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 180px;
  }
`;
