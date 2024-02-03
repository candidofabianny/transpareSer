import React from "react";
import ig from "src/assets/images/consultoria/consultoriaimg.png"
import { athenevoyage, barcelony } from "@/assets/fonts/fonts";
import Image from "next/image";

const HeroConsultoria = () => {
  return (
    <section id="home"
    className="flex flex-col justify-end min-h-[300px] w-full">    
         <div className="diff aspect-[9/16] md:aspect-[20/22]">
          <div className="diff-item-1">
            <div className="bg-[#971E1E] text-primary-content grid place-content-center px-4 gap-8">
            <div className={`${barcelony.className}`}>
              <p className="text-white text-[2.2rem]">Consultoria Completa</p></div>
              <p className="text-white pt-8 text-[1.2rem]">texto introdutório sobre o transpareser e uma frase de impacto</p>
              <div className=""><Image src={ig} alt=""className="object-cover w-[230px] h-[300px]"></Image></div>
              
            </div>
          </div>
          <div className="diff-item-2">
            <div className="bg-[#1F1A1A] grid place-content-end px-4 gap-8">
              <div className={`${barcelony.className}`}>
              <p className="text-white text-[2.2rem]">Consultoria Completa</p></div>
              <p className="text-white pt-8 text-[1.2rem]">texto introdutório sobre o transpareser e uma frase de impacto</p>
              <div className=""><Image src={ig} alt=""className="object-cover w-[230px] h-[300px]"></Image></div>
              </div>
          </div>
          <div className="diff-resizer"></div>
        </div>     
      </section>
  );
};

export default HeroConsultoria;