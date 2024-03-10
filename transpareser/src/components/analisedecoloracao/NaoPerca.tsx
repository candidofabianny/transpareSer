import React from "react";
import Link from "next/link";
import { orleymore } from "@/assets/fonts/fonts";

const Naoperca = () => {
  return (
    <section id="beneficios"
    className="bg-[url('../assets/images/analise/naoperca.jpg')] bg-cover bg-center justify-center items-center flex flex-col w-full min-h-[620px]">    
        <div className="bg-stickyblack/75 min-h-[680px] h-full w-full flex flex-col items-center justify-center gap-8">
          <h1 className="text-white text-left font-rosarivo text-[2rem] lg:text-[2.8rem] pt-12 md:pt-4">NÃO PERCA</h1>
           <div className="flex flex-col md:flex-row items-center justify-center gap-10 lg:gap-16 pb-8 lg:p-10">
           <div className="bg-[#D9D9D9] max-w-[220px] lg:max-w-[330px] rounded-3xl px-6 py-12">
           Sobre a consultoria completa Sobre a consultoria completa Sobre a consultoria completa Sobre a co
          </div>  
          <div className="bg-[#D9D9D9] max-w-[220px] lg:max-w-[330px] rounded-3xl px-6 py-12">
           Sobre a consultoria completa Sobre a consultoria completa Sobre a consultoria completa Sobre a co
          </div> 
          </div> 
          <div className={`${orleymore.className}`}>
              <Link className="bg-[#BD4646] transition ease-in-out rounded-full text-white text-[1.55rem] px-10 py-4 place-self-center hover:bg-[#7E0505]" href="https://wa.me/message/XCU4MVPJDQJVO1">Faça a sua!</Link>
              </div>
              <div className="py-6 md:py-0"></div>
          </div>
         </section>
  );
};

export default Naoperca;