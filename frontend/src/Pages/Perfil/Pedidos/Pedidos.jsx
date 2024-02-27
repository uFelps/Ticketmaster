import { useEffect, useState } from "react";
import styled from "styled-components";
import { useApi } from "../../../hooks/useApi";
import Pagination from "../../../components/utils/Pagination";
import PedidoOpen from "./PedidoOpen/PedidoOpen";
import { TbNoteOff } from "react-icons/tb";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;

  h1 {
    font-size: 20px;
    font-weight: 600;
    color: #525252;
  }
`;

const Box = styled.div`
  width: 100%;

  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px;
  padding: 1.5em 2em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
  gap: 1em;
  height: 270px;
  border-radius: 8px;

  @media (max-width: 700px) {
    align-items: center;
  }
`;

const Table = styled.div`
  width: 100%;

  table {
    width: 100%;
    text-align: center;
    border-spacing: 0;
    overflow-x: auto;
    border-collapse: collapse;
  }

  tr:nth-child(even) {
    background-color: #f3f3f3;
  }

  th {
    font-size: 12px;
    font-weight: 700;
    padding-bottom: 1em;
    color: #727272;
    border-bottom: 1px solid #cacaca;
  }

  td {
    padding: 0.1em 0em;
    font-weight: 500;
    font-size: 14px;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
  }

  tr:hover {
    cursor: pointer;
  }

  @media (max-width: 700px) {
    table {
      font-size: 12px;
    }

    th {
      font-size: 9px;
    }

    td {
      font-size: 13px;
    }

    th:nth-child(2) {
      display: none;
    }

    td:nth-child(2) {
      display: none;
    }
  }
`;

const NoPedidos = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4em 0em 0em 0em;
  gap: 2em;

  h1 {
    font-size: 20px;
    margin-bottom: 0.3em;
  }

  p {
    font-size: 16px;
    color: #8d8d8d;
    width: 250px;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: start;
    padding: 2em 0em 0em 0em;

    h1 {
      font-size: 18px;
    }

    p {
      font-size: 12px;
    }
  }
`;

const IconVazio = styled(TbNoteOff)`
  font-size: 100px;
  color: #056de0;

  @media (max-width: 700px) {
    font-size: 50px;
  }
`;

const Status = styled.p`
  background-color: ${(props) =>
    props.type == "APROVADO"
      ? "#ccf4dc"
      : props.type == "PENDENTE"
      ? "#fff4dc"
      : "#ffccd4"};
  color: ${(props) =>
    props.type == "APROVADO"
      ? "#00BD4C"
      : props.type == "PENDENTE"
      ? "#FFD336"
      : "#EB001B"};

  padding: 0.8em;
  width: 100px;
  border-radius: 8px;
  text-align: center;
  font-weight: 700;
  font-size: 12px;

  @media (max-width: 700px) {
    width: 60px;
    font-size: 8px;
  }
`;

function Pedidos() {
  const api = useApi();
  const token = localStorage.getItem("authToken");
  const [response, setResponse] = useState({
    content: [],
    last: true,
    totalPages: 0,
    totalElements: 0,
    size: 12,
    number: 0,
    first: true,
    numberOfElements: 0,
    empty: true,
  });

  const [pedidos, setPedidos] = useState([]);
  const [page, setPage] = useState(0);

  const buscarPedidos = async () => {
    const response = await api.buscarPedidos(page, token);
    setResponse(response);
    setPedidos(response.content);
  };

  const handlePageChange = (newPageNumber) => setPage(newPageNumber);

  useEffect(() => {
    buscarPedidos();
  }, [page]);

  const [pedidoOpen, setPedidoOpen] = useState(null);

  const handleClick = (pedido) => {
    setPedidoOpen(pedido);
  };

  return (
    <>
      <Container>
        <h1>Pedidos</h1>
        <Box>
          {pedidos.length > 0 ? (
            <>
              <Table>
                <table>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>DATA</th>
                      <th>VALOR</th>
                      <th>PAGAMENTO</th>
                      <th>STATUS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pedidos.map((pedido) => (
                      <tr key={pedido.id} onClick={() => handleClick(pedido)}>
                        <td>
                          <span>{pedido.id}</span>
                        </td>
                        <td>
                          <span>{pedido.data}</span>
                        </td>
                        <td>
                          <span>R$ {pedido.total},00</span>
                        </td>
                        <td>
                          <span>{pedido.metodoPagamento}</span>
                        </td>
                        <td>
                          <span>
                            <Status type={pedido.status}>
                              {pedido.status}
                            </Status>
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Table>
              <Pagination dados={response} onChange={handlePageChange} />
            </>
          ) : (
            <NoPedidos>
              <IconVazio />
              <div>
                <h1>Nenhum Pedido</h1>
                <p>Você ainda não realizou nenhuma compra</p>
              </div>
            </NoPedidos>
          )}
        </Box>
        {pedidoOpen && (
          <PedidoOpen pedido={pedidoOpen} fecharPopUp={setPedidoOpen} />
        )}
      </Container>
    </>
  );
}

export default Pedidos;
