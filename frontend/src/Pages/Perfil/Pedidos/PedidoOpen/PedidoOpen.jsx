import { useEffect, useState } from "react";
import { useApi } from "../../../../hooks/useApi";
import {
  Container,
  Content,
  Header,
  IconClose,
  Ingresso,
  Ingressos,
  Title,
} from "./style";
import { LoadContext } from "../../../../context/LoadContext";

function PedidoOpen({ pedido, fecharPopUp }) {
  const api = useApi();
  const token = localStorage.getItem("authToken");
  const loader = useContext(LoadContext);

  const [ingressos, setIngressos] = useState([]);

  const buscarIngressosDoPedido = async () => {
    loader.setLoading(true);
    const response = await api.buscarIngressosDoPedido(pedido.id, token);
    setIngressos(response.data);
    loader.setLoading(false);
  };

  useEffect(() => {
    buscarIngressosDoPedido();
  }, []);

  return (
    <>
      <Container>
        <Content>
          <IconClose onClick={() => fecharPopUp(false)} />
          <Title>Pedido #{pedido.id}</Title>
          <Header>
            <div>
              <i>
                <label>DATA</label>
                <p>{pedido.data}</p>
              </i>
              <i>
                {" "}
                <label>PAGAMENTO</label>
                <p>{pedido.metodoPagamento}</p>
              </i>
              <i>
                {" "}
                <label>TITULAR</label>
                <p>{pedido.usuario}</p>
              </i>
            </div>
            <div>
              <i>
                <label>VALOR</label>
                <p>R$ {pedido.total},00</p>
              </i>
              <i>
                <label>STATUS</label>
                <p>{pedido.status}</p>
              </i>
            </div>
          </Header>
          <h1>Itens</h1>
          <Ingressos>
            {ingressos.map((ingresso) => (
              <Ingresso key={ingresso.id}>
                <div>
                  <p>1x {ingresso.show.artista}</p>
                  <h2>R$ {ingresso.valor},00</h2>
                </div>
                <div>
                  <aside>
                    <h3>{ingresso.tipo}</h3>
                    <h4>{ingresso.setor}</h4>
                  </aside>
                  <aside>
                    <h5>{ingresso.show.espaco.split("|")[0]}</h5>
                    <h6>{ingresso.show.data.split("|")[0]}</h6>
                  </aside>
                </div>
              </Ingresso>
            ))}
          </Ingressos>
        </Content>
      </Container>
    </>
  );
}

export default PedidoOpen;
