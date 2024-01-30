import React from "react";
import Heropc from "./Heropc";
import Metodo from "./Metodo";
import Masterclass from "./Masterclass";
import Capacitacao from "./Capacitacao";

const ParaCarreira = () => {
   return (
    <>
      <section className="w-full flex flex-col items-center">
      <link rel="shortcut icon" href="./assets/icons/logoaba.png" type="image/x-icon"></link>
        <Heropc />
        <Metodo />
        <Masterclass />
        <Capacitacao />
      </section>
     </>
  );
};

export default ParaCarreira;