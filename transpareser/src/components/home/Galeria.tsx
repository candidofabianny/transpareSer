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
    className="bg-[url('../assets/images/home/bggaleria.png')] bg-cover bg-center justify-center items-center flex flex-col min-h-[500px] w-full">    
        <div className="bg-black/60 min-h-[500px] w-full flex flex-row justify-center items-end">
        <Image
          alt="gallery"
          className="h-[480px] md:h-[500px] w-[500px] md:w-[550px] object-cover"
          src={totalframe} />
    </div>
      </section>
  );
};

export default Galeria;