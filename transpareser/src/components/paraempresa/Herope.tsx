import React from "react";
import { athenevoyage, autography } from "@/assets/fonts/fonts";

const HeroConsultoria = () => {
  return (
    <section id="home"
    className="bg-[url('../assets/images/paraempresa/paraempresa.jpeg')] bg-cover bg-start flex flex-col justify-center min-h-[625px] w-full">    
        <div className="bg-stickyblack/60 min-h-[625px] w-full flex flex-col items-left justify-center">
        <div className={`${autography.className}`}>
          <h1 className="text-[3.2rem] md:text-[4.4rem] lg:text-[4.9rem] lg:ml-24 text-white text-left leading-7 pb-10 pt-8 px-8">Para sua empresa</h1>
        </div>
        <div className={`${athenevoyage.className}`}>
        <h1 className="text-white px-8 md:px-16 lg:ml-24 lg:max-w-[800px] leading-none tracking-tighter text-[2.2rem] md:text-[2.7rem] lg:text-[2.8rem]">
        Como posso te ajudar a transparecer seu estilo autêntico
        </h1>
        </div>
        </div>      
      </section>
  );
};

export default HeroConsultoria;