import React from "react";
import Image from "next/image";

const Beneficios = () => {
  return (
    <section id="beneficios"
    className="bg-[url('../assets/images/consultoria/descrição.jpg')] bg-cover bg-center justify-center items-center flex flex-col w-full min-h-[580px]">    
        <div className="bg-stickyblack/75 min-h-[580px] h-full w-full flex flex-col items-center justify-center gap-8">
          <h1 className="text-white text-left font-rosarivo text-[2rem] lg:text-[2.8rem] pt-12 md:pt-4">O QUE VOCÊ TERÁ</h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 lg:gap-16 pb-12">
           <div className="bg-[#D9D9D9] hover:bg-[#A33737] max-w-[220px] rounded-3xl px-6 py-12 hover:text-white">
           Encontros e ferramentas que proporcionam primeiramente autoconhecimento e conexão consigo mesma </div> 
          <div className="bg-[#D9D9D9] hover:bg-[#A33737] max-w-[220px] rounded-3xl px-6 py-12 hover:text-white">
           Aprender sobre seu estilo, suas cores e a fazer compras assertivas, recebendo guias completos com tudo o que precisa saber </div>  
          <div className="bg-[#D9D9D9] hover:bg-[#A33737] max-w-[220px] rounded-3xl px-6 py-12 hover:text-white">
          Revitalização de guarda-roupas, personal shopper e montagem de looks para colocar todo o aprendizado em prática </div> 
          </div>          
          </div>
         </section>
  );
};

export default Beneficios;