import React from "react";
import ig from "src/assets/images/consultoria/consultoria.png"
import { barcelony, orleymore } from "@/assets/fonts/fonts";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const HeroConsultoria = () => {
  
  return (
    <section id="home"
    className="flex flex-col justify-end w-full">  
         <div className="bg-[#1F1A1A] md:flex md:flex-row items-center justify-center pt-28 md:pt-12 lg:pt-24 text-center min-h-[500px] md:min-h-[590px]">
              <div><div className={`${barcelony.className}`}>
              <p className="text-white text-[2.5rem] md:text-[3rem]">Consultoria Completa</p></div>
              <p className="text-white pt-8 pb-12 text-[1.28rem] px-6 md:max-w-[430px] lg:max-w-[670px]">texto introdutório sobre o transpareser e uma frase de impacto</p>
              <div className={`${orleymore.className}`}>
              <Link className="bg-[#454242] transition ease-in-out rounded-full text-white text-[1.55rem] px-10 py-4 mb-8 place-self-center hover:bg-[#BD4646]" href="">Adquira já</Link>
              </div>
              </div>
           </div>
      </section>
  );
};

export default HeroConsultoria;