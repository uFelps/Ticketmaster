import { useEffect, useState } from "react";
import { useApi } from "../../../hooks/useApi";
import { BoxCards, Card, Img, Button } from "../../home/Eventos/Eventos";
import BoxContainer from "../../utils/BoxContainer";

function Pop() {
  const api = useApi();
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    buscarEventos();
  }, []);

  const buscarEventos = async () => {
    const response = await api.buscarPorCategoria("pop");
    setEventos(response.content);
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
