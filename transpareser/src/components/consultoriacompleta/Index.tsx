import React from "react";
import HeroConsultoria from "./HeroConsul";
import SobreConsultoria from "./Sobre";

const ConsultoriaCompleta = () => {
   return (
    <>
      <section className="w-full flex flex-col items-center">
      <link rel="shortcut icon" href="./assets/icons/logoaba.png" type="image/x-icon"></link>
      <HeroConsultoria />
      <SobreConsultoria />
      </section>
     </>
  );
};

export default ConsultoriaCompleta;