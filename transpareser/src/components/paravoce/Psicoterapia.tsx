import React from "react";
import garantia from "/src/assets/images/paravoce/garanta.png"
import button from "/src/assets/images/paravoce/psicoterapia.png"
import Image from "next/image";
import { orleymore } from "@/assets/fonts/fonts";
import Link from "next/link";

const Psicoterapia = () => {
  return (
    <section id="home"
    className="bg-[#1D1919] justify-center items-center flex flex-col w-full -mt-1 pb-12">    
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4 lg:gap-8 text-white pt-4">
        <div className={`${orleymore.className}`}>
           <p className="md:hidden text-[2.7rem] text-center mt-4">Psicoterapia</p>
           </div>
           <Link href="https://wa.me/message/XCU4MVPJDQJVO1">
          <Image
            alt="gallery"
            className="h-[370px] w-[280px] hover:opacity-40"
            src={button} /></Link>
            <p className="md:hidden text-[1.1rem] px-12 text-center">Atendimento psicológico para mulheres</p>
            <div className={`${orleymore.className}`}>
              <Link className="md:hidden bg-[#D9D9D9] transition ease-in-out rounded-full text-black text-[1.55rem] px-8 py-3 place-self-center hover:bg-[#A10909] hover:text-white" href="https://wa.me/message/XCU4MVPJDQJVO1">Agende a sua!</Link>
              </div>
            <div className="hidden md:block px-6 lg:px-12 md:max-w-[420px] lg:max-w-[580px]">
            <div className={`${orleymore.className}`}>
            <p className="text-[3.1rem] lg:text-[3.9rem] text-left">Psicoterapia</p></div>
            <p className="text-[1.05rem] lg:text-[1.16rem] text-left py-6 pb-10">Atendimento psicológico para mulheres</p>
            <div className={`${orleymore.className}`}>
              <Link className="bg-[#D9D9D9] transition ease-in-out rounded-full text-black text-[1.55rem] px-8 py-3 place-self-center hover:bg-[#A10909] hover:text-white" href="https://wa.me/message/XCU4MVPJDQJVO1">Agende a sua!</Link>
              </div>
            </div> 
             </div>
      </section>
  );
};

export default Psicoterapia;