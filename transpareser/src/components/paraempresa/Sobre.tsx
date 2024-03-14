import React from "react";
import sobre from "/src/assets/images/paracarreira/imagemcarreira.png"
import Image from "next/image";
import Link from "next/link";

const SobreEmpresa = () => {
  return (
    <section className="bg-[#F9F9F9] justify-center items-center flex flex-col w-full pt-16 pb-12 md:pb-12">    
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-14">
            <p className="md:hidden text-[0.8rem] px-14">Podemos desenvolver juntas a melhor solução de treinamento, capacitação ou palestra, tanto para treinar sua equipe, quanto para informar e acolher suas clientes, alunas ou grupo de mulheres. Algumas sugestões de temas:</p>
            <div className="md:pl-12 lg:pl-20 lg:max-w-[580px]">
            <p className="hidden md:block text-[1.05rem] lg:text-[1.22rem] pb-8 lg:pb-12">Podemos desenvolver juntas a melhor solução de treinamento, capacitação ou palestra, tanto para treinar sua equipe, quanto para informar e acolher suas clientes, alunas ou grupo de mulheres. Algumas sugestões de temas:</p>
            <Image
            alt="gallery"
            className="md:hidden h-[505px] w-[310px] mx-auto mb-8 rounded-t-full object-cover"
            src={sobre} />
            <Link href="https://wa.me/message/XCU4MVPJDQJVO1" className="collapse bg-base-200 hover:bg-[#8D2A2A] mb-4 max-w-[95%] md:max-w-[100%] ml-2 md:ml-0">
            <div className="collapse-title hover:text-white text-[1rem] lg:text-[1.1rem] font-medium">
            Autoestima e imagem pessoal 
            </div>
          </Link>      
          <Link href="https://wa.me/message/XCU4MVPJDQJVO1" className="collapse bg-base-200 hover:bg-[#8D2A2A] mb-4 max-w-[95%] md:max-w-[100%] ml-2 md:ml-0">
            <div className="collapse-title hover:text-white text-[1rem] lg:text-[1.1rem] font-medium">
            Imagem pessoal e profissional
            </div>
          </Link>     
          <Link href="https://wa.me/message/XCU4MVPJDQJVO1" className="collapse bg-base-200 hover:bg-[#8D2A2A] mb-4 max-w-[95%] md:max-w-[100%] ml-2 md:ml-0">
            <div className="collapse-title hover:text-white text-[1rem] lg:text-[1.1rem] font-medium">
            Saúde mental da mulher
            </div>
          </Link>   
           </div> 
           <Image
            alt="gallery"
            className="hidden md:block mr-6 md:mr-14 h-[486px] w-[290px] lg:w-[300px] rounded-t-full object-cover"
            src={sobre} />
             </div>
      </section>
  );
};

export default SobreEmpresa;