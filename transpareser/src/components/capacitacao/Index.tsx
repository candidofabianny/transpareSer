import React from "react";
import HeroCapacitacao from "./HeroCapacitacao";
import Atendimento from "./Atendimento";

const CapacitacaoAtendimento = () => {
   return (
    <>
      <section className="w-full flex flex-col items-center">
      <HeroCapacitacao />
      <Atendimento />
      </section>
     </>
  );
};

export default CapacitacaoAtendimento;