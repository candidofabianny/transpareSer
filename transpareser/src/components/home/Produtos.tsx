"use client";

import React from "react";
import { athenevoyage } from "@/assets/fonts/fonts";
import Image from "next/image";
import imgtest from "/src/assets/images/home/teste.png"

const Produtos = () => {
    return (
        <section id="produtos" 
        className="bg-[url('../assets/images/home/productbg.png')] bg-cover bg-center flex flex-col items-center justify-center w-full">   
        <div className={`${athenevoyage.className}`}>
        <h1 className="text-black text-center leading-none tracking-tighter text-[2.9rem] md:text-[3.1rem] pt-12 pb-4">
          Produtos
        </h1></div>
        <div className="flex justify-center items-center w-full">
        <div className="carousel carousel-center max-w-xxl p-2 lg:space-x-16 space-x-8">
        <div className="flex flex-col justify-center items-center carousel-item">
        <a href="/para-voce">
          <Image src={imgtest} className="hover:grayscale md:h-[340px] md:w-[220px] object-cover" alt="para você"/>
          </a>
          <p className="text-white py-8 text-[1.15rem] max-w-[215px] text-center">conheça todos os serviços pensados diretamente para você e suas necessidades</p>
        </div> 
        <div className="flex flex-col justify-center items-center carousel-item">
        <a href="/para-sua-carreira">
          <Image src={imgtest} className="hover:grayscale md:h-[340px] md:w-[220px] object-covers" alt="carreira"/>
          </a>
          <p className="text-white py-8 text-[1.15rem] max-w-[215px] text-center"> Conheça os serviços para investir em sua carreira e desenvolver sua vida profissional</p>
        </div> 
        <div className="flex flex-col justify-center items-center carousel-item">
        <a href="para-sua-empresa">
          <Image src={imgtest} className="hover:grayscale md:h-[340px] md:w-[220px] object-cover" alt="empresa"/>
          </a>
          <p className="text-white py-8 text-[1.15rem] max-w-[215px] text-center">Conheça todas as soluções para o seu negócio e seus colaboradores</p>
        </div> 
       </div>
        </div> 
      </section>
    );

};

export default Produtos;