import React from "react";
import { athenevoyage, voigante, lovingambros, autography } from "@/assets/fonts/fonts";
import Link from "next/link";
import totalframe from "/src/assets/images/home/totalframe.png"
import exemplo from "/src/assets/images/home/exemplo.png"
import middle from "/src/assets/images/home/middle.png"
import Image from "next/image";

const Galeria = () => {
  return (
    <section id="home"
    className="bg-[url('../assets/images/home/bggaleria.png')] bg-cover bg-center flex flex-col items-center justify-center min-h-[605px] w-full">    
        <div className="bg-black/60 min-h-[605px] w-full flex flex-col md:flex-row justify-center items-center">
   <div className="flex justify-center ">
        <Image
          alt="gallery"
          className="block h-[550px] w-[550px] rounded-lg object-cover"
          src={totalframe} />
        </div>
    </div>
      </section>
  );
};

export default Galeria;