import React from "react";
import consultoria from "/src/assets/images/paravoce/buttonconsultoria.png"
import garantia from "/src/assets/images/paravoce/garanta.png"
import Image from "next/image";
import { holispay, barcelony, orleymore } from "@/assets/fonts/fonts";
import Link from "next/link";

const Workshop = () => {
  return (
    <section id="home"
    className="bg-[#181515] justify-center items-center flex flex-col w-full pt-4 pb-2">    
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4 lg:gap-8 text-white">
        <div className={`${orleymore.className}`}>
           <p className="md:hidden text-[2.7rem] text-center">Workshop</p>
           <p className="md:hidden text-[2.7rem] text-center">Estilo Autêntico</p>
           </div>
           <Link href="/consultoria">
          <Image
            alt="gallery"
            className="h-[410px] w-[280px] md:w-[270px] lg:w-[300px] md:h-[420px] lg:h-[440px] md:ml-10"
            src={consultoria} /></Link>
            <p className="md:hidden text-[1rem] px-12 text-center">Uma experiência  em grupo com muita informação e interação com outras mulheres que também desejam revolucionar o próprio estilo</p>
            <div className="hidden md:block px-6 lg:px-12 md:max-w-[420px] lg:max-w-[580px]">
            <div className={`${orleymore.className}`}>
            <p className="text-[3.1rem] lg:text-[3.9rem] text-left -mt-6">Workshop</p>
            <p className="text-[3.1rem] lg:text-[3.9rem] pb-6 text-left">Estilo Autêntico</p></div>
            <p className="text-[1.05rem] lg:text-[1.16rem] text-left pr-4">Uma experiência  em grupo com muita informação e interação com outras mulheres que também desejam revolucionar o próprio estilo</p>
            <Link href="/workshop-estilo-autentico">
            <Image
            alt="gallery"
            className="w-[170px] h-[60px] ml-4 mt-4"
            src={garantia} /></Link>
            </div>
            
             </div>
      </section>
  );
};

export default Workshop;