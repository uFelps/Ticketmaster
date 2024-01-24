import { useLocation, useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import { useApi } from "../../hooks/useApi";
import { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import {
  CardContent,
  CardShow,
  Data,
  HeaderCard,
  ImgCard,
  ShowsContainers,
  TitleContainer,
} from "./style";

function Tour() {
  const api = useApi();

  const { nome } = useParams();
  const location = useLocation();

  const [tour, setTour] = useState({});
  const [shows, setShows] = useState([]);

  const buscarTour = async () => {
    const tour = await api.buscarTour(nome);
    const shows = await api.buscarShowsDaTour(tour.id);
    setTour(tour);
    setShows(shows);
  };

  useEffect(() => {
    buscarTour();
  }, []);

  return (
    <>
      <Header />
      <TitleContainer img={tour.img}>
        <h1>{tour.artista?.toUpperCase()}</h1>
        <p>{tour.nome}</p>
      </TitleContainer>
      <ShowsContainers>
        {shows.map((show) => (
          <CardShow key={show.id} to={`${location.pathname}/${show.id}`}>
            <CardContent>
              <HeaderCard>
                <Data>
                  <h1>{show.data.split(" ")[0]}</h1>
                  <h2>
                    {show.data.split(" ")[2].substring(0, 3).toUpperCase()}
                  </h2>
                  <h3>
                    {show.data.split(" ")[4].substring(0, 4).toUpperCase()}
                  </h3>
                </Data>
                <div>
                  <h4>{tour.artista}</h4>
                  <h5>{tour.nome}</h5>
                </div>
              </HeaderCard>
              <div>
                <h6>{show.espaco.split("|")[0]}</h6>
                <p>{show.espaco.split("|")[1]}</p>
              </div>
            </CardContent>

            <ImgCard src={show.imgEstadio} />
          </CardShow>
        ))}
      </ShowsContainers>
    </>
  );
}

export default Tour;
