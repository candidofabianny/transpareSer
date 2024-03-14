import React from "react";
import totalframe from "/src/assets/images/home/centergallery.png"
import esquerda from "/src/assets/images/home/esquerdagallery.png"
import direita from "/src/assets/images/home/direitogallery.png"
import Image from "next/image";

const Galeria = () => {
  return (
    <section className="bg-[#1D1A1A] justify-end items-end flex flex-col w-full">    
        <div className="w-full flex flex-row justify-center items-end">
        <Image
          alt="gallery"
          className="hidden md:block w-[120px] lg:w-[200px] h-[170px] lg:h-[290px] mb-24 -mr-16 grayscale hover:grayscale-0"
          src={esquerda} />
          <Image
          alt="gallery"
          className="h-[80%] md:h-[45%] md:w-[52%]"
          src={totalframe} />
          <Image
          alt="gallery"
          className="hidden md:block w-[120px] lg:w-[210px] h-[220px] lg:h-[390px] mb-12 -ml-16 grayscale hover:grayscale-0"
          src={direita} />
    </div>
      </section>
  );
};

export default Galeria;