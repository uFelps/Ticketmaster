import { IoClose } from "react-icons/io5";
import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 100%;

  background-color: #00000037;
`;

export const Content = styled.div`
  position: relative;
  background-color: white;
  width: 400px;
  height: 600px;
  border-radius: 8px;
  padding: 3em 2em 2em 2.5em;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 1em;
  text-align: center;

  p {
    font-size: 14px;
    font-weight: 400;
  }

  @media (max-width: 700px) {
    width: 350px;
    height: 600px;

    h1 {
      font-size: 18px;
    }

    p {
      font-size: 12px;
    }
  }
`;

export const Title = styled.h2`
  color: #056de0;
  font-size: 22px;
  font-weight: 600;
  margin: 0em 0em 0.5em 0em;
`;

export const IconClose = styled(IoClose)`
  position: absolute;
  top: 30px;
  right: 20px;
  font-size: 28px;

  &:hover {
    cursor: pointer;
    color: red;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: start;
  gap: 5em;
  width: 100%;
  padding: 0em 0em 2em 0em;

  div {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 1em;
    text-align: left;
  }

  label {
    font-weight: 700;
    font-size: 12px;
    color: #8d8d8d;
    margin-bottom: 0.5em;
  }

  p {
    font-size: 12px;
    font-weight: 500;
    color: black;
  }
`;

export const Ingressos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1em;
  overflow-y: auto;
  border-collapse: collapse;

  h1 {
    text-align: left;
    color: black;
    font-size: 16px;
    font-weight: 600;
    margin: 0;
  }
`;

export const Ingresso = styled.div`
  border: 1px solid #056de0;
  border-radius: 10px;
  text-align: left;
  padding: 1.5em 2em;
  display: flex;
  flex-direction: column;
  gap: 1em;

  div {
    display: flex;
    justify-content: space-between;
  }

  p {
    font-size: 16px;
    font-weight: 600;
    color: black;
  }

  h2 {
    font-size: 12px;
    font-weight: 600;
    color: #8d8d8d;
  }

  h3,
  h5 {
    font-size: 11px;
    font-weight: 500;
    color: #8d8d8d;
    margin-bottom: 0.5em;
  }

  h4,
  h6 {
    font-size: 12px;
    font-weight: 600;
  }
`;
