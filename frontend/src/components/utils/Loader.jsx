import { useEffect } from "react";
import loading from "../../assets/load.json";
import Lottie from "react-lottie";
import styled from "styled-components";

const Container = styled.div`
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

  background-color: #ffffffd6;
`;

function Loader({ children }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading,
    renderer: "svg",
  };

  return (
    <>
      <Container>
        <Lottie options={defaultOptions} height={150} width={150} />
      </Container>
    </>
  );
}

export default Loader;
