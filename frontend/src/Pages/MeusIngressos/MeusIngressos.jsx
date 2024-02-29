import { useContext, useEffect, useState } from "react";
import { useApi } from "../../hooks/useApi";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import styled from "styled-components";
import PopUpIngresso from "./PopUpIngresso";
import NoIngressos from "./NoIngressos";
import { LoadContext } from "../../context/LoadContext";

const Banner = styled.div`
  background-image: linear-gradient(to left, #056de0, #213866);
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  gap: 1em;

  h1 {
    font-size: 40px;
    font-weight: 700;
  }

  P {
    color: #cecece;
    font-size: 18px;
    font-weight: 400;
  }

  @media (max-width: 700px) {
    height: 300px;

    h1 {
      font-size: 28px;
    }
  }

  p {
    font-size: 12px;
  }
`;

const Ingressos = styled.div`
  height: 100%;
  background-color: #ebebeb;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
  padding: 5em;
`;

const Ingresso = styled.div`
  display: flex;
  background-color: white;
  border-radius: 8px;
`;

const ContentIngresso = styled.div`
  padding: 1.5em;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;

  h1 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 0.2em;
  }

  h2 {
    font-size: 14px;
    font-weight: 500;
  }

  h3 {
    font-size: 16px;
    font-weight: 600;
    margin: 0em 0em 0.5em 0em;
  }

  h4 {
    font-size: 12px;
    font-weight: 400;
  }

  button {
    color: #056de0;
    background: none;
    border: none;
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-weight: 600;
  }

  button:hover {
    cursor: pointer;
  }

  @media (max-width: 700px) {
    width: 200px;

    h1 {
      font-size: 14px;
    }

    h2 {
      font-size: 10px;
    }

    h3 {
      font-size: 12px;
    }

    h4 {
      font-size: 8px;
    }

    button {
      font-size: 12px;
    }
  }
`;

const Img = styled.div`
  width: 225px;
  height: 225px;
  background-image: url(${(props) => props.src});
  background-position: center;
  background-size: 20em;
  border-radius: 8px 0px 0px 8px;

  @media (max-width: 1000px) {
    width: 150px;
    height: 150px;
  }
`;

function MeusIngressos() {
  const api = useApi();
  const auth = useContext(AuthContext);
  const loader = useContext(LoadContext);
  const token = localStorage.getItem("authToken");
  const navigate = useNavigate();

  const [ingressos, setIngressos] = useState([]);

  const BuscarMeusIngressos = async () => {
    loader.setLoading(true);
    const response = await api.buscarMeusIngressos(token);
    setIngressos(response.data);
    loader.setLoading(false);
  };

  useEffect(() => {
    if (!auth.user) {
      navigate("/auth/login");
    }
    BuscarMeusIngressos();
  }, []);

  const handleClick = (ingresso) => {
    setIngressoEscolhido(ingresso);
  };

  const [ingressoEscolhido, setIngressoEscolhido] = useState(null);

  return (
    <>
      <Header />
      {ingressos.length > 0 ? (
        <>
          <Banner>
            <h1>Meus Ingressos</h1>
            <p>Encontre todos os seus ingressos para shows aqui</p>
          </Banner>
          <Ingressos>
            {ingressos.map((ingresso) => (
              <Ingresso key={ingresso.id}>
                <Img src={ingresso.show.imgTour} />

                <ContentIngresso>
                  <div>
                    <h1>1x {ingresso.show.artista}</h1>
                    <h2>{ingresso.show.tour}</h2>
                  </div>
                  <div>
                    <h3>
                      {ingresso.setor} | {ingresso.tipo}
                    </h3>
                    <h4>
                      {ingresso.show.data.split("|")[0]} -{" "}
                      {ingresso.show.espaco.split("|")[0]}
                    </h4>
                  </div>
                  <button onClick={() => handleClick(ingresso)}>
                    Abrir Ingresso &#10132;
                  </button>
                </ContentIngresso>
              </Ingresso>
            ))}
            {ingressoEscolhido && (
              <PopUpIngresso
                ingresso={ingressoEscolhido}
                setIngresso={setIngressoEscolhido}
              />
            )}
          </Ingressos>
        </>
      ) : (
        <NoIngressos />
      )}
    </>
  );
}

export default MeusIngressos;
