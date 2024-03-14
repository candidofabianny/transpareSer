import React from "react";
import { barcelony, orleymore } from "@/assets/fonts/fonts";
import Link from "next/link";

const HeroConsultoria = () => {
  
  return (
    <section className="flex flex-col justify-end w-full">  
         <div className="bg-[#8B1E1E] md:flex md:flex-row items-center justify-center pt-28 md:pt-12 lg:pt-24 text-center min-h-[500px]">
              <div><div className={`${barcelony.className}`}>
              <p className="text-white text-[2.5rem] md:text-[3rem] pt-6">Consultoria Completa</p></div>
              <p className="text-white pt-8 pb-12 text-[1.28rem] px-6 md:max-w-[430px] lg:max-w-[630px]">revolucione sua relação com seu estilo, com seu guarda-roupas e consigo mesma</p>
              <div className={`${orleymore.className}`}>
              <Link className="bg-[#BD4646] transition ease-in-out rounded-full text-white text-[1.55rem] px-10 py-4 mb-8 place-self-center hover:bg-[#7E0505]" href="https://wa.me/message/XCU4MVPJDQJVO1">Adquira já</Link>
              </div>
              </div>
           </div>
      </section>
  );
};

export default HeroConsultoria;