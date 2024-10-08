import React from "react";
import { athenevoyage, autography } from "@/assets/fonts/fonts";

const Heropv = () => {
  return (
    <section className="bg-[url('../assets/images/paravoce/paravocebg.jpg')] bg-cover bg-center flex flex-col items-center justify-center min-h-[655px] md:min-h-[540px] lg:min-h-[620px] w-full">    
        <div className="bg-black/60 min-h-[665px] md:min-h-[540px] lg:min-h-[620px] w-full flex flex-col md:flex-row items-center justify-center">
        <div className={`${autography.className}`}>
          <h1 className="text-[3.5rem] text-white text-left leading-7 pb-6 pt-28 md:hidden">Para Você</h1>
        </div> 
        <div className="md:hidden w-[220px] lg:w-[280px] h-[400px] lg:h-[440px] rounded-t-full rounded-b bg-[url('../assets/images/paravoce/pvCentro.jpg')] md:mx-4 lg:mx-10 bg-center bg-cover">
        </div>
        <div className="flex flex-col md:w-3/5 lg:w-2/4 md:items-center">
        <div className={`${autography.className}`}>
          <h1 className="text-[4.5rem] text-white text-center leading-7 pt-26 md:pt-4 pb-4 hidden md:block lg:mr-[200px]">Para Você</h1>
        </div> 
        <div className={`${athenevoyage.className}`}>
        <h1 className="text-white text-center leading-none tracking-tighter text-[1.8rem] md:text-[2.55rem] lg:text-[3.13rem] px-6 lg:px-8 md:px-2 md:pb-12 py-6">
        Como posso te ajudar a transparecer seu estilo autêntico
        </h1>
        </div>
        </div>  
        <div className="hidden md:block md:mt-12 lg:ml-14 w-[220px] lg:w-[280px] h-[400px] lg:h-[440px] rounded-t-full rounded-b bg-[url('../assets/images/paravoce/pvCentro.jpg')] md:mx-4 bg-center bg-cover">
        </div>
        </div>     
      </section>
  );
};

export default Heropv;