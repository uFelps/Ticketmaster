import React, { useContext, useState } from "react";
import styled from "styled-components";
import UserIcon from "../../../assets/user-icon.svg";
import { MdKeyboardArrowDown } from "react-icons/md";
import BoxSettings from "./BoxSettigns";
import { AuthContext } from "../../../context/AuthContext";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 704px) {
    padding: 0em 0em 3em 0em;
    flex-direction: column-reverse;
    align-items: flex-start;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 15px;
    font-weight: 600;
  }

  &:hover {
  }

  @media (max-width: 704px) {
    margin: 2em 0em 0em 0em;
    gap: 0.5em;
  }
`;

const UserImg = styled.img`
  width: 30px;
  height: 30px;
`;

const NomeUser = styled.h1`
  display: none;

  @media (max-width: 704px) {
    display: block;
    width: 60px;
  }
`;

const Triangle = styled(MdKeyboardArrowDown)`
  font-size: 20px;
  transition: all 0.3s ease-in-out;
  transform: scaleY(${(props) => (props.aligin == "cima" ? "1" : "-1")});

  @media (max-width: 704px) {
    transform: scaleY(${(props) => (props.aligin == "cima" ? "-1" : "1")});
  }
`;

function UserArea() {
  const [boxSettings, setBoxSettings] = useState(false);
  const auth = useContext(AuthContext);

  return (
    <>
      <Box>
        <Container onClick={() => setBoxSettings(!boxSettings)}>
          <UserImg src={UserIcon} />
          <NomeUser>{auth.user}</NomeUser>
          <Triangle aligin={boxSettings ? "baixo" : "cima"} />
        </Container>
        {boxSettings && <BoxSettings nomeUser={auth.user} />}
      </Box>
    </>
  );
}

export default UserArea;
