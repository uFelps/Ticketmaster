import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const MeuCarrinho = styled.div`
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

export const ContentCarrinho = styled.div`
  width: 60%;

  h1 {
    width: 100%;
    text-align: left;
    font-size: 28px;
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

export const Resumo = styled.div`
  background-color: white;
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 90vh;

  @media (max-width: 1000px) {
    min-height: 0px;
    width: 100%;
    position: fixed;
    bottom: 0;
    border-radius: 10px;
  }
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
`;

export const Card = styled.div`
  display: flex;
  background-color: white;

  @media (max-width: 1000px) {
    border-radius: 8px;
    height: 150px;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
  padding: 1em 1em 1em 3em;

  h2 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 0.3em;
  }

  h3 {
    font-size: 14px;
    font-weight: 300;
    margin-bottom: 2em;
  }

  h4 {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 0.5em;
  }

  h5 {
    color: #056de0;
    font-weight: 600;
    font-size: 18px;
  }

  div {
    margin: 3em 0em 0em 0em;
    display: flex;
    justify-content: space-between;
  }

  img {
    width: 20px;
    height: 20px;
  }

  img:hover {
    cursor: pointer;
  }

  @media (max-width: 1000px) {
    width: 70%;
    padding: 1em;

    h2 {
      font-size: 14px;
    }

    h3 {
      font-size: 12px;
      margin-bottom: 1em;
    }

    h4 {
      font-size: 10px;
    }

    h5 {
      font-size: 14px;
    }

    div {
      margin: 1em 0em 0em 0em;
      display: flex;
      justify-content: space-between;
    }

    img {
      width: 15px;
      height: 15px;
    }
  }
`;

export const Img = styled.div`
  width: 225px;
  height: 225px;
  background-image: url(${(props) => props.src});
  background-position: center;
  background-size: 22em;

  @media (max-width: 1000px) {
    width: 150px;
    height: 150px;
    border-radius: 8px 0px 0px 8px;
  }
`;

export const ResumoContent = styled.div`
  margin-top: 5em;
  width: 60%;

  display: flex;
  flex-direction: column;
  gap: 2em;

  h1 {
    text-align: left;
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 2em;
  }

  @media (max-width: 1000px) {
    width: 80%;
    margin-top: 0em;
    padding-bottom: 2em;

    h1 {
      display: none;
    }
  }
`;

export const Button = styled(Link)`
  text-align: center;
  background-color: #056de0;
  padding: 0.8em;
  border-radius: 8px;
  color: white;
  font-size: 17px;
  font-weight: 500;
  border: none;

  &:hover {
    background-color: white;
    color: #056de0;
    border: 1px solid #056de0;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  h2 {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 0.5em;
    color: #525252;
  }

  h3 {
    font-size: 14px;
    font-weight: 400;
    color: #727272;
  }

  h4 {
    font-size: 16px;
    font-weight: 600;
    color: #056de0;
  }

  h5 {
    font-size: 16px;
    color: #727272;
    font-weight: 500;
    margin-top: 1em;
  }

  h6 {
    margin-top: 2em;
    font-weight: 700;
    font-size: 20px;
  }

  p {
    font-weight: 700;
    font-size: 20px;
    color: #056de0;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const Row2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  h6 {
    margin-top: 2em;
    font-weight: 700;
    font-size: 20px;
  }

  p {
    font-weight: 700;
    font-size: 20px;
    color: #056de0;
  }

  @media (max-width: 1000px) {
    h6 {
      font-size: 16px;
      font-weight: 400;
    }
  }
`;
