import React from "react";
import sobre from "/src/assets/images/psicoterapia/descobertas.png"
import Image from "next/image";

const SobrePsico = () => {
  return (
    <section className="bg-[#A33737] justify-center items-center flex flex-col w-full py-12 md:pt-0 text-white">    
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            <div className="md:hidden text-[0.9rem] text-left px-10">
            <p>A psicoterapia ajuda no reconheimento de sentimentos, pensamentos e comportamentos, nos permitindo maior clareza sobre o próprio funcionamento e favorecendo a substituição de padrões disfuncionais por padrões saudáveis.</p>
            <p className="py-6">Através dela você poderá:</p>
            <ul className="ml-10 list-disc">
            <li>Lidar melhor com desafios da vida</li>
            <li>Quebrar padrões e ciclos que trazem sofrimento</li>
            <li>Definir limites pessoais</li>
            <li>Ter mais equilíbrio emocional</li></ul></div>
             <div className="md:pl-12 lg:pl-20 lg:max-w-[580px]">
            <p className="hidden md:block text-[1.05rem] lg:text-[1.22rem] pb-8 md:pb-10">A psicoterapia ajuda no reconheimento de sentimentos, pensamentos e comportamentos, nos permitindo maior clareza sobre o próprio funcionamento e favorecendo a substituição de padrões disfuncionais por padrões saudáveis.</p>
            <p className="hidden md:block text-[1.05rem] lg:text-[1.22rem] pb-4">Através dela você poderá:</p>
            <ul className="hidden md:block text-[1.05rem] lg:text-[1.22rem] ml-10 list-disc">
            <li>Lidar melhor com desafios da vida</li>
            <li>Quebrar padrões e ciclos que trazem sofrimento</li>
            <li>Definir limites pessoais</li>
            <li>Ter mais equilíbrio emocional</li></ul>
            <Image
            alt="gallery"
            className="md:hidden h-[500px] w-[310px] mx-auto object-fill"
            src={sobre} />
             </div>
            <Image
            alt="gallery"
            className="hidden md:block mr-6 md:mr-14 mt-10 h-[480px] w-[290px] lg:w-[300px] object-fill"
            src={sobre} />
             </div>
      </section>
  );
};

export default SobrePsico;