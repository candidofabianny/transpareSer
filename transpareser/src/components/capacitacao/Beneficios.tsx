import React from "react";
import { catalinavillage, holispay } from "@/assets/fonts/fonts";
import Link from "next/link";

const BeneficiosCapacitacao = () => {
  return (
    <section className="bg-[#971E1E] flex flex-col justify-center items-center w-full min-h-[580px] lg:min-h-[600px] pb-10">  
        <div className={`${catalinavillage.className}`}>
           <p className="text-[2.2rem] text-white tracking-tight text-left p-12">O QUE VOCE VAI APRENDER</p>
           </div>
           <div className="flex flex-col md:flex-row gap-14 px-6 lg:px-14 pb-10">
           <div className="flex flex-col items-center w-[100%] md:w-[50%] text-[1rem] lg:text-[1.2rem]">
            <div className="collapse bg-[#D9D9D9] m-2">            
            <div className="collapse-title">
            Bases para um atendimento humanizado
            </div>
          </div>
          <div className="collapse bg-[#D9D9D9] m-2">
            <div className="collapse-title">
            Porque as clientes procuram seu serviço
            </div>
          </div>
          <div className="collapse bg-[#D9D9D9] m-2">
            <div className="collapse-title">
            Encantar e fidelizar</div>
          </div> 
          <div className="collapse bg-[#D9D9D9] m-2">
            <div className="collapse-title">
            Como lidar com relatos muito pessoais por parte da cliente (de conteúdo emocional, problemas psicológicos, luto, sobre violência e abusos)
           </div>
          </div>          
          </div>
            <div className="flex flex-col items-center w-[100%] md:w-[50%] text-[1rem] lg:text-[1.2rem]">
            <div className="collapse bg-[#D9D9D9] m-2">            
            <div className="collapse-title">
            Escuta ativa e comunicação assertiva (o que falar e o que não falar)
            </div>
          </div>
          <div className="collapse bg-[#D9D9D9] m-2">
            <div className="collapse-title">
            Especificidades do atendimento e acolhimento a mulheres
            </div>
          </div>
          <div className="collapse bg-[#D9D9D9] m-2">
            <div className="collapse-title">
            Como encaminhar para outros profissionais ou serviços de forma ética</div>
          </div> 
          <div className="collapse bg-[#D9D9D9] m-2">
            <div className="collapse-title">
            Estudos de caso</div>
          </div>          
          </div>
             </div>
          <div className={`${catalinavillage.className}`}>
              <Link className="bg-[#7E0505] transition ease-in-out rounded-full text-white text-[1.55rem] px-10 py-4 place-self-center hover:bg-[#BD4646]" href="https://wa.me/message/XCU4MVPJDQJVO1">Saiba mais</Link>
          </div>
          </section>
  );
};

export default BeneficiosCapacitacao;