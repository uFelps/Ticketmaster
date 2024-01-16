import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import "./Reset.css";

const AppDiv = styled.div`
  width: 100%;
  height: 100%;
  font-family: "Inter", sans-serif;
`;

function App() {
  return (
    <AppDiv>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </AppDiv>
  );
}

export default App;
