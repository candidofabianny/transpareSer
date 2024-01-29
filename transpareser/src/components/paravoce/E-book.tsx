import React from "react";
import top from "/src/assets/images/paravoce/top.png"
import ebook from "/src/assets/images/paravoce/ebook.png"
import buttonimg from "/src/assets/images/paravoce/buttonebook.png"
import button from "/src/assets/images/paravoce/adquiraaqui.png"
import Image from "next/image";
import { catalinavillage } from "@/assets/fonts/fonts";
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
        <div className={`${catalinavillage.className}`}>
           <p className="md:hidden text-[2.7rem] text-center tracking-tighter">E-book desafio</p>
           <p className="md:hidden text-[2.7rem] text-center tracking-tighter leading-8">da autestima</p>
           </div>
           <div className="hidden md:block px-6 lg:px-12 md:max-w-[420px] lg:max-w-[580px]">
            <div className={`${catalinavillage.className}`}>
            <p className="text-[3rem] lg:text-[3.9rem] text-left tracking-tighter leading-8">E-book desafio</p>
            <p className="text-[3rem] lg:text-[3.9rem] pb-4 text-left tracking-tighter">da autestima</p></div>
            <p className="text-[0.95rem] lg:text-[1.16rem] text-left pr-4 pb-2">Firme consigo mesma o compromisso destes 30 dias de ações práticas para começar uma revolução de amor próprio e autenticidade na vida e no vestir</p>
            <Link href="/ebook-autoestima">
            <Image
            alt="gallery"
            className="w-[150px] ml-10 pt-4"
            src={button} /></Link>
            </div> 
            <Image
            alt="gallery"
            className="hidden md:block w-[250px] lg:w-[300px] lg:h-[400px] -mt-4 md:-mt-10 md:mr-8 lg:mr-14"
            src={ebook} />
            <Link href="/ebook-autoestima">
            <Image
            alt="gallery"
            className="md:hidden w-[290px] -mt-4"
            src={buttonimg} /></Link>
             <p className="md:hidden text-[1rem] px-12 text-center">Firme consigo mesma o compromisso destes 30 dias de ações práticas para começar uma revolução de amor próprio e autenticidade na vida e no vestir</p>
             </div>
      </section>
  );
};

export default Ebook;