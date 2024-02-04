import React from "react";
import { autography } from "@/assets/fonts/fonts";

const Banner = () => {
  return (
    <section id="banner"
    className="bg-bordo flex flex-col items-center justify-center min-h-[240px] w-full">    
        <div className="md:flex md:flex-row md:items-center md:gap-10">
        <div className="bg-white w-[3px] h-[240px] hidden md:block"></div>
        <h1 className="text-white max-w-[350px] md:max-w-[580px] text-center leading-7 text-[1.25rem] md:text-[1.5rem] pb-10 px-4 md:pb-0">
        A autenticidade é o seu super-poder. Se conheça mais, se ame mais e se permita transparecer seu estilo autêntico
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