import React from "react";
import Heropv from "./Heropv";
import Consultoria from "./Consultoria";
import AnaliseColoracao from "./AnaliseColoracao";
import Workshop from "./Workshop";

const ParaVoce = () => {
   return (
    <>
      <section className="w-full flex flex-col items-center">
      <link rel="shortcut icon" href="./assets/icons/logoaba.png" type="image/x-icon"></link>
        <Heropv />
        <Consultoria />
        <AnaliseColoracao />
        <Workshop />
      </section>
     </>
  );
};

export default ParaVoce;