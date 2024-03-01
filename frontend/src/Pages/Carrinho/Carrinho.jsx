import { useContext, useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Lixeira from "../../assets/lixeira.svg";
import {
  Button,
  Card,
  CardContent,
  Cards,
  Container,
  ContentCarrinho,
  Img,
  MeuCarrinho,
  Resumo,
  ResumoContent,
  Row,
  Row2,
} from "./style";
import { useApi } from "../../hooks/useApi";
import CarrinhoVazio from "./CarrinhoVazio";
import {
  notificationError,
  notificationSuccess,
} from "../../components/notifications/Notifications";
import { LoadContext } from "../../context/LoadContext";

function Carrinho() {
  const api = useApi();
  const email = localStorage.getItem("email");
  const token = localStorage.getItem("authToken");
  const loader = useContext(LoadContext);

  useEffect(() => {
    buscarCarrinho();
  }, []);

  const [itens, setitens] = useState([]);

  const buscarCarrinho = async () => {
    loader.setLoading(true);
    const response = await api.buscarCarrinho(email, token);
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

  const deletarItem = async (id) => {
    const token = localStorage.getItem("authToken");
    try {
      const response = await api.deletarItemDoCarrinho(id, token);

      if (response.status == 200) {
        notificationSuccess("Deletado com sucesso");
        setitens(itens.filter((x) => x.id != id));
      }
    } catch (e) {
      notificationError("Erro ao deletar item");
    }
  };

  return (
    <>
      <Header />
      {itens.length > 0 ? (
        <>
          <Container>
            <MeuCarrinho>
              <ContentCarrinho>
                {" "}
                <h1>Meu Carrinho</h1>
                <Cards>
                  {itens.map((item) => (
                    <Card key={item.id}>
                      <Img src={item.show.imgTour} />
                      <CardContent>
                        <h2>1x {item.show.artista}</h2>
                        <h3>
                          {item.setor} | {item.tipo}
                        </h3>

                        <h4>{item.show.espaco.replace(" |", ",")}</h4>
                        <h4>{item.show.data}</h4>
                        <div>
                          <h5>R$ {item.valor},00</h5>
                          <i>
                            <img
                              onClick={() => deletarItem(item.id)}
                              src={Lixeira}
                            />
                          </i>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </Cards>
              </ContentCarrinho>
            </MeuCarrinho>
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
                <Button to={"/carrinho/pagamento"}>Finalizar Pedido</Button>
              </ResumoContent>
            </Resumo>
          </Container>
        </>
      ) : (
        <CarrinhoVazio />
      )}
    </>
  );
}

export default Carrinho;
