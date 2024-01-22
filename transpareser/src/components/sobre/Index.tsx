import React from "react";
import TranspareSer from "./TranspareSer";
import SobreEmpresa from "./SobreEmpresa";
import BannerEmpresa from "./BannerEmpresa";
import CarolSaibert from "./CarolSaibert";
import BannerCarol from "./BannerCarol";
import Resumo from "./Resumo";

const Sobre = () => {
   return (
    <>
      <section className="w-full flex flex-col items-center">
      <link rel="shortcut icon" href="./assets/icons/logoaba.png" type="image/x-icon"></link>
        <TranspareSer />
        <SobreEmpresa />
        <BannerEmpresa />
        <CarolSaibert />
        <BannerCarol />
        <Resumo />
      </section>
     </>
  );
};

export default Sobre;