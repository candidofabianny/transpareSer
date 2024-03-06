import React from "react";
import Image from "next/image";

const Beneficios = () => {
  return (
    <section id="beneficios"
    className="bg-[url('../assets/images/consultoria/descrição.jpg')] bg-cover bg-center justify-center items-center flex flex-col w-full min-h-[580px]">    
        <div className="bg-stickyblack/75 min-h-[580px] h-full w-full flex flex-col items-center justify-center gap-8">
          <h1 className="text-white text-left font-rosarivo text-[2rem] lg:text-[2.8rem] pt-12 md:pt-4">O QUE VOCÊ TERÁ</h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 lg:gap-16 pb-12">
           <div className="bg-[#D9D9D9] max-w-[220px] rounded-3xl px-6 py-12">
           Sobre a consultoria completa Sobre a consultoria completa Sobre a consultoria completa Sobre a co
          </div> 
          <div className="bg-[#D9D9D9] max-w-[220px] rounded-3xl px-6 py-12">
           Sobre a consultoria completa Sobre a consultoria completa Sobre a consultoria completa Sobre a co
          </div>  
          <div className="bg-[#D9D9D9] max-w-[220px] rounded-3xl px-6 py-12">
           Sobre a consultoria completa Sobre a consultoria completa Sobre a consultoria completa Sobre a co
          </div> 
          </div>          
          </div>
         </section>
  );
};

export default Beneficios;