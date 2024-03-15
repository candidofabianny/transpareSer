import React from "react";
import { catalinavillage } from "@/assets/fonts/fonts";

const HeroCapacitacao = () => {
  return (
    <section className="bg-[url('../assets/images/paracarreira/bgcarreira.jpg')] bg-cover bg-start flex flex-col items-center justify-center min-h-[605px] md:min-h-[505px] w-full">    
        <div className="bg-black/50 min-h-[605px] md:min-h-[505px] h-full w-full flex flex-col items-center justify-center gap-12 md:gap-6 text-white py-6">
        <div className={`${catalinavillage.className}`}>
           <p className="text-[2.2rem] tracking-tight text-left px-12">CAPACITACAO EM ATENDIMENTO HUMANIZADO</p>
           </div>
           <p className="text-[1.2rem] text-left px-12">vá além das boas intenções e acolha com consistência</p>
        </div>     
      </section>
  );
};

export default HeroCapacitacao;