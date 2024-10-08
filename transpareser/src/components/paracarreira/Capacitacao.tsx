import React from "react";
import metodo from "/src/assets/images/paracarreira/capacitacao.jpg"
import Image from "next/image";
import { catalinavillage } from "@/assets/fonts/fonts";
import Link from "next/link";

const Capacitacao = () => {
  return (
    <section className="bg-[#181515] justify-center items-center flex flex-col w-full py-10 md:py-16">    
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4 lg:gap-10 text-white">
        <div className={`${catalinavillage.className}`}>
           <p className="md:hidden text-[2.2rem] tracking-tight text-left px-12">CAPACITACAO EM ATENDIMENTO HUMANIZADO</p>
           </div>
           <Link href="/capacitacao-atendimento-humanizado">
          <Image
            alt="gallery"
            className="object-center object-cover h-[435px] w-[300px] md:h-[425px] md:w-[225px] lg:w-[300px] lg:h-[440px] lg:ml-4 hover:opacity-40"
            src={metodo} /></Link>
            <p className="md:hidden text-[1.05rem] px-8 text-center py-4">Para consultoras de imagem e demais profissionais ligadas à estética, como tatuadoras, micropigmentadoras, esteticistas, nutricionistas, fisioterapeutas e demais áreas</p>
            <p className="md:hidden text-[1.05rem] px-8 text-center">Aqui ensino como humanizar seus atendimentos, tendo como maiores benefícios a satisfação e fidelização das suas clientes!</p>
            <div className="hidden md:block px-2 md:max-w-[420px] lg:max-w-[580px]">
            <div className={`${catalinavillage.className}`}>
            <p className="text-[2.4rem] lg:text-[2.7rem] tracking-tighter pb-6 text-left ml-4">CAPACITACAO EM ATENDIMENTO HUMANIZADO</p></div>
            <p className="text-[1.1rem] text-right pb-6 px-4">Para consultoras de imagem e demais profissionais ligadas à estética, como tatuadoras, micropigmentadoras, esteticistas, nutricionistas, fisioterapeutas e demais áreas</p>
            <p className="text-[1.1rem] text-left px-4">Aqui ensino como humanizar seus atendimentos, tendo como maiores benefícios a satisfação e fidelização das suas clientes!</p>
            </div>
            <div className={`${catalinavillage.className}`}>
              <Link className="md:hidden bg-[#7E0505] transition ease-in-out rounded-full text-white text-[1.5rem] px-8 py-2 place-self-center hover:bg-[#BD4646]" href="capacitacao-atendimento-humanizado">Saiba mais</Link>
          </div>
             </div>
      </section>
  );
};

export default Capacitacao;