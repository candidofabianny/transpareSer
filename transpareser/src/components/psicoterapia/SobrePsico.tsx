import React from "react";
import sobre from "/src/assets/images/psicoterapia/sobrePsico.png"
import Image from "next/image";
import Link from "next/link";

const SobrePsicoDois = () => {
  return (
    <section className="bg-[#F9F9F9] justify-center items-center flex flex-col w-full py-8 md:py-4">    
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-10">
        <Image
            alt="gallery"
            className="hidden md:block ml-6 lg:ml-12 h-[486px] w-[290px] lg:w-[300px] object-fill"
            src={sobre} />
            <p className="md:hidden text-[1.2rem] font-bold px-14">Como saber se você precisa de psicoterapia:</p>
            <ul className="md:hidden px-10 ml-10 list-disc">
            <li>Se você tem algum transtorno já diagnosticado </li>
            <li>Se você se sente ansiosa, estressada, desmotivada ou deprimida</li>
            <li>Se você tem dificuldades em seus relacionamentos (amorosos, familiares, profissionais, interpessoais)</li>
            <li>Se sua autoestima estiver abalada</li></ul>
            <div className="md:pl-2 lg:pl-8 lg:max-w-[580px]">
            <p className="hidden md:block text-[1.05rem] lg:text-[1.22rem] py-8">Como saber se você precisa de psicoterapia:</p>            
            <ul className="hidden md:block text-[0.8rem] lg:text-[1rem] pr-8">
            <li className="shadow-md border-[#8DFF92] border-2 mb-4 max-w-[95%] md:max-w-[100%] ml-2 md:ml-0">
            <div className="collapse-title">
            Se você tem algum transtorno já diagnosticado 
            </div></li>
            <li className="shadow-md border-[#8DFF92] border-2 mb-4 max-w-[95%] md:max-w-[100%] ml-2 md:ml-0">
            <div className="collapse-title">
            Se você se sente ansiosa, estressada, desmotivada ou deprimida
            </div></li>
            <li className="shadow-md border-[#8DFF92] border-2 mb-4 max-w-[95%] md:max-w-[100%] ml-2 md:ml-0">
            <div className="collapse-title">
            Se você tem dificuldades em seus relacionamentos (amorosos, familiares, profissionais, interpessoais)
            </div></li>
            <li className="shadow-md border-[#8DFF92] border-2 mb-4 max-w-[95%] md:max-w-[100%] ml-2 md:ml-0">
            <div className="collapse-title">
            Se sua autoestima estiver abalada
            </div></li>
            <li className="shadow-md border-[#8DFF92] border-2 mb-4 max-w-[95%] md:max-w-[100%] ml-2 md:ml-0">
            <div className="collapse-title">
            Se você tem uma relação difícil com a comida e o seu peso
            </div></li>
            <li className="shadow-md border-[#8DFF92] border-2 mb-4 max-w-[95%] md:max-w-[100%] ml-2 md:ml-0">
            <div className="collapse-title">
            Se sente insatisfação com sua aparência e imagem pessoal
            </div></li>
            </ul>
           <Image
            alt="gallery"
            className="md:hidden h-[505px] w-[310px] mx-auto mb-4 object-fill"
            src={sobre} />
               </div> 
             </div>
             <ul className="md:hidden px-10 ml-10 list-disc pt-4">
              <li>Se você tem uma relação difícil com a comida e o seu peso</li>
              <li>Se sente insatisfação com sua aparência e imagem pessoal</li>
             </ul>
             <p className="md:hidden px-10 ml-10 py-4">Qualquer um desses aspectos é motivo suficiente para iniciar a psicoterapia</p>
             <Link className="bg-[#8DFF92] transition ease-in-out rounded-full text-black text-[1.55rem] px-8 py-4 my-6 md:my-10 place-self-center hover:bg-[#D9D9D9]" href="https://wa.me/message/XCU4MVPJDQJVO1">Comece Aqui</Link>
      </section>
  );
};

export default SobrePsicoDois;