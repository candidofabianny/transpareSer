import React from "react";
import { athenevoyage, autography } from "@/assets/fonts/fonts";
import pinterest from 'src/assets/images/home/pinterest.png'
import profile from 'src/assets/images/home/profile.png'
import instagram from 'src/assets/images/home/instagram.png'
import whatsapp from 'src/assets/images/contato/whatsapp.png'
import Link from "next/link";
import Image from "next/image";

const HeroContato = () => {
  return (
    <section id="home"
    className="bg-[url('../assets/images/contato/bgcontato.png')] bg-cover bg-center flex flex-col items-center justify-center min-h-[645px] w-full">    
        <div className="h-full w-full flex flex-col md:flex-row items-center justify-center gap-12 md:gap-0 text-white py-6">
          <div className="md:w-3/5">
          <div className={`${athenevoyage.className}`}>
          <h1 className="text-[3.15rem] md:text-[3.3rem] lg:text-[4rem] text-center md:text-left md:ml-8 lg:ml-20 md:-mt-12">Entre em contato</h1>
         </div>
          <p className="hidden md:block text-left text-[1.5rem] lg:text-[1.7rem] lg:max-w-[570px] ml-8 lg:ml-20 pr-12 pt-4">texto introdutório sobre o transpareser e uma frase de impacto</p>
       </div>
      
        <ul className="flex justify-center items-center text-white gap-12 lg:gap-16 pt-6 pb-10 md:pb-4 md:mr-8 lg:mr-12 md:w-2/5">
        <Link href="whatsapp">
                <Image src={whatsapp} alt="" className="h-[40px] w-[40px] lg:h-[45px] lg:w-[45px] hover:scale-110">
                </Image>
              </Link>
        <Link href="pinterest">
                <Image src={pinterest} alt="" className="h-[40px] w-[40px] lg:h-[45px] lg:w-[45px] hover:scale-110">
                </Image>
              </Link>
              <Link href="/instagram">
              <Image src={instagram} alt="" className="h-[40px] w-[40px] lg:h-[45px] lg:w-[45px] hover:scale-110">
                </Image>
              </Link>
              <Link href="/email">
              <Image src={profile} alt="" className="h-[40px] w-[40px] lg:h-[45px] lg:w-[45px] hover:scale-110">
                </Image>
              </Link>
            </ul>
       <p className="md:hidden text-center text-[1.5rem] mx-4">texto introdutório sobre o transpareser e uma frase de impacto</p>
       
        </div>     
      </section>
  );
};

export default HeroContato;