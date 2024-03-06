import React from "react";
import Hero from "./Hero";
import Banner from "./Banner";
import Produtos from "./Produtos";
import Novidades from "./Novidades";

const Home = () => {
   return (
    <>
      <section className="w-full flex flex-col items-center">
      <link rel="shortcut icon" href="./assets/icons/logoaba.png" type="image/x-icon"></link>
        <Hero />
        <Banner />
        <Produtos />
      </section>
     </>
  );
};

export default Home;