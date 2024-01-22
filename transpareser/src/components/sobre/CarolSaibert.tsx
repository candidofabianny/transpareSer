import React from "react";
import sobre from "/src/assets/images/sobre/carolSaibert.png"
import Image from "next/image";
import { voigante } from "@/assets/fonts/fonts";

const CarolSaibert = () => {
  return (
    <section id="home"
    className="bg-[#F9F9F9] justify-center items-center flex flex-col w-full py-14">    
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <div className={`${voigante.className}`}>
           <p className="md:hidden text-[3.33rem] tracking-tight">A Carol Saibert</p>
           </div>
          <Image
            alt="gallery"
            className="h-[505px] w-[310px] lg:w-[328px] lg:h-[528px]"
            src={sobre} />
            <p className="md:hidden text-[0.8rem] px-10">No currículo sou Psicóloga cognitivo-comportamental e consultora de imagem, com aprofundamento em psicologia da moda. Na vida sou esposa do Thiago e mãe da Helena, completamente apaixonada por pessoas, suas histórias e, especialmente, pela relação com o que vestem. Busco contribuir com a saúde mental através da imagem pessoal</p>
            <div className="hidden md:block px-6 lg:px-12 lg:max-w-[580px]">
            <div className={`${voigante.className}`}>
            <p className="text-[3.7rem] lg:text-[4rem] tracking-tight pb-12">A Carol Saibert</p></div>
            <p className="text-[1rem] lg:text-[1.3rem]">No currículo sou Psicóloga cognitivo-comportamental e consultora de imagem, com aprofundamento em psicologia da moda. Na vida sou esposa do Thiago e mãe da Helena, completamente apaixonada por pessoas, suas histórias e, especialmente, pela relação com o que vestem. Busco contribuir com a saúde mental através da imagem pessoal</p>
            </div>
            
             </div>
      </section>
  );
};

export default CarolSaibert;