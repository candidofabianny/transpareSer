import React from "react";
import sobre from "/src/assets/images/psicoterapia/atendimento.jpg"
import Image from "next/image";
import Link from "next/link";

const Atendimento = () => {
  return (
    <section className="bg-[#F9F9F9] justify-center items-center flex flex-col w-full py-4 md:py-10">    
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10">
            <p className="md:hidden text-[0.8rem] px-10">Fazendo psicoterapia comigo você será acolhida sem nenhum tipo de julgamento e terá um espaço seguro e sigiloso para trabalhar suas questões. Lembrando que o psicólogo é o profissional capacitado para oferecer psicoterapia com qualidade, por isso, além de psicóloga (CRP 08/26022), também sou especialista em Terapia Cognitivo-Comportamental (TCC)</p>
            <div className="md:pl-12 lg:pl-20 lg:max-w-[580px]">
            <p className="hidden md:block text-[1.05rem] lg:text-[1.1rem] pb-8 lg:pb-12">Fazendo psicoterapia comigo você será acolhida sem nenhum tipo de julgamento e terá um espaço seguro e sigiloso para trabalhar suas questões. Lembrando que o psicólogo é o profissional capacitado para oferecer psicoterapia com qualidade, por isso, além de psicóloga (CRP 08/26022), também sou especialista em Terapia Cognitivo-Comportamental (TCC)</p>
            <Image
            alt="gallery"
            className="md:hidden h-[505px] w-[310px] mx-auto mb-8 rounded-t-full object-cover"
            src={sobre} />
             <div className="collapse collapse-plus bg-base-200 mb-4 max-w-[95%] md:max-w-[100%] ml-2 md:ml-0">
            <input type="radio" name="my-accordion-3" /> 
            <div className="collapse-title text-[1rem] lg:text-[1.1rem] font-medium">
            Atendimento exclusivo para mulheres
            </div>
            <div className="collapse-content text-[0.8rem] lg:text-[1rem]"> 
              <p>considerando todas as especificidades de ser mulher</p>
            </div>
          </div>
          
          <div className="collapse collapse-plus bg-base-200 mb-4 max-w-[95%] md:max-w-[100%] ml-2 md:ml-0">
            <input type="radio" name="my-accordion-3"/> 
            <div className="collapse-title text-[1rem] lg:text-[1.1rem] font-medium">
            Sessões on-line
            </div>
            <div className="collapse-content text-[0.8rem] lg:text-[1rem]"> 
              <p>facilitando a rotina e encurtando distâncias para qualquer lugar do mundo</p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 mb-4 max-w-[95%] md:max-w-[100%] ml-2 md:ml-0">
            <input type="radio" name="my-accordion-3" /> 
            <div className="collapse-title text-[1rem] lg:text-[1.1rem] font-medium">
            Apenas particular
            </div>
            <div className="collapse-content text-[0.8rem] lg:text-[1rem]"> 
              <p>com possibilidade de emissão de recibo para reembolso pelo seu plano de saúde</p>
            </div>
          </div>
           </div> 
           <Image
            alt="gallery"
            className="hidden md:block mr-6 md:mr-14 h-[486px] w-[290px] lg:w-[300px] rounded-t-full object-cover"
            src={sobre} />
             </div>
             <Link className="bg-[#8DFF92] transition ease-in-out rounded-full text-black text-[1.35rem] px-6 py-4 my-6 md:mt-10 place-self-center hover:bg-[#D9D9D9]" href="https://wa.me/message/XCU4MVPJDQJVO1">Agende o seu horário</Link>
      </section>
  );
};

export default Atendimento;