import React from "react";
import { voigante } from "@/assets/fonts/fonts";
import Link from "next/link";

const BannerEmpresa = () => {
  return (
    <section className="bg-[url('../assets/images/sobre/transpareserbg.png')] bg-start bg-cover bg-fixed flex flex-col justify-center min-h-[177px] md:min-h-[226px] w-full">    
        <div className="flex flex-col items-center py-4 text-white text-center">
        <div className={`${voigante.className}`}>
        <Link href="https://www.instagram.com/transpare_ser?igsh=dzh3ZXN3MHJxazNh&utm_source=qr" className="text-[2.2rem] md:text-[2.8rem] lg:text-[3.4rem] p-2 md:pb-10 leading-8">
        @transpare_ser
        </Link>
        </div>
        <h1 className="leading-7 text-[0.9rem] md:text-[1.3rem] lg:text-[1.5rem]">
        descubra mais no instagram
        </h1>
        </div>
      </section>
  );
};

export default BannerEmpresa;