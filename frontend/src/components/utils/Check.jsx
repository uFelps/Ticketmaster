import Lottie from "react-lottie";
import checkIcon from "../../assets/check.json";
import loading from "../../assets/loading.json";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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

  background-color: #00000037;
`;

const Content = styled.div`
  background-color: white;
  width: 400px;
  height: 500px;
  border-radius: 8px;
  padding: 2em;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;

  h1 {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 0.5em;
  }

  p {
    font-size: 14px;
    font-weight: 400;
  }

  button {
    background-color: #056de0;
    color: white;
    border: none;
    border-radius: 8px;
    width: 100%;
    height: 40px;
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-weight: 500;
  }

  button:hover {
    cursor: pointer;
  }

  @media (max-width: 700px) {
    width: 300px;
    height: 400px;

    h1 {
      font-size: 18px;
    }

    p {
      font-size: 12px;
    }
  }
`;

function Check({ h1, p, url }) {
  const navigate = useNavigate();
  const defaultOptions1 = {
    loop: false,
    autoplay: true,
    animationData: checkIcon,
    renderer: "svg",
  };

  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: loading,
    renderer: "svg",
  };

  const [isLoaded, setLoad] = useState(false);

  const loopingLoad = () => {
    setInterval(() => {
      setLoad(true);
    }, 2000);
  };

  useEffect(() => {
    loopingLoad();
  }, []);

  const handleClick = (url) => {
    navigate(url);
  };

  return (
    <>
      <Container>
        <Content>
          {isLoaded ? (
            <>
              <Lottie options={defaultOptions1} height={100} width={100} />
              <div>
                <h1>{h1}</h1>
                <p>{p}</p>
              </div>
              <button onClick={() => handleClick(url)}>OK</button>
            </>
          ) : (
            <Lottie options={defaultOptions2} height={100} width={100} />
          )}
        </Content>
      </Container>
    </>
  );
}

export default Check;
