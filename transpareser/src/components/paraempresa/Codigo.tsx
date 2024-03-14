import React from "react";
import sobre from "/src/assets/images/paracarreira/imagemcarreira.png"
import Image from "next/image";
import Link from "next/link";
import { catalinavillage } from "@/assets/fonts/fonts";

const SobreCodigo = () => {
  return (
    <section className="bg-[#F9F9F9] justify-center items-center flex flex-col w-full pb-12">  
    <div className={`${catalinavillage.className}`}>      
    <p className="text-[2rem] md:text-[3rem] pt-6">Codigo de Vestimenta</p></div>  
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-14">
             <div className="px-8 md:max-w-[580px]">
            <p className="text-[1.05rem] lg:text-[1.22rem] p-8 lg:pb-12">Para empresas que precisam implementar ou atualizar um código de vestimenta e querem fazer isso de forma atualizada e humanizada</p>
            <Link href="https://wa.me/message/XCU4MVPJDQJVO1" className="collapse bg-base-200 hover:bg-[#8DFF92] mb-4 max-w-[95%] md:max-w-[100%] ml-2 md:ml-0">
            <div className="collapse-title text-[1rem] lg:text-[1.1rem] font-medium">
            Desenvolvimento de uniforme
            </div>
          </Link>      
          <Link href="https://wa.me/message/XCU4MVPJDQJVO1" className="collapse bg-base-200 hover:bg-[#8DFF92] mb-4 max-w-[95%] md:max-w-[100%] ml-2 md:ml-0">
            <div className="collapse-title text-[1rem] lg:text-[1.1rem] font-medium">
            Definição e implementação de código de vestimenta
            </div>
          </Link>     
          <Link href="https://wa.me/message/XCU4MVPJDQJVO1" className="collapse bg-base-200 hover:bg-[#8DFF92] mb-4 max-w-[95%] md:max-w-[100%] ml-2 md:ml-0">
            <div className="collapse-title text-[1rem] lg:text-[1.1rem] font-medium">
            Obtenha o seu!
            </div>
          </Link>   
           </div> 
             </div>
      </section>
  );
};

export default SobreCodigo;