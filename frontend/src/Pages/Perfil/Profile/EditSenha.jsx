import styled from "styled-components";

import * as C from "../../Auth/style";
import { Container, IconClose } from "../Pedidos/PedidoOpen/style";
import { TbUserEdit } from "react-icons/tb";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useApi } from "../../../hooks/useApi";
import {
  notificationError,
  notificationSuccess,
} from "../../../components/notifications/Notifications";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import PasswordInput from "../../../components/utils/PasswordInput";

const Content = styled.div`
  position: relative;

  height: 550px;
  background-color: white;
  border-radius: 8px;
  padding: 3em;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: 700px) {
    width: 90%;
    height: 75%;
    padding: 4em 2em;
    gap: 2em;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;

  h1 {
    font-size: 22px;
    font-weight: 600;
  }
`;

const IconEdit = styled(TbUserEdit)`
  font-size: 40px;
`;

function EditSenha({ setEditSenhaOpen }) {
  const api = useApi();
  const token = localStorage.getItem("authToken");
  const {
    register,
    handleSubmit,
    watch,

    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await api.atualizarSenha(token, data);
      if (response.status == 200) {
        notificationSuccess("Senha atualizada com sucesso");
        setEditSenhaOpen(false);
      }
    } catch (e) {
      notificationError("Erro: " + e.response.data.message);
    }
  };

  return (
    <>
      <Container>
        <Content>
          <IconClose onClick={() => setEditSenhaOpen(false)} />
          <Header>
            <IconEdit />
            <h1>Alterar Senha</h1>
          </Header>
          <C.Form>
            <C.Container tamanho={"g"}>
              <C.Label>Senha Atual</C.Label>
              <PasswordInput
                name={"senhaAtual"}
                register={register}
                errors={errors}
                validate={true}
              />
            </C.Container>
            <C.Container tamanho={"g"}>
              <C.Label>Nova Senha</C.Label>
              <PasswordInput
                name={"novaSenha"}
                register={register}
                errors={errors}
                validate={true}
                minValue={5}
                maxValue={12}
              />
            </C.Container>
            <C.Container tamanho={"g"}>
              <C.Label>Confirme a Nova Senha</C.Label>

              <PasswordInput
                name={"confirmeSenha"}
                register={register}
                errors={errors}
                functionValidate={(val) => {
                  if (watch("novaSenha") != val) {
                    return false;
                  }
                  return true;
                }}
              />
            </C.Container>
          </C.Form>
          <i>
            <C.Button onClick={() => handleSubmit(onSubmit)()}>
              Alterar Senha
            </C.Button>
          </i>
        </Content>
      </Container>
    </>
  );
}

export default EditSenha;
