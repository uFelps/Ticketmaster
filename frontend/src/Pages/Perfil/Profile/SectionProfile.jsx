import styled from "styled-components";
import { Button } from "../Perfil";
import ImgUser from "../../../assets/imguser.svg";

import React, { useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import EditProfile from "./EditProfile";
import EditSenha from "./EditSenha";

const DataPerfil = styled.div`
  height: 470px;
  padding: 0.5em 2em;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  i {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  aside {
    text-align: center;
  }

  img {
    width: 125px;
    margin-bottom: 1.5em;
  }

  h2 {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 0.5em;
  }

  h3 {
    font-size: 14px;
    font-weight: 500;
    color: #525252;
    margin: 0.3em 0em;
  }

  @media (max-width: 1000px) {
    min-width: 300px;
  }

  @media (max-width: 600px) {
    height: 300px;

    img {
      width: 75px;
      margin: 0;
    }

    div {
      gap: 1em;
    }

    aside {
    }

    i {
      flex-direction: row;
      gap: 1em;
    }
  }
`;

const BoxSenha = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 18px;
    font-weight: 600;
    color: #525252;
    margin-bottom: 0.5em;
  }

  div {
    width: 100%;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px;
    padding: 2em;
  }

  ul {
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;
  }

  label {
    font-size: 12px;
    font-weight: 600;
    color: #727272;
    margin-bottom: 0.3em;
  }

  input {
    height: 30px;
    padding-left: 2em;
    border-radius: 8px;
    outline: none;
    border: none;
    background-color: #d9d9d9;
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-weight: 500;
    color: #727272;
  }

  @media (max-width: 1000px) {
    min-width: 300px;
    h1 {
      display: none;
    }
  }

  @media (max-width: 700px) {
    div {
      padding: 2em 3em;
    }
  }
`;

function SectionProfile({ user }) {
  const auth = React.useContext(AuthContext);

  const [editOpen, setEditOpen] = useState(false);
  const [editSenhaOpen, setEditSenhaOpen] = useState(false);
  return (
    <>
      {" "}
      <DataPerfil>
        <div>
          <img src={ImgUser} />
          <aside>
            <h2>{user.nome}</h2>
            <h3>{user.email}</h3>
            <h3>{user.cidade}</h3>
            <h3>{user.telefone}</h3>
          </aside>
        </div>
        <i>
          <Button type="edit" onClick={() => setEditOpen(true)}>
            Editar Dados
          </Button>
          <Button
            onClick={() => {
              auth.signout();
            }}
            to={"/"}
          >
            Finalizar Sessão
          </Button>
        </i>
      </DataPerfil>
      <BoxSenha>
        <h1>Senha</h1>
        <div>
          <ul>
            <label>EMAIL</label>
            <input type="text" value={user.email} disabled />
          </ul>
          <ul>
            <label>SENHA</label>
            <input type="password" value={"password"} disabled />
          </ul>
          <Button type="edit" onClick={() => setEditSenhaOpen(true)}>
            Alterar Senha
          </Button>
        </div>
      </BoxSenha>
      {editOpen && <EditProfile setEditOpen={setEditOpen} usuario={user} />}
      {editSenhaOpen && <EditSenha setEditSenhaOpen={setEditSenhaOpen} />}
    </>
  );
}

export default SectionProfile;
