import styled from "styled-components";
import InputMask from "react-input-mask";

export const ContentBox = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 851px) {
    width: 75%;
    padding: 3em 0em 5em 0em;
  }
`;

export const ContentContainer = styled.div`
  height: ${(props) => (props.height ? `${props.height}` : "500px")};
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 500px) {
    gap: 2em;
    height: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 0.3em;

  @media (max-width: 500px) {
    font-size: 24px;
  }
`;

export const Subtitle = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #525252;

  @media (max-width: 500px) {
    font-size: 12px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
`;

export const Button = styled.div`
  width: 100%;
  height: 40px;
  background-color: #056de0;
  color: white;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 16px;

  &:hover {
    background-color: white;
    color: #056de0;
    border: 1px solid #056de0;
  }
`;

export const Label = styled.label`
  font-size: 0.9rem;
  margin: 0 0 5px;
  font-weight: 400;
`;

export const Input = styled.input`
  outline: none;
  border: ${(props) => (props.error ? "1px solid red" : "1px solid #acacac")};
  border-radius: 5px;
  width: ${(props) => (props.width ? `${props.width}` : "100%")};
  height: 40px;
  padding: 1em;
  font-size: 0.9rem;
  font-family: "Inter", sans-serif;
  color: #838383;
  background-color: #ffffff;
  font-weight: 500;
  margin-top: 5px;

  &:focus {
    border: 2px solid #056de0;
    background-color: #f5f5f5;
  }
`;

export const InputMaskStyled = styled(InputMask)`
  outline: none;
  border: ${(props) => (props.error ? "1px solid red" : "1px solid #acacac")};
  border-radius: 5px;
  width: 100%;
  height: 40px;
  padding: 1em;
  font-size: 0.9rem;
  font-family: "Inter", sans-serif;
  color: #838383;
  background-color: #ffffff;
  font-weight: 500;
  margin-top: 5px;

  &:focus {
    border: 2px solid #056de0;
    background-color: #f5f5f5;
  }
`;

export const Container = styled.div`
  width: ${(props) => (props.tamanho == "p" ? "48%" : "100%")};
  margin-bottom: 10px;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const ErrorLabel = styled.p`
  color: red;
  font-size: 10px;
  font-weight: 600;
`;

export const EyeButton = styled.i`
  margin-left: 0.2em;
  font-size: 12px;
`;

export const AuthInfo = styled.div`
  width: 100%;
  border-top: 1px solid #c5c5c5;
  margin-top: 2em;
  padding: 2em 0em;
  p {
    font-size: 12px;
    font-weight: 500;
  }

  a {
    color: #056de0;
  }
`;
