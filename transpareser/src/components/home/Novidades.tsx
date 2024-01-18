import React from "react";
import { athenevoyage, voigante, lovingambros, autography } from "@/assets/fonts/fonts";
import Link from "next/link";
import Image from "next/image";
import imgtest from "/src/assets/images/home/novidades.png";
import imga from "/src/assets/images/home/ladoa.png";
import imgb from "/src/assets/images/home/ladob.png";

const Novidades = () => {
  return (
    <section id="home"
    className="bg-[#F9F9F9] bg-cover bg-center flex flex-col items-center justify-center pb-6 w-full">    
        <div className={`${athenevoyage.className}`}>
        <h1 className="text-black text-center leading-none tracking-tighter text-[2.9rem] md:text-[3.1rem] pt-12 pb-4">
          Novidades
        </h1></div>
         <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-1 gap-6 h-5/6 w-4/5 mx-auto">
          <div className="bg-transparent row-span-1">
            <p className="text-protonred pb-4 text-[0.9rem] md:text-[1rem]">texto sobre sobre sobr esobre o curso que está aberto, o que está incluso, etc. Todas as informações vão estar aqui.</p>
            <p className="text-protonred text-center font-bold text-[1.6rem] md:text-[2rem] pb-6">31/01/24</p>
            <p className="pb-6 text-[0.9rem] md:text-[1rem]">texto sobre o curso que está aberto, sobre sobre sobre sobre sobre o que está incluso, etc. Todas as informações vão estar aqui.</p>
            </div>
            <div className="hidden md:block bg-transparent">
            <Image src={imgtest} alt="" className="justify-self-end"></Image>
            </div>
            <div className="md:hidden bg-transparent">
            <Image src={imga} alt=""></Image>
            </div>
            <p className="md:hidden text-protonred pb-6 text-[0.8rem] text-center">texto sobre sobre sobre sobresobre sobre sobre o curso que está aberto, o que está incluso, etc. Todas as informações vão estar aqui.</p>
         <p className="md:hidden pb-6 text-[0.8rem] text-center">texto sobre o curso que está aberto, sobre sobre sobre sobre sobre sobre o que está incluso, etc. Todas as informações vão estar aqui.</p>
      <div className="hidden md:block bg-transparent">
         <p className="text-protonred pb-6 text-[0.9rem] md:text-[1rem] text-end">texto sobre sobre sobre sobresobre sobre sobre o curso que está aberto, o que está incluso, etc. Todas as informações vão estar aqui.</p>
         <p className="pb-6 text-[0.9rem] md:text-[1rem] text-end">texto sobre o curso que está aberto, sobre sobre sobre sobre sobre sobre o que está incluso, etc. Todas as informações vão estar aqui.</p>
      </div>
   </div>
           
      </section>
  );
};

export default Novidades;