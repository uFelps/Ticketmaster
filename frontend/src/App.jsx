import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import "./Reset.css";
import AuthPage from "./Pages/Auth/AuthPage";
import Tour from "./Pages/Tour/Tour";
import Show from "./Pages/Show/Show";

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
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route
            path="/auth/signup"
            element={<AuthPage typeAuth={"signup"} />}
          />
          <Route path="/auth/login" element={<AuthPage typeAuth={"login"} />} />
          <Route path="/tours/:nome" element={<Tour />} />
          <Route path="/tours/:nome/:cidade" element={<Show />} />
        </Routes>
      </BrowserRouter>
    </AppDiv>
  );
}

export default App;
