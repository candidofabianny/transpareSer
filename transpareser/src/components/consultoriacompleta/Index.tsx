import React from "react";
import HeroConsultoria from "./HeroConsul";
import SobreConsultoria from "./Sobre";
import Beneficios from "./Beneficios";
import Depoimento from "./Depoimento";

const ConsultoriaCompleta = () => {
   return (
    <>
      <section className="w-full flex flex-col items-center">
      <HeroConsultoria />
      <SobreConsultoria />
      <Beneficios />
      <Depoimento />
      </section>
     </>
  );
};

export default ConsultoriaCompleta;