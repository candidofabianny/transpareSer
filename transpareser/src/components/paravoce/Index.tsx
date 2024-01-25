import React from "react";
import Heropv from "./Heropv";
import Consultoria from "./Consultoria";
import AnaliseColoracao from "./AnaliseColoracao";

const ParaVoce = () => {
   return (
    <>
      <section className="w-full flex flex-col items-center">
      <link rel="shortcut icon" href="./assets/icons/logoaba.png" type="image/x-icon"></link>
        <Heropv />
        <Consultoria />
        <AnaliseColoracao />
      </section>
     </>
  );
};

export default ParaVoce;