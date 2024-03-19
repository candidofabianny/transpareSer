import React from "react";
import Link from "next/link";
import { Rosarivo } from "next/font/google";
import { orleymore } from "@/assets/fonts/fonts";

const rosarivo = Rosarivo({
  weight: '400',
  subsets: ['latin'],
})

const Atendimento = () => {
  return (
    <section className="bg-[#F9F9F9] justify-center items-center flex flex-col w-full min-h-[620px] py-8">    
        <div className="h-full w-full flex flex-col items-center justify-center gap-8">
           <div className="flex flex-col md:flex-row items-center justify-center gap-10 lg:gap-16 pb-8 lg:p-10">
           <div className="bg-[#971E1E] text-white text-center max-w-[220px] lg:max-w-[330px] lg:text-[110%] rounded-3xl pt-6">
           <div className={`${rosarivo.className}`}>
           SEM ATENDIMENTO HUMANIZADO</div>
           <ul className="bg-[#D9D9D9] text-black text-left list-disc rounded-3xl px-10 py-10 lg:text-[110%] lg:py-14 mt-6">
            <li>insegurança no atendimento</li>
            <li>faltas éticas (mesmo sem querer)</li>
            <li>boas intenções sem apoio e informação para colocar em prática</li>
            </ul></div>  
            <div className="bg-[#8DFF92] text-black text-center max-w-[220px] lg:max-w-[330px] lg:text-[110%] rounded-3xl pt-6">
           <div className={`${rosarivo.className}`}>
           COM ATENDIMENTO HUMANIZADO</div>
           <ul className="bg-[#D9D9D9] text-left rounded-3xl px-10 py-12 lg:text-[110%] lg:py-14 mt-6">
            <li>alinhamento teórico e prático, atualizado e embasado, para oferecer um atendimento ético, acolhedor e que ajuda de verdade</li>
            </ul></div>  
           </div> 
          <div className={`${orleymore.className}`}>
              <Link className="bg-[#7E0505] transition ease-in-out rounded-full text-white text-[1.55rem] px-10 py-4 place-self-center hover:bg-[#BD4646]" href="https://wa.me/message/XCU4MVPJDQJVO1">Faça a sua!</Link>
              </div>
          </div>
         </section>
  );
};

export default Atendimento;