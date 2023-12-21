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
        className="bg-[url('../assets/images/home/productbg.png')]  flex flex-col items-center justify-center w-full">   
        <div className={`${athenevoyage.className}`}>
        <h1 className="text-black text-center leading-none tracking-tighter text-[2.9rem] md:text-[3.1rem] py-12">
          Produtos
        </h1></div>
        <div className="w-full">
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
            350:{
              slidesPerView: 1.4,
            },
           450:{
              slidesPerView: 2,
            },
            546:{
              slidesPerView: 2.1,
            },
            730:{
              slidesPerView: 2.8,
            },
            992:{
              slidesPerView: 3,
            },
          }}
          className="flex items-center justify-center mx-auto pt-14">
          {cardsData.map((card) => (
            <SwiperSlide key={card.id}>
              <div className="bg-transparent w-full h-full">
                  <div className="flex justify-center items-center ease-in-out duration-200 hover:grayscale">
                  <Link href="" key={card.href}>
                    <Image
                      src={card.image}
                      alt={card.name}
                      width={220}
                      height={350}
                      className="md:w-[250px] md:h-[400px] lg:w-[280px] lg:h-[430px]"
                    />
                    </Link>
                    </div>
                    <div className="text-center pt-10">
                      <p className="text-white text-[1.26rem] lg:text-[1.36rem] px-8">
                        {card.text}
                      </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>       
      </section>
    );

};

export default Produtos;