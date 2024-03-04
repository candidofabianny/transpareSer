import React from "react";
import HeroConsultoria from "./HeroConsul";
import SobreConsultoria from "./Sobre";
import Beneficios from "./Beneficios";

const ConsultoriaCompleta = () => {
   return (
    <>
      <section className="w-full flex flex-col items-center">
      <link rel="shortcut icon" href="./assets/icons/logoaba.png" type="image/x-icon"></link>
      <HeroConsultoria />
      <SobreConsultoria />
      <Beneficios />
      </section>
     </>
  );
};

export default ConsultoriaCompleta;