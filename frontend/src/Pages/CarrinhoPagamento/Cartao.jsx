import styled from "styled-components";
import { ErrorLabel, Input, InputMaskStyled } from "../Auth/style";
import { useState } from "react";
import InfoIcon from "../../assets/info.svg";

const Container = styled.div`
  margin: 3em 0em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  i {
    font-size: 14px;
    font-weight: 400;
  }

  @media (max-width: 700px) {
    i {
      font-size: 12px;
    }

    margin: 2em 0em 1em 0em;
  }
`;

const Card = styled.div`
  padding: 1.5em 1em 0.5em 1.5em;
  width: 270px;
  height: 160px;
  border-radius: 10px;
  background-color: ${(props) => props.color};
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1 {
    font-size: 14px;
    font-weight: 600;
    text-align: left;
  }

  h2 {
    font-size: 14px;
    font-weight: 400;
  }

  h3,
  h4 {
    font-size: 12px;
    font-weight: 500;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 700px) {
    width: 250px;
    height: 150px;
  }
`;

const Inputs = styled.div`
  width: 100%;
  margin: 2em 0em;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.5em;
`;

const Label = styled.div`
  width: ${(props) => props.size};
  margin: 0.6em 0em;

  p {
    width: 100%;
    text-align: left;
    font-size: 14px;
    font-weight: 600;
    color: #727272;
    margin-bottom: 0.5em;
  }

  @media (max-width: 700px) {
    width: ${(props) => (props.size == "18%" ? "48%" : "100%")};
  }
`;

const CheckBox = styled.div`
  margin: 2em 0em 0em 1em;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 0.5em;

  input[type="checkbox"] {
    appearance: none;
    background-color: #fff;
    margin: 0;
    font: inherit;
    color: #056de0;
    width: 1em;
    height: 1em;
    min-width: 1em;
    min-height: 1em;
    border: 0.15em solid #056de0;
    border-radius: 0.15em;
    transform: translateY(-0.075em);
    display: grid;
    place-content: center;
  }

  input[type="checkbox"]::before {
    content: "";
    width: 0.5em;
    height: 0.5em;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em #056de0;
  }

  input[type="checkbox"]:checked::before {
    transform: scale(1);
    transform-origin: bottom left;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
  }

  @media (max-width: 700px) {
    margin: 2em 0em 0em 0em;
  }
`;

const Info = styled.div`
  margin: 1em 0em 0em 1em;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 0.5em;

  @media (max-width: 700px) {
    margin: 1em 0em 0em 0em;
  }
`;

const Alert = styled.div`
  width: 70%;
  margin-top: 2em;
  padding: 2em;
  border: 1px solid #056de0;
  background-color: #b4d1f1;
  border-radius: 8px;

  h1 {
    color: #056de0;
    text-align: left;
    margin-bottom: 0.5em;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    color: #727272;
    margin-bottom: 1em;
  }

  @media (max-width: 700px) {
    width: 100%;
    margin-top: 1em;

    p {
      font-size: 12px;
    }
  }
`;

function Cartao({ dados, register, errors }) {
  const [cartao, setCartao] = useState({
    titular: "",
    numero: "",
    validade: "",
    cvv: "",
  });

  const handleChange = (property, value) => {
    setCartao({
      ...cartao,
      [property]: value,
    });
  };

  return (
    <>
      <Container>
        <Card color={dados.cor}>
          <h1>{cartao.titular}</h1>
          <h2>{cartao.numero}</h2>

          <div>
            <h3>{cartao.cvv}</h3>
            <h4>{cartao.validade}</h4>
            <img src={dados.logo} />
          </div>
        </Card>

        <Inputs>
          <Label size={"100%"}>
            <p>Dono do Cartão</p>
            <Input
              ref={"titular"}
              {...register("titular", {
                required: true,
                minLength: 6,
                maxLength: 30,
              })}
              type={"text"}
              error={errors?.senha}
              onChange={(e) => handleChange("titular", e.target.value)}
            />

            {errors?.senha?.type === "required" && (
              <ErrorLabel>Campo obrigatório</ErrorLabel>
            )}
            {errors?.senha?.type === "minLengh" && (
              <ErrorLabel>O campo deve ter entre 3 a 30 caracteres</ErrorLabel>
            )}
            {errors?.senha?.type === "maxLength" && (
              <ErrorLabel>O campo deve ter entre 3 a 30 caracteres</ErrorLabel>
            )}
          </Label>

          <Label size={"60%"}>
            <p>Número do Cartão</p>
            <InputMaskStyled
              ref={"numero"}
              mask="9999 9999 9999 9999"
              {...register("numero", {
                required: true,
              })}
              type={"text"}
              onChange={(e) => handleChange("numero", e.target.value)}
            />
          </Label>

          <Label size={"18%"}>
            <p>CVV</p>
            <InputMaskStyled
              ref={"cvv"}
              mask="999"
              {...register("cvv", {
                required: true,
              })}
              type={"text"}
              onChange={(e) => handleChange("cvv", e.target.value)}
            />
          </Label>
          <Label size={"18%"}>
            <p>Validade</p>
            <InputMaskStyled
              ref={"validade"}
              mask="99/99"
              {...register("validade", {
                required: true,
              })}
              type={"text"}
              onChange={(e) => handleChange("validade", e.target.value)}
            />
          </Label>

          <CheckBox>
            <input
              type="checkbox"
              value={true}
              ref={"save"}
              {...register("saveCartao")}
              defaultChecked
            />
            <i>Salvar este cartão para utilizar em compras futuras</i>
          </CheckBox>
          <Info>
            <img src={InfoIcon} />
            <i>Pagamentos com o cartão de crédito podem demorar até 24 hrs</i>
          </Info>
        </Inputs>

        <Alert>
          <h1>Aviso</h1>
          <p>
            Este site foi desenvolvido exclusivamente para fins educacionais e
            não é o site oficial da Ticketmaster.
          </p>
          <p>
            Nenhuma transação efetuada neste site será finalizada. nenhum valor
            será debitado no cartão inserido, e nenhum ingresso real será gerado
            para utilização.
          </p>
          <p>
            Independentemente, todos os dados fornecidos acima serão
            automaticamente criptografados ao serem armazenados.
          </p>
        </Alert>
      </Container>
    </>
  );
}

export default Cartao;
