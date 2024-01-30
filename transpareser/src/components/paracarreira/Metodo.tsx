import React from "react";
import metodo from "/src/assets/images/paracarreira/metodoprincipal.png"
import button from "/src/assets/images/paracarreira/confira.png"
import Image from "next/image";
import { against } from "@/assets/fonts/fonts";
import Link from "next/link";

const Metodo = () => {
  return (
    <section id="home"
    className="bg-[#181515] justify-center items-center flex flex-col w-full -mt-1 py-16">    
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4 lg:gap-8 text-white">
        <div className={`${against.className}`}>
           <p className="md:hidden text-[2.3rem] tracking-tight text-center">Metodo TranspareSer</p>
           </div>        
          <Image
            alt="gallery"
            className="h-[415px] w-[285px] lg:w-[320px] lg:h-[440px] lg:ml-10"
            src={metodo} />
            <p className="md:hidden text-[0.9rem] px-8 text-center">Profundo, completo e embasado pela psicologia da moda, ele vai revolucionar a vida das suas clientes e a sua carreira como consultora de imagem! Se você já é da área ou se deseja iniciar na profissão, precisa do Método TranspareSer</p>
            <Link href="/metodo-transpareser">
            <Image
            alt="gallery"
            className="md:hidden h-[68px] w-[166px] "
            src={button} /></Link>
            <div className="hidden md:block px-6 lg:px-12 md:max-w-[420px] lg:max-w-[580px]">
            <div className={`${against.className}`}>
            <p className="text-[2.7rem] lg:text-[3.4rem] tracking-tighter pb-6 text-left">Método TranspareSer</p></div>
            <p className="text-[1rem] lg:text-[1.16rem] text-left">Profundo, completo e embasado pela psicologia da moda, ele vai revolucionar a vida das suas clientes e a sua carreira como consultora de imagem! Se você já é da área ou se deseja iniciar na profissão, precisa do Método TranspareSer</p>
            <Link href="/metodo-transpareser">
            <Image
            alt="gallery"
            className="h-[60px] lg:h-[70px] w-[140px] lg:w-[180px] mt-6 lg:mt-10"
            src={button} /></Link>
            </div>
             </div>
      </section>
  );
};

export default Metodo;