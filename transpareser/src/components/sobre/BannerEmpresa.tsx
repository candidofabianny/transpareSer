import React from "react";
import { voigante } from "@/assets/fonts/fonts";
import Link from "next/link";

const BannerEmpresa = () => {
  return (
    <section id="banner"
    className="bg-[url('../assets/images/sobre/bginsta.png')] bgfixed bg-center bg-cover bg-fixed flex flex-col items-center justify-center min-h-[177px] md:min-h-[226px] w-full">    
        <div className="flex flex-col items-center justify-center py-4">
        <div className={`${voigante.className}`}>
        <Link href="/" className="text-white text-[1.8rem] md:text-[2.4rem] lg:text-[2.8rem] px-2 pb-2 md:pb-4 lg:pb-6 text-center leading-8">
        @transpareser
        </Link>
        </div>
        <h1 className="text-white max-w-[350px] md:max-w-[580px] text-center leading-7 text-[0.9rem] md:text-[1.3rem] lg:text-[1.5rem]">
        descubra mais no instagram
        </h1>
        </div>
      </section>
  );
};

export default BannerEmpresa;