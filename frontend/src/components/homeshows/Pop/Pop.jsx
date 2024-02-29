import { useContext, useEffect, useState } from "react";
import { useApi } from "../../../hooks/useApi";
import { BoxCards, Card, Img, Button } from "../../home/Eventos/Eventos";
import BoxContainer from "../../utils/BoxContainer";
import { LoadContext } from "../../../context/LoadContext";

function Pop() {
  const api = useApi();
  const [eventos, setEventos] = useState([]);
  const loader = useContext(LoadContext);

  useEffect(() => {
    buscarEventos();
  }, []);

  const buscarEventos = async () => {
    loader.setLoading(true);
    const response = await api.buscarPorCategoria("pop");
    setEventos(response.content);
    loader.setLoading(false);
  };

  return (
    <>
      <BoxContainer titulo={"Pop"}>
        <BoxCards>
          {eventos.map((evento) => (
            <Card key={evento.id}>
              <Img src={evento.img} />
              <h1>{evento.artista}</h1>
              <p>{evento.nome}</p>
              <i>Ingressos Disponíveis</i>
              <Button to={`/tours${evento.link}`}>Comprar &#10132;</Button>
            </Card>
          ))}
        </BoxCards>
      </BoxContainer>
    </>
  );
}

export default Pop;
