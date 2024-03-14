import React from "react";
import { voigante } from "@/assets/fonts/fonts";
import Link from "next/link";

const BannerCarol = () => {
  return (
    <section className="bg-[url('../assets/images/sobre/@transpareser.png')] bg-fixed bg-center bg-cover flex flex-col items-center justify-center min-h-[177px] md:min-h-[226px] w-full">    
        <div className="flex flex-col items-center justify-center py-4">
        <div className={`${voigante.className}`}>
        <Link href="https://www.instagram.com/carol_saibert/" className="text-white text-[2.2rem] md:text-[2.8rem] lg:text-[3.4rem] px-2 pb-2 md:pb-4 lg:pb-6 text-center leading-8">
        @carolsaibert
        </Link>
        </div>
        <h1 className="text-white max-w-[350px] md:max-w-[580px] text-center leading-7 text-[0.9rem] md:text-[1.3rem] lg:text-[1.4rem]">
        nos acompanhe pelo instagram
        </h1>
        </div>
      </section>
  );
};

export default BannerCarol;