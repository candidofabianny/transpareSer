"use client";

import React from "react";
import { athenevoyage } from "@/assets/fonts/fonts";
import Image from "next/image";
import voce from "/src/assets/images/home/paravoce.png"
import carreira from "/src/assets/images/home/paracarreira.png"
import empresa from "/src/assets/images/home/paraempresa.png"

const Produtos = () => {
    return (
        <section id="produtos" 
        className="bg-[url('../assets/images/home/bgprodutos.png')] bg-cover flex flex-col items-center justify-center w-full pb-12">   
        <div className={`${athenevoyage.className}`}>
        <h1 className="text-black text-center leading-none tracking-tighter text-[2.9rem] md:text-[3.1rem] pt-12 pb-6">
          Produtos
        </h1></div>
        <div className="flex justify-center items-center w-full">
        <div className="carousel carousel-center max-w-xxl p-2 lg:space-x-16 space-x-8 text-white text-center">
        <div className="flex flex-col justify-center items-center carousel-item">
        <a href="/para-voce">
          <Image src={voce} className="hover:grayscale md:h-[320px] md:w-[200px] lg:h-[350px] lg:w-[225px]" alt="para você"/>
          </a>
          <p className="py-8 text-[100%] max-w-[235px]">conheça todos os serviços pensados diretamente para você e suas necessidades</p>
        </div> 
        <div className="flex flex-col justify-center items-center carousel-item">
        <a href="/para-sua-carreira">
          <Image src={carreira} className="hover:grayscale md:h-[320px] md:w-[200px] lg:h-[350px] lg:w-[225px]" alt="carreira"/>
          </a>
          <p className="py-8 text-[100%] max-w-[255px]">conheça os serviços para investir em sua carreira e desenvolver sua vida profissional</p>
        </div> 
        <div className="flex flex-col justify-center items-center carousel-item">
        <a href="para-sua-empresa">
          <Image src={empresa} className="hover:grayscale md:h-[320px] md:w-[200px] lg:h-[350px] lg:w-[225px]" alt="empresa"/>
          </a>
          <p className="py-8 text-[100%] max-w-[245px]">conheça todas as soluções para o seu negócio e seus colaboradores</p>
        </div> 
       </div>
        </div> 
      </section>
    );

};

export default Produtos;