import React from "react";
import { autography } from "@/assets/fonts/fonts";

const Banner = () => {
  return (
    <section className="bg-bordo flex flex-col items-center justify-center min-h-[210px] w-full">    
        <div className="md:flex md:flex-row md:items-center md:gap-10">
        <div className="bg-white w-[3px] h-[210px] hidden md:block"></div>
        <h1 className="text-white max-w-[350px] md:max-w-[580px] text-center leading-7 text-[1.15rem] md:text-[1.4rem] lg:text-[1.6rem] pb-10 px-4 md:pb-0">
        A autenticidade é o seu super-poder. E eu vou te guiar para colocá-lo em prática!
        </h1>
        <div className={`${autography.className}`}>
        <h1 className="hidden lg:block text-white text-[2.5rem] transform rotate-12">
        seja você
        </h1>
        </div>
        <div className="bg-white w-full h-[2.5px] md:hidden"></div>  
        </div>
      </section>
  );
};

export default Banner;