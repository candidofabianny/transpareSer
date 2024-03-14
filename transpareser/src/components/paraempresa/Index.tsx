import React from "react";
import Herope from "./Herope";
import SobreEmpresa from "./Sobre";
import SobreCodigo from "./Codigo";

const ParaEmpresa = () => {
   return (
    <>
      <section className="w-full flex flex-col items-center">
      <Herope />
      <SobreEmpresa />
      <SobreCodigo />
      </section>
     </>
  );
};

export default ParaEmpresa;