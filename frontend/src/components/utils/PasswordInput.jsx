import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  border: ${(props) => (props.error ? "1px solid red" : "1px solid #acacac")};
  height: 40px;
  border-radius: 5px;
  padding: 0em 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;

  &:focus {
    border: 2px solid #056de0;
    background-color: #f5f5f5;
  }
`;

export const Input = styled.input`
  width: 80%;
  outline: none;
  border: none;
  height: 37px;
  font-family: "Inter", sans-serif;
  color: #838383;
  background-color: #ffffff;
  font-weight: 500;
`;

export const ErrorLabel = styled.p`
  color: red;
  font-size: 10px;
  font-weight: 600;
`;

export const EyeButton = styled.i`
  margin-left: 0.2em;
  font-size: 12px;
`;

function PasswordInput({
  name,
  register,
  errors,
  functionValidate,
  minimo,
  maximo,
}) {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return (
    <>
      <Container error={errors?.[name]}>
        <Input
          {...register(`${name}`, {
            required: true,
            minLength: minimo,
            maxLength: maximo,
            validate: functionValidate,
          })}
          type={passwordShown ? "text" : "password"}
        />
        <EyeButton onClick={togglePasswordVisiblity}>
          {passwordShown ? <FaRegEyeSlash /> : <FaRegEye />}
        </EyeButton>
      </Container>
      {errors?.[name]?.type === "required" && (
        <ErrorLabel>Campo obrigatório</ErrorLabel>
      )}
      {errors?.[name]?.type === "validate" && (
        <ErrorLabel>As senhas não coincidem</ErrorLabel>
      )}
      {errors?.[name]?.type === "minLengh" ||
        (errors?.[name]?.type === "maxLength" && (
          <C.ErrorLabel>
            `O campo deve ter entre ${minValue} a ${maxValue} caracteres`
          </C.ErrorLabel>
        ))}
    </>
  );
}

export default PasswordInput;
