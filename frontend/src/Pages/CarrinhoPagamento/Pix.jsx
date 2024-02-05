import styled from "styled-components";
import QrcodeIcon from "../../assets/qrcodeicon.svg";
import Qrcode from "../../assets/qrcode.jpg";
import { MdContentCopy } from "react-icons/md";
import {
  notificationError,
  notificationSuccess,
} from "../../components/notifications/Notifications";

const Container = styled.div`
  width: 70%;
  margin: 4em 0em;

  p {
    font-size: 14px;
    color: #727272;
    margin: 1em 0em;
  }

  @media (max-width: 700px) {
    width: 90%;

    p {
      font-size: 10px;
    }

    margin: 4em 0em 2em 0em;
  }
`;

const Header = styled.div`
  display: flex;
  gap: 1em;
  margin-bottom: 2em;

  img {
    width: 60px;
  }

  h1 {
    font-size: 16px;
    margin: 0;
    text-align: left;
  }

  @media (max-width: 700px) {
    h1 {
      font-size: 14px;
    }
  }
`;

const Payment = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1em;

  img {
    width: 150px;
  }

  @media (max-width: 700px) {
    justify-content: center;
    flex-wrap: wrap;

    p {
      text-align: center;
    }
  }
`;

const Input = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 0.5em;

  input {
    padding: 0em 1em;
    width: 80%;
    height: 50px;
    outline: none;
    border: none;
    background-color: #d9d9d9;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
  }
  @media (max-width: 700px) {
    justify-content: center;
  }
`;

const IconCopy = styled(MdContentCopy)`
  &:hover {
    cursor: pointer;
  }
`;

const Alert = styled.div`
  margin-top: 2em;
  padding: 2em;
  border: 1px solid #07beb4;
  background-color: #a5e4e1;
  border-radius: 8px;

  h1 {
    color: #06918a;
    text-align: left;
    margin-bottom: 0.5em;
  }
`;

function Pix() {
  const Copy = () => {
    navigator.clipboard
      .writeText(
        "Loremipsumdolorsitametconsecteturadipiscingelitseddoeiusmodtemporincididuntutlaboreetdoloremagnaaliqua"
      )
      .then(notificationSuccess("Código copiado"));
  };

  return (
    <>
      <Container>
        <Header>
          <img src={QrcodeIcon} />
          <h1>
            Escaneie e pague o QR Code a seguir para efetuar a compra do seu
            pedido
          </h1>
        </Header>

        <p>
          1. Acesse a opção pix no seu Internet Banking ou app de pagamentos;
        </p>
        <p>2. Escaneie o Qr Code a seguir ou copie o código de pagamento;</p>
        <p>3. Clique em Finalizar Pedido</p>

        <Payment>
          <img src={Qrcode} />
          <div>
            <p>Se prefirir, copie o código abaixo para realizar o pagamento</p>
            <Input>
              <input
                type="text"
                value={
                  "Loremipsumdolorsitametconsecteturadipiscingelitseddoeiusmodtemporincididuntutlaboreetdoloremagnaaliqua"
                }
                disabled
              />
              <IconCopy onClick={() => Copy()} />
            </Input>
          </div>
        </Payment>
        <Alert>
          <h1>Aviso</h1>
          <p>
            Este site foi desenvolvido exclusivamente para fins educacionais e
            não é o site oficial da Ticketmaster.
          </p>
          <p>
            Nenhuma compra realizada aqui será concretizada, o QR Code as chaves
            copiadas e coladas são fictícias.
          </p>
        </Alert>
      </Container>
    </>
  );
}

export default Pix;
