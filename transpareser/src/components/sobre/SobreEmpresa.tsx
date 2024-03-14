import React from "react";
import sobre from "/src/assets/images/sobre/transparesersobre.png"
import Image from "next/image";

const SobreEmpresa = () => {
  return (
    <section className="bg-[#F9F9F9] justify-center items-center flex flex-col w-full pt-16 pb-12 md:pb-12">    
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <p className="md:hidden text-[0.8rem] px-14">A TranspareSer surgiu da necessidade de dividir apoio e conhecimento com mulheres que desejam desenvolver sua própria imagem pessoal ou a de suas clientes de forma profunda e autêntica.</p>
            <div className="hidden md:block pl-12 lg:pl-20 lg:max-w-[580px]">
            <p className="text-[1.05rem] lg:text-[1.2rem] pb-12">A TranspareSer surgiu da necessidade de dividir apoio e conhecimento com mulheres que desejam desenvolver sua própria imagem pessoal ou a de suas clientes de forma profunda e autêntica.</p>
            <p className="text-[1.05rem] lg:text-[1.2rem] pb-12">Unindo psicologia e consultoria de imagem de forma única para oferecer uma experiência verdadeiramente transformadora, cada serviço é projetado para te apoiar a abraçar e expressar sua autenticidade com confiança.</p>
            <p className="text-[1.05rem] lg:text-[1.2rem]">Até o momento centenas de mulheres já foram impactadas direta e indiretamente.</p>
            </div>
            <Image
            alt="gallery"
            className="md:mr-6 lg:mr-20 h-[505px] w-[310px] lg:w-[330px]"
            src={sobre} />
            <p className="md:hidden text-[0.8rem] px-14">Unindo psicologia e consultoria de imagem de forma única para oferecer uma experiência verdadeiramente transformadora, cada serviço é projetado para te apoiar a abraçar e expressar sua autenticidade com confiança.</p>
           </div>
      </section>
  );
};

export default SobreEmpresa;