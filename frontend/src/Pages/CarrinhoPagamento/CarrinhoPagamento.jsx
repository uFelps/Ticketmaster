import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { json, useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import { useApi } from "../../hooks/useApi";
import CarrinhoVazio from "../Carrinho/CarrinhoVazio";
import {
  notificationError,
  notificationSuccess,
} from "../../components/notifications/Notifications";
import {
  Container,
  Button,
  Resumo,
  ResumoContent,
  Row,
  Row2,
} from "../Carrinho/style";
import { Bandeiras, CardBandeira, ContentPagamento, Pagamento } from "./style";
import LogoMastercard from "../../assets/Mastercard-Logo.svg";
import LogoVisa from "../../assets/Visa-Logo.svg";
import CarteiraImg from "../../assets/carteira.svg";
import LogoPix from "../../assets/logo-pix.svg";
import Cartao from "./Cartao";
import { useForm } from "react-hook-form";
import Pix from "./Pix";
import Carteira from "./Carteira";
import { useMemo } from "react";
import Check from "../../components/utils/Check";
import { LoadContext } from "../../context/LoadContext";

const pagamentos = [
  { logo: LogoMastercard, cor: "#056DE0", bandeira: "Mastercard" },
  { logo: LogoVisa, cor: "#C2C3F0", bandeira: "Visa" },
  { logo: LogoPix, cor: "#04bcac" },
  { logo: CarteiraImg, cor: "" },
];

function CarrinhoPagamento() {
  const api = useApi();
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const token = localStorage.getItem("authToken");
  const loader = useContext(LoadContext);

  useEffect(() => {
    if (!auth.user) {
      navigate("/auth/login");
    }
    buscarCarrinho();
  }, []);

  const [itens, setitens] = useState([]);

  const buscarCarrinho = async () => {
    loader.setLoading(true);
    const response = await api.buscarCarrinho(auth.email, token);
    setitens(response);
    loader.setLoading(false);
  };

  const CalcularTotal = () => {
    let total = 0;
    itens.map((item) => {
      total += item.valor;
    });

    return total;
  };

  const BuscarIdsItens = () => {
    var ids = [];
    itens.map((item) => {
      ids.push(item.id);
    });

    return ids;
  };

  const [bandeiraEscolhida, setBandeira] = useState(pagamentos[0]);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [pagamentoEscolhido, setPagamento] = useState("Cartão");

  const [pagamentoRealizado, setPagamentoRealizado] = useState(false);

  const onSubmit = async (data) => {
    let json = {};

    if (pagamentoEscolhido == "Pix") {
      json = {
        tipoPagamento: "Pix",
        total: CalcularTotal(),
        ingressos: itens,
        idItemCarrinho: BuscarIdsItens(),
      };
    } else {
      json = {
        tipoPagamento: "Cartão",
        total: CalcularTotal(),
        cartao: {
          ...data,
          numIdentificador: data.numero.slice(-4),
          bandeira:
            data.bandeira == null ? bandeiraEscolhida.bandeira : data.bandeira,
        },
        ingressos: itens,
        idItemCarrinho: BuscarIdsItens(),
      };
    }

    try {
      const response = await api.finalizarPagamento(json, auth.email, token);
      if (response.status == 200) {
        setPagamentoRealizado(true);
      }
    } catch (e) {
      notificationError("Erro ao finalizar pagamento");
      console.log(e);
    }
  };

  const [SectionCartao, setSectionCartao] = useState(true);
  const [SectionCarteira, setCarteira] = useState(false);
  const [SectionPix, setPix] = useState(false);

  const setPagamentoEscolhido = (data) => {
    if (data.logo == LogoPix) {
      setSectionCartao(false);
      setCarteira(false);
      setPix(true);
      setPagamento("Pix");
    } else if (data.logo == CarteiraImg) {
      setSectionCartao(false);
      setCarteira(true);
      setPix(false);
      setPagamento("Cartão");
    } else {
      setPix(false);
      setCarteira(false);
      setSectionCartao(true);
      setBandeira(data);
      setPagamento("Cartão");
    }
  };

  return (
    <>
      <Header />
      {itens.length > 0 ? (
        <>
          <Container>
            <Pagamento>
              <ContentPagamento>
                <h1>Pagamento</h1>
                <Bandeiras>
                  {pagamentos.map((x) => (
                    <CardBandeira
                      key={x.cor}
                      onClick={() => setPagamentoEscolhido(x)}
                    >
                      {" "}
                      <img src={x.logo} />
                    </CardBandeira>
                  ))}
                </Bandeiras>

                {SectionPix && <Pix />}

                {SectionCartao && (
                  <Cartao
                    dados={bandeiraEscolhida}
                    register={register}
                    errors={errors}
                  ></Cartao>
                )}

                {SectionCarteira && <Carteira onSubmit={setValue} />}
              </ContentPagamento>
            </Pagamento>

            <Resumo>
              <ResumoContent>
                <h1>Resumo</h1>
                {itens.map((item) => (
                  <Row key={item.id}>
                    <div>
                      <h2>1x {item.show.artista}</h2>
                      <h3>
                        {item.show.espaco.split("|")[0]} | {item.setor}
                      </h3>
                    </div>
                    <h4>R$ {item.valor},00</h4>
                  </Row>
                ))}
                <Row>
                  <h5>Taxa de Serviço</h5>
                  <h4>Grátis</h4>
                </Row>
                <Row2>
                  <h6>Total:</h6>
                  <p>R${CalcularTotal()},00</p>
                </Row2>
                <Button onClick={() => handleSubmit(onSubmit)()}>
                  Finalizar Pedido
                </Button>
              </ResumoContent>
            </Resumo>
            {pagamentoRealizado && (
              <Check
                h1={"Pagamento Realizado com Sucesso!"}
                p={"Seu ticket está disponível na aba Meus Ingressos."}
                url={"/meusingressos"}
              />
            )}
          </Container>
        </>
      ) : (
        <CarrinhoVazio />
      )}
    </>
  );
}

export default CarrinhoPagamento;
