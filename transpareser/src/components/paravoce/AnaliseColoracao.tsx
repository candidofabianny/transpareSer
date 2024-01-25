import React from "react";
import analise from "/src/assets/images/paravoce/analisecoloracao.png"
import Image from "next/image";
import { voigante, barcelony, holispay } from "@/assets/fonts/fonts";
import Link from "next/link";

const AnaliseColoracao = () => {
  return (
    <section id="home"
    className="bg-[url('../assets/images/paravoce/bganalise.png')] bg-center bg-cover justify-center items-center flex flex-col w-full pt-20 md:pt-8 lg:md:pt-2">    
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4 lg:gap-6">
        <div className={`${holispay.className}`}>
           <p className="md:hidden text-[3rem] text-[#8C0606] tracking-tight text-center pt-24 leading-none px-4">Análise de Coloração</p>
           </div>
            <p className="md:hidden text-[1rem] px-12 text-center">Para a mulher que deseja conhecer as cores que mais favorecem sua beleza natural, sem deixar de lado sua singularidade e seus estados emocionais</p>
            <div className="hidden md:block px-6 lg:px-12 md:max-w-[420px] lg:max-w-[580px]">
            <div className={`${holispay.className}`}>
            <p className="text-[3.4rem] lg:text-[3.9rem] text-[#8C0606] tracking-tight px-6 leading-none pb-4 lg:pb-8 text-right">Análise de Coloração</p></div>
            <p className="text-[1.12rem] lg:text-[1.2rem] text-right lg:pl-10">Para a mulher que deseja conhecer as cores que mais favorecem sua beleza natural, sem deixar de lado sua singularidade e seus estados emocionais</p>
            </div>
            <Link href="/analise-de-coloracao">
          <Image
            alt="gallery"
            className="h-[410px] w-[280px] md:w-[270px] lg:w-[300px] md:h-[420px] lg:h-[440px] md:mr-10"
            src={analise} /></Link>
             </div>
      </section>
  );
};

export default AnaliseColoracao;