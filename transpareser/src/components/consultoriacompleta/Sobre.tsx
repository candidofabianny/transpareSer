import React from "react";
import sobre from "/src/assets/images/consultoria/sobre.png"
import Image from "next/image";

const SobreConsultoria = () => {
  return (
    <section id="home"
    className="bg-[#F9F9F9] justify-center items-center flex flex-col w-full pt-16 pb-12 md:pb-12">    
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <p className="md:hidden text-[0.8rem] px-14">texto sobre o curso que está aberto, o que está incluso, etc. Todas as informações vão estar aqui. Mais texto e mais uma linha. texto sobre o curso que está aberto, o que está incluso, etc. </p>
            <div className="md:pl-12 lg:pl-20 lg:max-w-[580px]">
            <p className="hidden md:block text-[1.05rem] lg:text-[1.22rem] pb-8 lg:pb-12">texto sobre o curso que está aberto, o que está incluso, etc. Todas as informações vão estar aqui. Mais texto e mais uma linha. texto sobre o curso que está aberto, o que está incluso, etc. </p>
            <Image
            alt="gallery"
            className="md:hidden h-[505px] w-[310px] mx-auto mb-4 object-fill"
            src={sobre} />
            <div className="collapse collapse-plus bg-base-200 mb-4 max-w-[95%] md:max-w-[100%] mx-1">
            <input type="radio" name="my-accordion-3" /> 
            <div className="collapse-title text-[1rem] lg:text-[1.25rem] font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content text-[0.8rem] lg:text-[1rem]"> 
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 mb-4 max-w-[95%] md:max-w-[100%] mx-1">
            <input type="radio" name="my-accordion-3" /> 
            <div className="collapse-title text-[1rem] lg:text-[1.25rem] font-medium">
              Click to open this one
            </div>
            <div className="collapse-content text-[0.8rem] lg:text-[1rem]"> 
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 mb-4 max-w-[95%] md:max-w-[100%] mx-1">
            <input type="radio" name="my-accordion-3" /> 
            <div className="collapse-title text-[1rem] lg:text-[1.25rem] font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content text-[0.8rem] lg:text-[1rem]"> 
              <p>hello</p>
            </div>
          </div>          
             </div>
            <Image
            alt="gallery"
            className="hidden md:block mr-6 lg:mr-20 h-[486px] w-[290px] lg:w-[320px] object-fill"
            src={sobre} />
             </div>
      </section>
  );
};

export default SobreConsultoria;