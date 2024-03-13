import React from "react";
import dum from "/src/assets/images/consultoria/depoimentotres.jpeg"
import dois from "/src/assets/images/consultoria/depoimentoum.jpeg"
import dtres from "/src/assets/images/consultoria/depoimentodois.jpeg"
import dquatro from "/src/assets/images/consultoria/depoimentoquatro.jpeg"
import Image from "next/image";
import { athenevoyage } from "@/assets/fonts/fonts";

const Depoimento = () => {
  return (
    <section id="home"
    className="bg-[#F9F9F9] justify-center items-center flex flex-col w-full pt-16 pb-12 md:pb-12">    
        <div className="flex flex-col items-center justify-center gap-8 md:gap-12 lg:gap-16">
          <div className={`${athenevoyage.className}`}>
            <p className="text-[2.8rem] leading-9 text-center">O que já foi entregue</p>
           </div>
           <div className="flex flex-col md:flex-row items-center justify-center">
            <Image alt="" src={dum} className="w-[70%] md:w-[60%] mb-8"> 
            </Image>
            </div>
             <div className="flex flex-col md:flex-row items-center justify-center md:items-start gap-6 lg:gap-12">
              <Image alt="" src={dquatro} className="w-[40%] md:w-[30%] my-8 md:-mt-5"> 
            </Image>
            <Image alt="" src={dtres} className="w-[30%] md:w-[20%] my-8 md:-mt-5"> 
              </Image>
              <Image alt="" src={dois} className="w-[45%] md:w-[35%] my-8 md:-mt-5"> 
              </Image>
             </div>
             </div>
      </section>
  );
};

export default Depoimento;