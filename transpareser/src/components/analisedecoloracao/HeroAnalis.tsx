import React from "react";
import Image from "next/image";
import { holispay, orleymore } from "@/assets/fonts/fonts";
import Link from "next/link";
import imagem from "src/assets/images/analise/heroanalise.jpg";

const HeroAnalise = () => {
  return (
    <section id="home"
    className="flex flex-col md:flex-row justify-center items-center w-full bg-[#F9F9F9] min-h-[680px] md:gap-4 lg:gap-14">  
         <div className="flex flex-col justify-center items-start text-center">
              <div><div className={`${holispay.className}`}>
              <p className="text-[#8C0606] text-[2.7rem] md:text-[3rem] lg:text-[3.3rem] pt-28 md:pt-2 leading-10">Análise de Coloração</p></div>
              <p className="text-black px-8 py-12 md:py-16 text-[1.3rem] md:max-w-[500px]">conheça suas cores, eleve sua imagem</p>
              <div className={`${orleymore.className}`}>
              <Link className="bg-[#BD4646] transition ease-in-out rounded-full text-white text-[1.55rem] px-10 py-4 place-self-center hover:bg-[#7E0505]" href="https://wa.me/message/XCU4MVPJDQJVO1">Agende a sua!</Link>
              </div>
              </div>
           </div>
           <Image src={imagem} alt="analise de coloração" className="w-[360px] h-[540px] md:w-[340px] md:h-[520px] rounded-t-full my-10 mt-12 md:mt-24 md:mr-2"></Image>
      </section>
  );
};

export default HeroAnalise;