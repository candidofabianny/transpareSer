import React from "react";
import Hero from "./Hero";
import Banner from "./Banner";
import Produtos from "./Produtos";

const Home = () => {
   return (
    <>
      <section className="w-full flex flex-col items-center">
        <Hero />
        <Banner />
        <Produtos />
      </section>
     </>
  );
};

export default Home;