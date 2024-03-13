import React from "react";
import { holispay } from "@/assets/fonts/fonts";

const Beneficios = () => {
  return (
    <section id="beneficios"
    className="bg-[#1F1A1A] flex flex-col justify-center items-center w-full min-h-[580px] lg:min-h-[600px] pb-10">  
        <div className={`${holispay.className}`}>
        <p className="text-[2.8rem] md:text-[3rem] text-white text-center px-2 py-12">Se você...</p>
        </div>
            <div className="flex flex-col items-center w-[90%] md:w-[80%] lg:w-[65%]">
            <div className="collapse collapse-plus bg-[#D9D9D9] m-4">
            <input type="radio" name="my-accordion-3"/> 
            <div className="collapse-title text-[1rem] lg:text-[1.3rem] font-medium">
            Erra na hora de comprar maquiagem
            </div>
            <div className="collapse-content text-[0.8rem] lg:text-[1.2rem]"> 
              <p>A análise ajuda encontrar os melhores tons e subtons para a sua pele</p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-[#D9D9D9] m-4">
            <input type="radio" name="my-accordion-3"/> 
            <div className="collapse-title text-[1rem] lg:text-[1.3rem] font-medium">
            Fica insegura ao escolher cores de roupas e acessórios
            </div>
            <div className="collapse-content text-[0.8rem] lg:text-[1.2rem]"> 
              <p>A análise transmite a segurança de saber suas melhores combinações</p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-[#D9D9D9] m-4">
            <input type="radio" name="my-accordion-3"/> 
            <div className="collapse-title text-[1rem] lg:text-[1.3rem] font-medium">
            Quer ressaltar sua beleza natural </div>
            <div className="collapse-content text-[0.8rem] lg:text-[1.2rem]"> 
              <p>Adquira a sua análise de coloração pelo link!</p>
            </div>
          </div>          
             </div>
          </section>
  );
};

export default Beneficios;