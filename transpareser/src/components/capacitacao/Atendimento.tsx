import React from "react";
import sobre from "/src/assets/images/capacitacao/carreiras.jpg"
import Image from "next/image";
import Link from "next/link";

const Atendimento = () => {
  return (
    <section className="bg-[#F9F9F9] justify-center items-center flex flex-col w-full py-10">  
    <p className="text-[0.9rem] px-10 md:text-[1.05rem] lg:text-[1.1rem] pb-6">Se você quer aprender a oferecer um atendimento verdadeiramente humanizado e acolhedor, do tipo que encanta e fideliza sua cliente, precisa conhecer esta capacitação!</p>
            <p className="text-[0.9rem] px-10 font-bold md:text-[1.05rem] lg:text-[1.1rem] pb-8 lg:pb-12">Indicada para:</p>
              
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10 lg:gap-20">
            <div className="md:pl-12 lg:pl-20 lg:max-w-[580px]">
             <Image
            alt="gallery"
            className="md:hidden h-[300px] w-[300px] mx-auto mb-8 rounded-full object-cover"
            src={sobre} />
            <div className="collapse bg-base-200 mb-4 max-w-[95%] md:max-w-[100%] ml-2 md:ml-0">
            <div className="collapse-title text-[1rem] lg:text-[1.1rem] font-medium">
            Consultora de imagem
            </div>
          </div>
          <div className="collapse bg-base-200 mb-4 max-w-[95%] md:max-w-[100%] ml-2 md:ml-0">
            <div className="collapse-title text-[1rem] lg:text-[1.1rem] font-medium">
            Esteticista
            </div>
          </div>
          <div className="collapse bg-base-200 mb-4 max-w-[95%] md:max-w-[100%] ml-2 md:ml-0">
            <div className="collapse-title text-[1rem] lg:text-[1.1rem] font-medium">
            Micropigmentadora
            </div>
          </div>
          <div className="collapse bg-base-200 mb-4 max-w-[95%] md:max-w-[100%] ml-2 md:ml-0">
            <div className="collapse-title text-[1rem] lg:text-[1.1rem] font-medium">
            Designer de unhas, sobrancelhas ou cílios
            </div>
          </div>
          <div className="collapse bg-base-200 mb-4 max-w-[95%] md:max-w-[100%] ml-2 md:ml-0">
            <div className="collapse-title text-[1rem] lg:text-[1.1rem] font-medium">
            Tatuadora
            </div>
          </div>
          <div className="collapse bg-base-200 mb-4 max-w-[95%] md:max-w-[100%] ml-2 md:ml-0">
            <div className="collapse-title text-[1rem] lg:text-[1.1rem] font-medium">
            Profissionais de saúde e estética em geral, que trabalham atendendo mulheres
            </div>
          </div>
           </div> 
           <Image
            alt="gallery"
            className="hidden md:block mr-6 md:mr-14 h-[460px] w-[260px] lg:w-[300px] rounded-full object-cover"
            src={sobre} />
             </div>
      </section>
  );
};

export default Atendimento;