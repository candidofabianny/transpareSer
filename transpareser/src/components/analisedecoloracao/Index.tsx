import React from "react";
import HeroAnalise from "./HeroAnalis";
import Beneficios from "./Beneficios";
import Naoperca from "./NaoPerca";
import Depoimento from "./Depoimento";

const AnalisedeColoracao = () => {
   return (
    <>
      <section className="w-full flex flex-col items-center">
      <HeroAnalise />   
      <Beneficios /> 
      <Naoperca />
      <Depoimento />
      </section>
     </>
  );
};

export default AnalisedeColoracao;