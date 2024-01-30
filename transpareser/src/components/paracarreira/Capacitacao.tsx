import React from "react";
import metodo from "/src/assets/images/paracarreira/metodoprincipal.png"
import button from "/src/assets/images/paracarreira/confira.png"
import Image from "next/image";
import { catalinavillage } from "@/assets/fonts/fonts";
import Link from "next/link";

const Capacitacao = () => {
  return (
    <section id="home"
    className="bg-[#181515] justify-center items-center flex flex-col w-full -mt-1 py-16">    
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4 lg:gap-2 text-white">
        <div className={`${catalinavillage.className}`}>
           <p className="md:hidden text-[2.3rem] tracking-tight text-left px-12">CAPACITACAO EM ATENDIMENTO HUMANIZADO</p>
           </div>
           <Link href="/metodo-transpareser">
          <Image
            alt="gallery"
            className="object-center object-cover h-[425px] w-[295px] md:h-[425px] md:w-[225px] lg:w-[300px] lg:h-[440px] lg:ml-10 hover:opacity-40"
            src={metodo} /></Link>
            <p className="md:hidden text-[1.05rem] px-8 text-center py-4">Para consultoras de imagem e demais profissionais ligadas à estética, como tatuadoras, micropigmentadoras, esteticistas, nutricionistas, fisioterapeutas e demais áreas</p>
            <p className="md:hidden text-[1.05rem] px-8 text-center">Aqui ensino como humanizar seus atendimentos, tendo como meiores benefícios a satisfação e fidelização das suas clientes!</p>
            <div className="hidden md:block px-6 px-2 md:max-w-[420px] lg:max-w-[580px]">
            <div className={`${catalinavillage.className}`}>
            <p className="text-[2.7rem] tracking-tighter pb-6 text-left">CAPACITACAO EM ATENDIMENTO HUMANIZADO</p></div>
            <p className="text-[1rem] lg:text-[1.16rem] text-right pb-6 px-4">Para consultoras de imagem e demais profissionais ligadas à estética, como tatuadoras, micropigmentadoras, esteticistas, nutricionistas, fisioterapeutas e demais áreas</p>
            <p className="text-[1rem] lg:text-[1.16rem] text-left px-4">Aqui ensino como humanizar seus atendimentos, tendo como meiores benefícios a satisfação e fidelização das suas clientes!</p>
            </div>
             </div>
      </section>
  );
};

export default Capacitacao;