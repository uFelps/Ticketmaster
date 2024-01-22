import React from "react";
import Header from "../../components/header/Header";
import Banner from "../../components/home/banner/Banner";
import Destaques from "../../components/home/Destaques/Destaques";
import Eventos from "../../components/home/Eventos/Eventos";
import Locais from "../../components/home/Locais/Locais";
import EmAlta from "../../components/home/Em Alta/EmAlta";
import Footer from "../../components/footer/Footer";

function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Destaques />
      <Eventos />
      <Locais />
      <EmAlta />
      <Footer />
    </>
  );
}

export default Home;
