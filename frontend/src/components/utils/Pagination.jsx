import React from "react";
import styled from "styled-components";

const Container = styled.i`
  display: flex;
  align-items: center;
  margin-right: 2.3em;

  @media (max-width: 700px) {
    margin: 0;
  }
`;

const Button = styled.button`
  width: 25px;
  height: 25px;
  border-radius: 4px;
  background-color: #056de0;
  color: white;
  font-size: 10px;
  font-weight: 700;
  border: none;
  transition: all 1s;

  &:hover {
    background-color: #fff;
    border: 2px solid #056de0;
    color: #056de0;
    cursor: pointer;
  }
`;

const Text = styled.p`
  font-size: 14px;
  margin: 0px 10px 0px 10px;
  color: #000000;
  font-weight: 500;
`;

function Pagination({ dados, onChange }) {
  return (
    <Container>
      <Button disabled={dados.first} onClick={() => onChange(dados.number - 1)}>
        &lt;
      </Button>

      <Text>{`${dados.number + 1} de ${dados.totalPages}`}</Text>

      <Button disabled={dados.last} onClick={() => onChange(dados.number + 1)}>
        &gt;
      </Button>
    </Container>
  );
}

export default Pagination;
