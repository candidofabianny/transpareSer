import React from "react";
import Heropv from "./Heropv";
import Consultoria from "./Consultoria";
import AnaliseColoracao from "./AnaliseColoracao";
import Ebook from "./E-book";

const ParaVoce = () => {
   return (
    <>
      <section className="w-full flex flex-col items-center">
        <Heropv />
        <Consultoria />
        <AnaliseColoracao />
        <Ebook />
      </section>
     </>
  );
};

export default ParaVoce;