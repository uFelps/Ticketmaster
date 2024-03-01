import styled from "styled-components";

import "./Reset.css";

import React from "react";

import RoutesApp from "./RoutesApp";

const AppDiv = styled.div`
  width: 100%;
  height: 100%;
  font-family: "Inter", sans-serif;
  margin: 0;
  padding: 0;
`;

function App() {
  return (
    <AppDiv>
      <RoutesApp />
    </AppDiv>
  );
}

export default App;
