import React from "react";
import Image from "next/image";

const Beneficios = () => {
  return (
    <section id="beneficios"
    className="bg-[url('../assets/images/consultoria/descrição.jpg')] bg-cover bg-center justify-center items-center flex flex-col w-full min-h-[550px]">    
        <div className="bg-stickyblack/75 min-h-[550px] h-full w-full flex flex-col items-center justify-center gap-8">
          <h1 className="text-white text-left font-rosarivo text-[2.1rem] lg:text-[2.8rem]">O QUE VOCÊ TERÁ</h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-16">
           <div className="bg-[#D9D9D9] max-w-[220px] rounded-2xl px-6 py-12">
           Sobre a consultoria completa Sobre a consultoria completa Sobre a consultoria completa Sobre a co
          </div> 
          <div className="bg-[#D9D9D9] max-w-[120px] lg:max-w-[220px] rounded-2xl px-4 md:px-6 py-8 md:py-12 text-[0.8rem] md:text-[1.5rem]">
           Sobre a consultoria completa Sobre a consultoria completa Sobre a consultoria completa Sobre a co
          </div>  
          <div className="bg-[#D9D9D9] max-w-[220px] rounded-2xl px-6 py-12">
           Sobre a consultoria completa Sobre a consultoria completa Sobre a consultoria completa Sobre a co
          </div> 
          </div>          
          </div>
          
      </section>
  );
};

export default Beneficios;