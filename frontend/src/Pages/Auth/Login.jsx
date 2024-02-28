import styled from "styled-components";
import InputLabel from "../../components/Inputs/InputLabel";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import React, { useState } from "react";
import {
  notificationError,
  notificationSuccess,
} from "../../components/notifications/Notifications";
import * as C from "./style";
import { useForm } from "react-hook-form";
import Header from "../../components/header/Header";
import PasswordInput from "../../components/utils/PasswordInput";

function Login() {
  const navegate = useNavigate();
  const auth = React.useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await auth.login(data);

      if (response != null) {
        notificationSuccess(
          `Bem vindo de volta, ${String(response.nome).replace(/\s.*$/, "")}`
        );
        navegate("/");
      }
    } catch (e) {
      notificationError("Email ou senha inválido");
    }
  };

  return (
    <>
      <C.ContentBox>
        <C.ContentContainer height={"400px"}>
          <div>
            <C.Title>Login</C.Title>
            <C.Subtitle>
              Faça login e tenha acesso aos seus ingressos
            </C.Subtitle>
          </div>
          <C.Form>
            <C.Container tamanho={"g"}>
              <C.Label>Email</C.Label>
              <C.Input
                {...register("email", {
                  required: true,
                })}
                type={"text"}
                error={errors?.email}
              />
              {errors?.nome?.type === "required" && (
                <C.ErrorLabel>Campo obrigatório</C.ErrorLabel>
              )}
            </C.Container>

            <C.Container tamanho={"g"}>
              <C.Label>Senha</C.Label>
              <PasswordInput
                name={"senha"}
                register={register}
                errors={errors}
                validate={true}
                minValue={5}
                maxValue={12}
              />
              {errors?.nome?.type === "required" && (
                <C.ErrorLabel>Campo obrigatório</C.ErrorLabel>
              )}
            </C.Container>
          </C.Form>

          <div>
            <C.Button onClick={() => handleSubmit(onSubmit)()}>Entrar</C.Button>
          </div>
          <C.AuthInfo>
            <p>
              Não Possui uma conta? <a href="/auth/signup">Sign Up</a>
            </p>
          </C.AuthInfo>
        </C.ContentContainer>
      </C.ContentBox>
    </>
  );
}

export default Login;
