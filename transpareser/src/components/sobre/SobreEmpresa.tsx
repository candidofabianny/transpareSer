import React from "react";
import sobre from "/src/assets/images/sobre/sobrets.png"
import Image from "next/image";

const SobreEmpresa = () => {
  return (
    <section id="home"
    className="bg-[#F9F9F9] justify-center items-center flex flex-col w-full pt-16 pb-6 md:pb-12">    
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <p className="md:hidden text-[0.8rem] px-14">texto sobre o curso que está aberto, o que está incluso, etc. Todas as informações vão estar aqui. Mais texto e mais uma linha. texto sobre o curso que está aberto, o que está incluso, etc. </p>
            <div className="hidden md:block pl-12 lg:pl-20 lg:max-w-[580px]">
            <p className="text-[1.05rem] lg:text-[1.3rem] pb-20">texto sobre o curso que está aberto, o que está incluso, etc. Todas as informações vão estar aqui. Mais texto e mais uma linha. texto sobre o curso que está aberto, o que está incluso, etc. </p>
            <p className="text-[1.05rem] lg:text-[1.3rem]">texto sobre o curso que está aberto, o que está incluso, etc. Todas as informações vão estar aqui. Mais texto e mais uma linha. texto sobre o curso que está aberto, o que está incluso, etc. </p>
            </div>
            <Image
            alt="gallery"
            className="md:mr-6 lg:mr-20 h-[505px] w-[310px] lg:w-[330px]"
            src={sobre} />
            <p className="md:hidden text-[0.8rem] px-14">texto sobre o curso que está aberto, o que está incluso, etc. Todas as informações vão estar aqui. Mais texto e mais uma linha. texto sobre o curso que está aberto, o que está incluso, etc. </p>
        </div>
      </section>
  );
};

export default SobreEmpresa;