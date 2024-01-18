import React from "react";
import styled from "styled-components";

export const Label = styled.label`
  font-size: 0.9rem;
  margin: 0 0 5px;
  font-weight: 400;
`;

export const Input = styled.input`
  outline: none;
  border: 1px solid #acacac;
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

const InputLabel = ({ tamanho, type, onChange, children }) => {
  return (
    <Container tamanho={tamanho}>
      <Label>{children}</Label>
      <Input type={type} onChange={onChange} autoComplete="on" />
    </Container>
  );
};

export default InputLabel;
