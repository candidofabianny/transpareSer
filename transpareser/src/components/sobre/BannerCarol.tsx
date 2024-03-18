import React from "react";
import { voigante } from "@/assets/fonts/fonts";
import Link from "next/link";

const BannerCarol = () => {
  return (
    <section className="bg-[url('../assets/images/sobre/@transpareser.png')] bg-fixed bg-center bg-cover flex flex-col justify-center min-h-[177px] md:min-h-[226px] w-full">    
        <div className="flex flex-col items-center py-4 text-white text-center">
        <div className={`${voigante.className}`}>
        <Link href="https://www.instagram.com/carol_saibert/" className="text-[2.2rem] md:text-[2.8rem] lg:text-[3.4rem] p-2 md:pb-16 leading-8">
        @carol_saibert
        </Link>
        </div>
        <h1 className="leading-7 text-[0.9rem] md:text-[1.3rem] lg:text-[1.4rem]">
        nos acompanhe pelo instagram
        </h1>
        </div>
      </section>
  );
};

export default BannerCarol;