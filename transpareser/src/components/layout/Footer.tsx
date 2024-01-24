"use client"

import Link from "next/link";
import Image from "next/image";
import { galabiyah, voigante, autography } from "@/assets/fonts/fonts";
import pinterest from 'src/assets/images/home/pinterest.png'
import profile from 'src/assets/images/home/profile.png'
import instagram from 'src/assets/images/home/instagram.png'

const Footer = () => {
  return (
      <footer className="w-full">
        <div className="bg-[#181515]">
        <div className="hidden lg:block">
          <div className="flex justify-around p-8">
              <div className="py-10">
                <div className="pb-6">
                  <Link href="/pinterest">
                  <Image src={pinterest} alt="" className="h-[30px] w-[30px]">
                  </Image>
                </Link>
              </div>
              <div className="pb-6">
                <Link href="/pinterest">
                <Image src={profile} alt="" className="h-[30px] w-[30px]">
                  </Image>
                </Link>
              </div>
              <div>
                <Link href="/pinterest">
                <Image src={instagram} alt="" className="h-[30px] w-[30px]">
                  </Image>
                </Link>
              </div>
              </div>
               <div className={`${galabiyah.className}`}>
          <ul className="flex flex-col justify-center items-left pl-14 pr-10 pt-10 text-white gap-3 text-[1.4rem]">
          <Link href="/">
                Home
              </Link>
              <Link href="/contato">
                Contato
              </Link>
              <Link href="/sobre">
                Sobre
              </Link>
            </ul> 
            </div>
            <div className={`${galabiyah.className}`}>
          <ul className="flex flex-col items-left pl-10 pt-10 text-white gap-3 text-[1.4rem]">
              <Link href="/para-sua-empresa">
                Para sua empresa
              </Link>
              <Link href="/para-sua-carreira">
                Para sua carreira
              </Link>
              <Link href="/para-voce">
                Para você
              </Link>
            </ul> 
            </div>
            <div>
            <div className={`${voigante.className}`}>
            <Link href="/" className="text-white text-center transition-all duration-300 ease-in-out text-[2.5rem] md:text-[2.8rem] pt-10 pl-6">
              TranspareSer </Link></div>
              <div className={`${autography.className}`}>
            <div className="text-white text-center transition-all duration-300 ease-in-out text-[2rem] pb-2">
              por Carol Saibert
            </div>
            </div>
            <div className="flex gap-4 text-white text-[0.8rem] text-light">
              <p>TranspareSer ® 2023</p>
              <p>desenvolvido por F2SC</p>
              </div>
            </div>
              </div>
            </div>
       <div className={`${voigante.className}`}>
        <div className="flex justify-center items-center">
          <div></div>
          <div className={`${galabiyah.className}`}>
          <ul className="hidden md:block lg:hidden flex flex-col justify-center items-center pl-14 pr-10 pt-10 text-white gap-6 text-[1.2rem]">
              <div>
              <Link href="/">
                Home
              </Link></div>
              <div>
              <Link href="/contato">
                Contato
              </Link></div>
              <div>
              <Link href="/sobre">
                Sobre
              </Link></div>
            </ul> 
            </div>
          <Link href="/" className="lg:hidden text-white text-center transition-all duration-300 ease-in-out text-[2.5rem] md:text-[2.8rem] pt-4 md:pt-12">
              TranspareSer
              <div className={`${autography.className}`}>
            <div className="hidden md:block lg:hidden text-white text-center transition-all duration-300 ease-in-out text-[2rem] pb-2">
              por Carol Saibert
            </div>
            </div>
            </Link>
            <div className={`${galabiyah.className}`}>
          <ul className="hidden md:block lg:hidden flex flex-col pl-10 pt-10 text-white gap-6 text-[1.2rem]">
          <div>
          <Link href="/para-sua-empresa">
                Para sua empresa
              </Link></div>
              <div>
              <Link href="/para-sua-carreira">
                Para sua carreira
              </Link>  </div>
              <div>
              <Link href="/para-voce">
                Para você
              </Link>
              </div>
            </ul> 
            </div>
           </div>
           
           </div>
           <div className={`${galabiyah.className}`}>
           <ul className="md:hidden flex justify-center items-center text-white gap-4">
           <Link href="/para-sua-empresa">
                Para sua empresa
              </Link>
              <Link href="/para-sua-carreira">
                Para sua carreira
              </Link>
            </ul> 
            <div className="md:hidden flex justify-center items-center text-white pt-3">
              <Link href="/para-voce">
                Para você
              </Link>
              </div>
              <ul className="lg:hidden flex justify-center items-center text-white gap-10 md:gap-14 pt-6 pb-10 md:pb-4">
              <Link href="pinterest">
                <Image src={pinterest} alt="" className="h-[25px] w-[25px]">
                </Image>
              </Link>
              <Link href="/profile">
              <Image src={profile} alt="" className="h-[25px] w-[25px]">
                </Image>
              </Link>
              <Link href="/instagram">
              <Image src={instagram} alt="" className="h-[25px] w-[25px]">
                </Image>
              </Link>
            </ul>
              <div className="lg:hidden flex justify-center items-center md:justify-between text-white text-[0.85rem] text-light md:pl-6 md:pr-6 md:pb-4">
              <p>TranspareSer ® 2023</p>
              <p></p>
              <p className="hidden md:block">desenvolvido por F2SC</p>
              </div>
              <div className="md:hidden flex justify-center items-center md:justify-end text-white pb-4 text-[0.85rem] text-light">
              desenvolvido por F2SC
              </div>
          </div>
          </div>
    </footer>
  );
};

export default Footer;