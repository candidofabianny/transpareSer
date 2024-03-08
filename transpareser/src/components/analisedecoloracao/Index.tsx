import React from "react";
import HeroAnalise from "./HeroAnalis";
import Beneficios from "./Beneficios";
import Naoperca from "./NaoPerca";

const AnalisedeColoracao = () => {
   return (
    <>
      <section className="w-full flex flex-col items-center">
      <link rel="shortcut icon" href="./assets/icons/logoaba.png" type="image/x-icon"></link>
      <HeroAnalise />   
      <Beneficios /> 
      <Naoperca />
      </section>
     </>
  );
};

export default AnalisedeColoracao;