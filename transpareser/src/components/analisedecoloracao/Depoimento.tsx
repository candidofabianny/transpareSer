import React from "react";
import Image from "next/image";
import { holispay, orleymore } from "@/assets/fonts/fonts";
import Link from "next/link";
import depoimento from "src/assets/images/analise/depoimentou.jpeg";
import depoimentoum from "src/assets/images/analise/depoimentod.jpeg";
import depoimentodois from "src/assets/images/analise/depoimentot.jpeg";

const Depoimento = () => {
  return (
    <section className="flex flex-col justify-center items-center w-full bg-[#F9F9F9] min-h-[680px] py-16">  
          <div className={`${holispay.className}`}>
             <p className="text-black text-[2.7rem] md:text-[3rem] lg:text-[3.3rem] leading-10 mb-16">Alguns relatos</p>
              </div>
           <div className="flex flex-col md:flex-row justify-center items-start text-center gap-10">
              <Image src={depoimento} alt="analise de coloração" className="w-[80%] lg:w-[40%]"></Image>
              <Image src={depoimentoum} alt="analise de coloração" className="w-[80%] lg:w-[30%]"></Image>
              <Image src={depoimentodois} alt="analise de coloração" className="md:hidden w-[80%] md:w-[40%]"></Image>
           </div>
           <Image src={depoimentodois} alt="analise de coloração" className="hidden md:block w-[32%] my-10 md:mr-2"></Image>
          </section>
  );
};

export default Depoimento;