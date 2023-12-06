"use client";

import cardsData from "./cardsData";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay, Navigation} from "swiper/modules";
import 'swiper/css/bundle';
import { athenevoyage, voigante, lovingambros, autography } from "@/assets/fonts/fonts";
import Link from "next/link";
import Image from "next/image";

const Produtos = () => {
    return (
        <section id="produtos" 
        className="bg-white flex flex-col items-center justify-center min-h-[720px] w-full">   
        <div className="bg-white h-[246px] w-full">
        <div className={`${athenevoyage.className}`}>
        <h1 className="text-black text-center leading-none tracking-tighter text-[2.9rem] md:text-[3.1rem] pt-10">
          Produtos
        </h1></div>
        </div> 
        
        <div className="bg-black h-[446px] w-full">
        <div className="bg-[url('../assets/images/home/home.jpg')] bg-cover bg-center min-h-[246px] w-full">
        <Swiper
          freeMode={true}
          autoplay={{
            delay: 3000,
            pauseOnMouseEnter: true,
          }}
          slidesPerView={1.2}
          spaceBetween={3}
          navigation={false}
          modules={[Autoplay, FreeMode, Pagination, Navigation]}
          breakpoints={{
            400:{
              slidesPerView: 1.4,
            },
           500:{
              slidesPerView: 1.9,
            },
            556:{
              slidesPerView: 2.1,
            },
            730:{
              slidesPerView: 2.8,
            },
            992:{
              slidesPerView: 3,
            },
            1200:{
              slidesPerView: 4,
            },
          }}
          className="flex items-center justify-center mx-auto pt-14">
          {cardsData.map((card) => (
            <SwiperSlide key={card.id}>
              <div className="bg-white border border-gray_smooth shadow-lg w-[225px] h-[308px] rounded-2xl py-6 px-1">
                  <div className="flex justify-center items-center">
                    <Image
                      src={card.image}
                      alt={card.name}
                      width={170}
                      height={170}
                    />
                    </div>
                    <div className="text-center pt-4">
                      <h2 className="font-aclonica text-[1rem] text-black">
                        {card.name}
                      </h2>
                      <p className="text-black text-[0.75rem]">
                        {card.text}
                      </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>    
        </div>    
      </section>
    );

};

export default Produtos;