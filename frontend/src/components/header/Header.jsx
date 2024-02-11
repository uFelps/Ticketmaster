import React from "react";
import styled from "styled-components";
import Logo from "../../assets/ticketmaster_logo.svg";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import UserArea from "./UserArea/UserArea";
import AuthButtons from "./Botoes Auth/AuthButtons";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const LogoTicketmaster = styled.img`
  width: 150px;
  color: black;

  @media (max-width: 704px) {
    width: 110px;
  }
`;

const IconMenu = styled(IoMdMenu)`
  display: none;
  font-size: 25px;

  @media (max-width: 704px) {
    display: flex;
  }
`;

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3em;

  @media (max-width: 704px) {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    background-color: white;
    padding: 8em 0em 0em 2em;
    width: 50%;
    height: 100%;
    position: fixed;
    bottom: 0;
    right: 0;
    top: 0;
    transition: all 0.3s ease-in-out;
    z-index: 9999;
    opacity: ${(props) => (props.isopen == "true" ? "1" : "0")};
    pointer-events: ${(props) => (props.isopen == "true" ? "auto" : "none")};
  }
`;

const Options = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2em;

  @media (max-width: 704px) {
    width: 100%;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;

    gap: 4em;
  }
`;

const Option = styled(Link)`
  font-size: 16px;
  font-weight: 600;
  color: #525252;
  border-bottom: 1px solid white;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #056de0;
    cursor: pointer;
  }
`;

const CloseIcon = styled(IoClose)`
  display: none;

  @media (max-width: 704px) {
    display: flex;
    position: fixed;
    top: 1em;
    right: 0.7em;
    font-size: 30px;
  }
`;

function Header() {
  const auth = useContext(AuthContext);

  const [open, setOpen] = useState(false);
  return (
    <>
      <Container>
        <Link to={"/"}>
          <LogoTicketmaster src={Logo} />
        </Link>

        <IconMenu onClick={() => setOpen(true)} />

        <Navbar isopen={open ? "true" : "false"}>
          <CloseIcon onClick={() => setOpen(false)} />
          <Options>
            <Option to={"/"}>Home</Option>
            <Option to={"/shows"}>Shows</Option>
            {auth.user && <Option to={"/meusingressos"}>Meus Ingressos</Option>}
          </Options>
          {auth.user ? <UserArea /> : <AuthButtons />}
        </Navbar>
      </Container>
    </>
  );
}

export default Header;
