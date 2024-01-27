import React from "react";
import top from "/src/assets/images/paravoce/top.png"
import ebook from "/src/assets/images/paravoce/ebook.png"
import Image from "next/image";
import { orleymore } from "@/assets/fonts/fonts";
import Link from "next/link";

const Ebook = () => {
  return (
    <section id="home"
    className="bg-[#F9F9F9] justify-center items-center flex flex-col w-full pb-12">
      <Image
            alt="gallery"
            className=""
            src={top} />    
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4 mt-6 md:mt-0 text-black">
        <div className={`${orleymore.className}`}>
           <p className="md:hidden text-[2.7rem] text-center">E-book desafio</p>
           <p className="md:hidden text-[2.7rem] text-center">da autestima</p>
           </div>
            <p className="md:hidden text-[1rem] px-12 text-center">Firme consigo mesma o compromisso destes 30 dias de ações práticas para começar uma revolução de amor próprio e autenticidade na vida e no vestir</p>
            <div className="hidden md:block px-6 lg:px-12 md:max-w-[420px] lg:max-w-[580px]">
            <div className={`${orleymore.className}`}>
            <p className="text-[3rem] lg:text-[3.9rem] text-left -mt-4">E-book desafio</p>
            <p className="text-[3rem] lg:text-[3.9rem] pb-4 text-left">da autestima</p></div>
            <p className="text-[1.05rem] lg:text-[1.16rem] text-left pr-4">Firme consigo mesma o compromisso destes 30 dias de ações práticas para começar uma revolução de amor próprio e autenticidade na vida e no vestir</p>
            </div> 
            <Image
            alt="gallery"
            className="w-[250px] lg:w-[300px] lg:h-[400px] md:-mt-10 md:mr-8 lg:mr-14"
            src={ebook} />
             </div>
      </section>
  );
};

export default Ebook;