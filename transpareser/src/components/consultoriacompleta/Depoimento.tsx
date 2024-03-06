import React from "react";
import sobre from "/src/assets/images/consultoria/depoimento.png"
import Image from "next/image";
import { athenevoyage } from "@/assets/fonts/fonts";

const Depoimento = () => {
  return (
    <section id="home"
    className="bg-[#F9F9F9] justify-center items-center flex flex-col w-full pt-16 pb-12 md:pb-12">    
        <div className="flex flex-col items-center justify-center gap-8 md:gap-12 lg:gap-16">
          <div className={`${athenevoyage.className}`}>
            <p className="text-[2.8rem] leading-9 text-center">O que já foi entregado</p>
           </div>
           <div className="flex flex-col md:flex-row items-center justify-center">
            <Image alt="" src={sobre} className="w-[80%] md:w-[100%] mb-8"> 
            </Image>
            <p className="text-[1rem] lg:text-[1.1rem]  text-center md:text-left px-8 md:max-w-[400px] lg:max-w-[500px] md:-mt-5">texto sobre o curso que está aberto, o que está incluso, etc. Todas as informações vão estar aqui. Mais texto e mais uma linha. texto sobre o curso que está aberto, o que está incluso, etc.</p>
              </div>
             <div className="flex flex-col md:flex-row items-center justify-center md:items-start lg:gap-4">
              <Image alt="" src={sobre} className="w-[50%] md:w-[40%] my-8 md:-mt-5"> 
            </Image>
            <p className="text-[0.7rem] lg:text-[0.9rem] text-center md:text-left px-14 md:px-4 md:max-w-[240px] lg:max-w-[300px] md:pt-4">texto sobre o curso que está aberto, o que está incluso, etc. Todas as informações vão estar aqui. Mais texto e mais uma linha.</p>
            <Image alt="" src={sobre} className="w-[50%] md:w-[40%] my-8 md:-mt-5"> 
            </Image>
            <p className="text-[0.7rem] lg:text-[0.9rem] text-center md:text-left px-14 md:px-4 md:max-w-[240px] lg:max-w-[300px] md:pt-4">texto sobre o curso que está aberto, o que está incluso, etc. Todas as informações vão estar aqui. Mais texto e mais uma linha.</p>
             </div>
             </div>
      </section>
  );
};

export default Depoimento;