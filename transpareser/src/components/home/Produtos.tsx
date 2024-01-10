"use client";

import cardsData from "./cardsData";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay, Navigation} from "swiper/modules";
import 'swiper/css/bundle';
import { athenevoyage, voigante, lovingambros, autography } from "@/assets/fonts/fonts";
import Link from "next/link";
import Image from "next/image";
import imgtest from "C:/Users/candi/transpareSer/transpareser/src/assets/images/home/teste.png"

const Produtos = () => {
    return (
        <section id="produtos" 
        className="bg-[url('../assets/images/home/productbg.png')]  flex flex-col items-center justify-center w-full">   
        <div className={`${athenevoyage.className}`}>
        <h1 className="text-black text-center leading-none tracking-tighter text-[2.9rem] md:text-[3.1rem] py-12">
          Produtos
        </h1></div>
        <div className="w-full">
        <div className="carousel carousel-center max-w-xxl p-4 space-x-4">
  <div className="carousel-item">
    <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="rounded-box" />
  </div> 
  <div className="carousel-item">
    <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" className="rounded-box" />
  </div> 
  <div className="carousel-item">
    <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" className="rounded-box" />
  </div> 
  <div className="carousel-item">
    <img src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" className="rounded-box" />
  </div> 
  <div className="carousel-item">
    <img src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" className="rounded-box" />
  </div> 
  <div className="carousel-item">
    <img src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" className="rounded-box" />
  </div> 
  <div className="carousel-item">
    <img src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" className="rounded-box" />
  </div>
</div>
        </div>       
      </section>
    );

};

export default Produtos;