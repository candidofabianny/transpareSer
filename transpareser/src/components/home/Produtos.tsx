"use client";

import React from "react";
import { athenevoyage, voigante, lovingambros, autography } from "@/assets/fonts/fonts";
import Link from "next/link";
import Image from "next/image";
import imgtest from "/src/assets/images/home/teste.png"

const Produtos = () => {
    return (
        <section id="produtos" 
        className="bg-[url('../assets/images/home/productbg.png')]  flex flex-col items-center justify-center w-full">   
        <div className={`${athenevoyage.className}`}>
        <h1 className="text-black text-center leading-none tracking-tighter text-[2.9rem] md:text-[3.1rem] pt-12 pb-4">
          Produtos
        </h1></div>
        <div className="flex justify-center items-center w-full">
        <div className="carousel carousel-center max-w-xxl p-4 lg:space-x-16 space-x-8">
        <div className="flex flex-col justify-center items-center carousel-item">
        <a href="#">
          <Image src={imgtest} className="hover:grayscale md:h-[340px] md:w-[220px]" alt="produtos"/>
          </a>
          <p className="text-white py-6 text-[1.25rem] max-w-[200px] text-center pb-10">texto sobre teste xto texxto texxto texxto texxto texteste teste fnciona</p>
        </div> 
        <div className="flex flex-col justify-center items-center carousel-item">
        <a href="#">
          <Image src={imgtest} className="hover:grayscale md:h-[340px] md:w-[220px]" alt="produtos"/>
          </a>
          <p className="text-white py-6 text-[1.25rem] max-w-[200px] text-center pb-10">text sobre xto texxto texxto texxto textextotexto oxto sobre</p>
        </div> 
        <div className="flex flex-col justify-center items-center carousel-item">
        <a href="#">
          <Image src={imgtest} className="hover:grayscale md:h-[340px] md:w-[220px]" alt="produtos"/>
          </a>
          <p className="text-white py-6 text-[1.25rem] max-w-[200px] text-center pb-10">texto xto texxto texxto texxto textextotextotexto sobre</p>
        </div> 
       </div>
        </div> 
      </section>
    );

};

export default Produtos;