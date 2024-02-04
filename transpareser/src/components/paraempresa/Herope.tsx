import React from "react";
import { athenevoyage, autography } from "@/assets/fonts/fonts";

const HeroConsultoria = () => {
  return (
    <section id="home"
    className="bg-[url('../assets/images/paraempresa/bgempresa.png')] bg-cover bg-center flex flex-col justify-center min-h-[595px] w-full">    
        <div className="h-full w-full flex flex-col items-center justify-center md:items-left md:justify-left">
        <div className={`${autography.className}`}>
          <h1 className="text-[3.8rem] md:text-[4.4rem] lg:text-[4.9rem] text-white text-center md:text-left leading-7 pb-10 pt-8 px-8">Para sua empresa</h1>
        </div>
        <div className={`${athenevoyage.className}`}>
        <h1 className="text-white text-left px-8 md:px-16 lg:px-22 leading-none tracking-tighter text-[2.3rem] md:text-[2.7rem] lg:text-[2.8rem]">
        Como posso te ajudar a transparecer seu estilo autêntico
        </h1>
        </div>
        </div>      
      </section>
  );
};

export default HeroConsultoria;