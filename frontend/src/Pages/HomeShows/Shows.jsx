import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import BannerShows from "../../components/homeshows/banner/BannerShows";
import EmAlta1 from "../../components/homeshows/EmAlta/EmAlta1";
import Pop from "../../components/homeshows/Pop/Pop";
import Rock from "../../components/homeshows/Rock/Rock";
import EmAlta2 from "../../components/homeshows/EmAlta/EmAlta2";
import Hiphop from "../../components/homeshows/Hiphop/Hiphop";
import Alternative from "../../components/homeshows/Alternative/Alternative";

function Shows() {
  return (
    <>
      <Header />
      <BannerShows />
      <EmAlta1 />
      <Pop />
      <Rock />
      <EmAlta2 />
      <Hiphop />
      <Alternative />

      <Footer />
    </>
  );
}

export default Shows;
