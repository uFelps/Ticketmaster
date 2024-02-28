import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  notificationError,
  notificationSuccess,
} from "../../components/notifications/Notifications";
import { AuthContext } from "../../context/AuthContext";
import { useApi } from "../../hooks/useApi";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import * as C from "./style";
import PasswordInput from "../../components/utils/PasswordInput";

function Signup() {
  const navegate = useNavigate();
  const auth = React.useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await auth.signup(data);

      if (response != null) {
        notificationSuccess(
          `Bem vindo, ${String(response.nome).replace(/\s.*$/, "")}`
        );
        navegate("/");
      }
    } catch (e) {
      notificationError("Erro:" + e.response.data.message);
    }
  };

  const api = useApi();

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return (
    <>
      <C.ContentBox>
        <C.ContentContainer>
          <div>
            <C.Title>Crie uma Conta</C.Title>
            <C.Subtitle>
              Cadastra-se e navegue pelos principais shows da Ticketmaster
            </C.Subtitle>
          </div>
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
              {errors?.email?.type === "validate" && (
                <C.ErrorLabel>Este email já está em uso</C.ErrorLabel>
              )}
            </C.Container>
            <C.Container tamanho={"p"}>
              <C.Label>Senha</C.Label>
              <PasswordInput
                name={"senha"}
                register={register}
                errors={errors}
                validate={true}
                maximo={12}
                minimo={5}
              />
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
            <C.Container tamanho={"p"}>
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
          <div>
            <C.Button onClick={() => handleSubmit(onSubmit)()}>
              Criar Conta
            </C.Button>
          </div>
          <C.AuthInfo>
            <p>
              Já possui uma conta? <a href="/auth/login">Login</a>
            </p>
          </C.AuthInfo>
        </C.ContentContainer>
      </C.ContentBox>
    </>
  );
}

export default Signup;
