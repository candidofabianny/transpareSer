import React from "react";
import metodo from "/src/assets/images/paracarreira/metodoprincipal.png"
import button from "/src/assets/images/paracarreira/aprendamais.png"
import Image from "next/image";
import { premint } from "@/assets/fonts/fonts";
import Link from "next/link";

const Masterclass = () => {
  return (
    <section className="bg-[#F9F9F9] justify-center items-center flex flex-col w-full -mt-1 py-16">    
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4 lg:gap-2 text-black">
        <div className={`${premint.className}`}>
           <p className="md:hidden text-[3.3rem] tracking-tight text-center">Masterclass</p>
           </div>
            <p className="md:hidden text-[0.9rem] px-6 text-center">A Psicologia da Moda é uma área recente, que ainda gera dúvidas e curiosidade. Se você quer aprender mais sobre ela e como ela pode te ajudar, participe da próxima masterclass de introdução!</p>            
          <Image
            alt="gallery"
            className="md:hidden h-[415px] w-[285px] object-cover"
            src={metodo} />
            <Link href="/metodo-transpareser">
            <Image
            alt="gallery"
            className="md:hidden h-[68px] w-[166px] "
            src={button} /></Link>
            
            <div className="hidden md:block px-6 lg:px-12 md:max-w-[420px] lg:max-w-[580px]">
            <div className={`${premint.className}`}>
            <p className="text-[2.7rem] lg:text-[3.6rem] tracking-tighter pb-8 lg:pb-6 text-left">Masterclass</p></div>
            <p className="text-[1rem] lg:text-[1.16rem] text-left">A Psicologia da Moda é uma área recente, que ainda gera dúvidas e curiosidade. Se você quer aprender mais sobre ela e como ela pode te ajudar, participe da próxima masterclass de introdução!</p>
            <Link href="/metodo-transpareser">
            <Image
            alt="gallery"
            className="h-[70px] lg:h-[80px] w-[150px] lg:w-[190px] ml-12 mt-6 lg:mt-10"
            src={button} /></Link>
            </div>
            <Image
            alt="gallery"
            className="hidden md:block h-[415px] w-[290px] mr-8 object-cover"
            src={metodo} />
             </div>
      </section>
  );
};

export default Masterclass;