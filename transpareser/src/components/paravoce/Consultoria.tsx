import React from "react";
import consultoria from "/src/assets/images/paravoce/buttonconsultoria.png"
import Image from "next/image";
import { barcelony } from "@/assets/fonts/fonts";
import Link from "next/link";

const Consultoria = () => {
  return (
    <section id="home"
    className="bg-[#181515] justify-center items-center flex flex-col w-full pt-14 pb-2">    
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4 lg:gap-8 text-white">
        <div className={`${barcelony.className}`}>
           <p className="md:hidden text-[2.9rem] tracking-tight text-center">Consultoria Completa</p>
           </div>
           <Link href="/consultoria">
          <Image
            alt="gallery"
            className="h-[410px] w-[280px] md:w-[270px] lg:w-[300px] md:h-[420px] lg:h-[440px] lg:ml-10"
            src={consultoria} /></Link>
            <p className="md:hidden text-[1rem] px-12 text-center">Para a mulher que deseja uma experiência completa, com companhamento durante 10 sessões que vão revolucionar sua relação com seu estilo, com seu guarda-roupas e consigo mesma</p>
            <div className="hidden md:block px-6 lg:px-12 md:max-w-[420px] lg:max-w-[580px]">
            <div className={`${barcelony.className}`}>
            <p className="text-[3rem] lg:text-[3.9rem] tracking-tighter pb-10 text-center lg:text-left">Consultoria Completa</p></div>
            <p className="text-[1.12rem] lg:text-[1.16rem] text-center lg:text-left">Para a mulher que deseja uma experiência completa, com companhamento durante 10 sessões que vão revolucionar sua relação com seu estilo, com seu guarda-roupas e consigo mesma</p>
            </div>
             </div>
      </section>
  );
};

export default Consultoria;