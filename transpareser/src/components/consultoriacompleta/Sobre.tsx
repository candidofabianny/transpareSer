import React from "react";
import sobre from "/src/assets/images/consultoria/sobreconsultoria.png"
import Image from "next/image";

const SobreConsultoria = () => {
  return (
    <section id="home"
    className="bg-[#F9F9F9] justify-center items-center flex flex-col w-full pt-16 pb-12 md:pb-12">    
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-14">
            <p className="md:hidden text-[0.8rem] px-14">Aprenda a usar melhor o que já tem, a comprar com consciência e facilite sua rotina recebendo looks montados especialmente para você. Para você que:</p>
            <div className="md:pl-12 lg:pl-20 lg:max-w-[580px]">
            <p className="hidden md:block text-[1.05rem] lg:text-[1.22rem] pb-8 lg:pb-12">Aprenda a usar melhor o que já tem, a comprar com consciência e facilite sua rotina recebendo looks montados especialmente para você. Para você que:</p>
            <Image
            alt="gallery"
            className="md:hidden h-[505px] w-[310px] mx-auto mb-4 object-fill"
            src={sobre} />
            <div className="collapse collapse-plus bg-base-200 mb-4 max-w-[95%] md:max-w-[100%] ml-2 md:ml-0">
            <input type="radio" name="my-accordion-3" /> 
            <div className="collapse-title text-[1rem] lg:text-[1.1rem] font-medium">
            Sempre acha que não tem o que vestir
            </div>
            <div className="collapse-content text-[0.8rem] lg:text-[1rem]"> 
              <p>não se sente segura escolhendo roupas ou acessórios</p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 mb-4 max-w-[95%] md:max-w-[100%] ml-2 md:ml-0">
            <input type="radio" name="my-accordion-3" /> 
            <div className="collapse-title text-[1rem] lg:text-[1.1rem] font-medium">
            Não conhece seu estilo </div>
            <div className="collapse-content text-[0.8rem] lg:text-[1rem]"> 
              <p>e não tem clareza sobre como sua imagem pessoal está afetando sua comunicação</p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 mb-4 max-w-[95%] md:max-w-[100%] ml-2 md:ml-0">
            <input type="radio" name="my-accordion-3" /> 
            <div className="collapse-title text-[1rem] lg:text-[1.1rem] font-medium">
            Deseja se vestir de forma mais autêntica
            </div>
            <div className="collapse-content text-[0.8rem] lg:text-[1rem]"> 
              <p>com praticidade e sem estresse</p>
            </div>
          </div>          
             </div>
            <Image
            alt="gallery"
            className="hidden md:block mr-6 md:mr-14 h-[486px] w-[290px] lg:w-[300px] object-fill"
            src={sobre} />
             </div>
      </section>
  );
};

export default SobreConsultoria;