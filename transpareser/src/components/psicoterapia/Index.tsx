import React from "react";
import Psicoterapia from "./Psicoterapia";
import SobrePsico from "./Sobre";
import SobrePsicoDois from "./SobrePsico";

const PsicoTerapia = () => {
   return (
    <>
      <section className="w-full flex flex-col items-center">
      <Psicoterapia />
      <SobrePsico />
      <SobrePsicoDois />
      </section>
     </>
  );
};

export default PsicoTerapia;