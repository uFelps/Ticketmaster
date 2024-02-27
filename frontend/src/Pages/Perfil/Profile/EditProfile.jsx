import styled from "styled-components";
import { Container, IconClose } from "../Pedidos/PedidoOpen/style";
import * as C from "../../Auth/style";
import { useForm } from "react-hook-form";
import { TbUserEdit } from "react-icons/tb";
import { IconBase } from "react-icons";
import { useApi } from "../../../hooks/useApi";
import { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import {
  notificationError,
  notificationSuccess,
} from "../../../components/notifications/Notifications";
import { useNavigate } from "react-router-dom";

const Content = styled.div`
  position: relative;
  width: 550px;
  height: 650px;
  background-color: white;
  border-radius: 8px;
  padding: 4em;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: 700px) {
    width: 90%;
    height: 95%;
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

function EditProfile({ setEditOpen, usuario }) {
  const auth = useContext(AuthContext);
  const api = useApi();
  const navigate = useNavigate();
  const token = localStorage.getItem("authToken");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id: usuario.id,
      nome: usuario.nome,
      email: usuario.email,
      telefone: usuario.telefone,
      cpf: usuario.cpf,
      cidade: usuario.cidade,
    },
  });

  const onSubmit = async (data) => {
    try {
      const response = await api.atualizarPerfil(data, token);

      if (response.status == 200) {
        notificationSuccess("Dados Atualizados com Sucesso");
        if (data.email != auth.email) {
          navigate("/auth/login");
        } else {
          navigate("/");
        }
      }
    } catch (e) {
      notificationError("Erro: " + e.response.data.message);
    }
  };

  return (
    <>
      <Container>
        <Content>
          <IconClose onClick={() => setEditOpen(false)} />
          <Header>
            <IconEdit />
            <h1>Editar Perfil</h1>
          </Header>
          <C.Form>
            <C.Container tamanho={"g"}>
              <C.Label>Nome</C.Label>
              <C.Input
                {...register("nome", {
                  required: true,
                  minLength: 3,
                  maxLength: 30,
                })}
                type={"text"}
                error={errors?.nome}
              />
              {errors?.nome?.type === "required" && (
                <C.ErrorLabel>Campo obrigatório</C.ErrorLabel>
              )}
              {errors?.nome?.type === "minLengh" && (
                <C.ErrorLabel>
                  O campo deve ter entre 3 a 30 caracteres
                </C.ErrorLabel>
              )}
              {errors?.nome?.type === "maxLength" && (
                <C.ErrorLabel>
                  O campo deve ter entre 3 a 30 caracteres
                </C.ErrorLabel>
              )}
            </C.Container>
            <C.Container tamanho={"g"}>
              <C.Label>Email</C.Label>
              <C.Input
                {...register("email", {
                  required: true,
                })}
                type={"text"}
                error={errors?.email}
              />
              {errors?.email?.type === "required" && (
                <C.ErrorLabel>Campo obrigatório</C.ErrorLabel>
              )}
            </C.Container>
            <C.Container tamanho={"p"}>
              <C.Label>Telefone</C.Label>
              <C.InputMaskStyled
                mask="(99) 99999-9999"
                {...register("telefone", { required: true })}
                type={"text"}
                error={errors?.telefone}
              />
              {errors?.telefone?.type === "required" && (
                <C.ErrorLabel>Campo obrigatório</C.ErrorLabel>
              )}
            </C.Container>
            <C.Container tamanho={"p"}>
              <C.Label>CPF</C.Label>
              <C.InputMaskStyled
                mask="999.999.999-99"
                {...register("cpf", { required: true })}
                type={"text"}
                error={errors?.cpf}
              />
              {errors?.pais?.type === "required" && (
                <C.ErrorLabel>Campo obrigatório</C.ErrorLabel>
              )}
            </C.Container>
            <C.Container tamanho={"g"}>
              <C.Label>Cidade</C.Label>
              <C.Input
                {...register("cidade", { required: true })}
                type={"text"}
                error={errors?.cidade}
              />
              {errors?.cidade?.type === "required" && (
                <C.ErrorLabel>Campo obrigatório</C.ErrorLabel>
              )}
            </C.Container>
          </C.Form>
          <i>
            <C.Button onClick={() => handleSubmit(onSubmit)()}>
              Salvar Dados
            </C.Button>
          </i>
        </Content>
      </Container>
    </>
  );
}

export default EditProfile;
