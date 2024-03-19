import React from "react";
import sobre from "/src/assets/images/sobre/carolsaibert.jpg"
import Image from "next/image";
import { voigante } from "@/assets/fonts/fonts";

const CarolSaibert = () => {
  return (
    <section className="bg-[#F9F9F9] w-full py-14">    
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <div className={`${voigante.className}`}>
           <p className="md:hidden text-[3.3rem] tracking-tight">A Carol Saibert</p>
           </div>
          <Image
            alt="gallery"
            className="h-[490px] w-[310px] lg:w-[320px] lg:h-[520px] rounded-t-full object-cover"
            src={sobre} />
            <p className="md:hidden text-[0.8rem] px-12 text-justify">No currículo sou Psicóloga cognitivo-comportamental e consultora de imagem, com aprofundamento em psicologia da moda. Na vida sou uma mulher completamente apaixonada por pessoas, suas histórias e, especialmente, pela relação com o que vestem. Meu desejo é apoiar o fortalecimento da sua saúde mental e imagem pessoal para que você se sinta verdadeiramente confiante e radiante em sua própria pele, celebrando sua autenticidade e beleza.</p>
            <div className="hidden md:block px-6 lg:px-12 lg:max-w-[580px]">
            <div className={`${voigante.className}`}>
            <p className="text-[3.7rem] lg:text-[4rem] tracking-tight pb-12">A Carol Saibert</p></div>
            <p className="text-[1rem] lg:text-[1.3rem]">No currículo sou Psicóloga cognitivo-comportamental e consultora de imagem, com aprofundamento em psicologia da moda. Na vida sou uma mulher completamente apaixonada por pessoas, suas histórias e, especialmente, pela relação com o que vestem. Meu desejo é apoiar o fortalecimento da sua saúde mental e imagem pessoal para que você se sinta verdadeiramente confiante e radiante em sua própria pele, celebrando sua autenticidade e beleza.</p>
            </div>
             </div>
      </section>
  );
};

export default CarolSaibert;