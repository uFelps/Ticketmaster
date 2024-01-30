import { useNavigate, useParams } from "react-router-dom";
import { useApi } from "../../hooks/useApi";
import { useContext, useEffect, useState } from "react";
import Header from "../../components/header/Header";
import { Container, Content, Img } from "./style";
import Setores from "../../components/Show/Setores/Setores";
import { AuthContext } from "../../context/AuthContext";

function Show() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const { cidade } = useParams();

  const api = useApi();
  const [show, setShow] = useState([]);

  const BuscarShowPorId = async () => {
    const response = await api.buscarShowPorId(cidade);
    setShow(response);
  };

  useEffect(() => {
    if (!auth.user) {
      navigate("/auth/login");
    }
    BuscarShowPorId();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Content>
          <div>
            <h1>{show.artista}</h1>
            <h2>{show.tour}</h2>
            <h3>{show.espaco}</h3>
            <h4>{show.data}</h4>
          </div>

          <Img>
            <img src={show.mapa} />
          </Img>
        </Content>
      </Container>
      <Setores show={show} />
    </>
  );
}
export default Show;
