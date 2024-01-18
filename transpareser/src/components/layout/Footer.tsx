"use client"

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import Headroom from "react-headroom";
import { athenevoyage, galabiyah, voigante, lovingambros, autography } from "@/assets/fonts/fonts";
import pinterest from 'src/assets/images/home/pinterest.png'
import profile from 'src/assets/images/home/profile.png'
import instagram from 'src/assets/images/home/instagram.png'

const Footer = () => {
  return (
      <footer className="w-full ">
        <div className="bg-[#181515] ">
       <div className={`${voigante.className}`}>
        <div className="flex justify-center items-center">
          <div></div>
          <div className={`${lovingambros.className}`}>
          <ul className="hidden md:block lg:hidden flex flex-col justify-center items-center pl-14 pr-10 pt-10 text-white gap-6 text-[1.4rem]">
              <li>
                Home
              </li>
              <li>
                Contato
              </li>
              <li>
                Sobre
              </li>
            </ul> 
            </div>
          <Link href="/" className="text-white text-center transition-all duration-300 ease-in-out text-[2.5rem] md:text-[2.8rem] pt-4">
              TranspareSer
            </Link>
            <div className={`${lovingambros.className}`}>
          <ul className="hidden md:block lg:hidden flex flex-col justify-center items-center pl-10 pt-10 text-white gap-6 text-[1.4rem]">
              <li>
                Para sua empresa
              </li>
              <li>
                Para sua carreira
              </li>
              <li>
                Para você
              </li>
            </ul> 
            </div>
           </div>
           </div>
           <div className={`${autography.className}`}>
            <div className="hidden md:block lg:hidden text-white text-center transition-all duration-300 ease-in-out text-[2rem] pb-2">
              por Carol Saibert
            </div>
            </div>
           <div className={`${lovingambros.className}`}>
           <ul className="md:hidden flex justify-center items-center text-white gap-4">
              <li>
                Para sua empresa
              </li>
              <li>
                Para sua carreira
              </li>
            </ul> 
            <div className="md:hidden flex justify-center items-center text-white pt-3">
                Para você
              </div>
              <ul className="flex justify-center items-center text-white gap-10 pt-4 pb-10">
              <li>
                <Image src={pinterest} alt="" className="h-[25px] w-[25px]">
                </Image>
              </li>
              <li>
              <Image src={profile} alt="" className="h-[25px] w-[25px]">
                </Image>
              </li>
              <li>
              <Image src={instagram} alt="" className="h-[25px] w-[25px]">
                </Image>
              </li>
            </ul>
              <div className="flex justify-center items-center text-white text-[0.85rem] text-light">
              TranspareSer ® 2023
              </div>
              <div className="flex justify-center items-center text-white pb-4 text-[0.85rem] text-light">
              desenvolvido por F2SC
              </div>
          </div>
          </div>
    </footer>
  );
};

export default Footer;