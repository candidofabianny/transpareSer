import React from "react";
import analise from "/src/assets/images/paravoce/acbutton.png"
import cima from "/src/assets/images/paravoce/cima.png"
import baixo from "/src/assets/images/paravoce/baixo.png"
import Image from "next/image";
import { holispay } from "@/assets/fonts/fonts";
import Link from "next/link";

const AnaliseColoracao = () => {
  return (
    <section className="bg-[#F9F9F9] bg-center bg-cover justify-center items-center flex flex-col w-full">    
         <Image
            alt="gallery"
            src={cima}
            className="object-cover"/>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4">
        <div className={`${holispay.className}`}>
           <p className="md:hidden text-[3rem] text-[#8C0606] tracking-tight text-center pt-8 leading-none px-4">Análise de Coloração</p>
           </div>
            <p className="md:hidden text-[1rem] px-8 text-center pb-12">Para a mulher que deseja conhecer as cores que mais favorecem sua beleza natural, sem deixar de lado sua singularidade e seus estados emocionais</p>
            <div className="hidden md:block lg:px-12 md:max-w-[420px] lg:max-w-[580px]">
            <div className={`${holispay.className}`}>
            <p className="text-[3.4rem] lg:text-[3.9rem] text-[#8C0606] tracking-tight px-6 md:mr-4 leading-none pb-6 -mt-4 lg:pb-8 text-right">Análise de Coloração</p></div>
            <p className="text-[1.12rem] lg:text-[1.26rem] text-right md:pl-8 lg:pl-10 md:mr-4">Para a mulher que deseja conhecer as cores que mais favorecem sua beleza natural, sem deixar de lado sua singularidade e seus estados emocionais</p>
            </div>
            <Link href="/analise-de-coloracao">
          <Image
            alt=""
            className="h-[410px] w-[265px] md:h-[400px] lg:w-[300px] lg:h-[460px] md:mr-20 -mt-10"
            src={analise} /></Link>
             </div>
             <Image
             alt=""
             className="md:-mt-8 lg:-mt-12 object-cover"
             src={baixo} />
      </section>
  );
};

export default AnaliseColoracao;