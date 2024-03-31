import React from "react";
import HeroCapacitacao from "./HeroCapacitacao";
import Atendimento from "./Atendimento";
import Atender from "./Atender";
import BeneficiosCapacitacao from "./Beneficios";

const CapacitacaoAtendimento = () => {
   return (
    <>
      <section className="w-full flex flex-col items-center">
      <HeroCapacitacao />
      <Atender />
      <Atendimento />
      <BeneficiosCapacitacao />
      </section>
     </>
  );
};

export default CapacitacaoAtendimento;