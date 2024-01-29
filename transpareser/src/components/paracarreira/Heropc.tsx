import React from "react";
import { athenevoyage, autography } from "@/assets/fonts/fonts";

const Heropc = () => {
  return (
    <section id="home"
    className="bg-[url('../assets/images/paracarreira/bgcarreira.png')] bg-cover bg-left flex flex-col items-center justify-center min-h-[645px] w-full">    
        <div className="h-full w-full flex flex-col md:flex-row items-center justify-center">
        <div className={`${autography.className}`}>
          <h1 className="text-[3.8rem] text-white text-left leading-7 pb-6 pt-28 md:hidden px-8 text-center">Para sua carreira</h1>
        </div> 
        <div className="md:hidden w-[220px] lg:w-[280px] h-[400px] lg:h-[440px] rounded-t-full rounded-b bg-[url('../assets/images/paravoce/paravocehero.png')] md:mx-4 lg:mx-10 bg-center bg-cover">
        </div>
        <div className="flex flex-col md:w-3/5 lg:w-2/4 md:items-center">
        <div className={`${autography.className}`}>
          <h1 className="lg:text-[4.5rem] md:-mr-12 text-[4rem] text-white text-center leading-7 pt-18 pb-4 hidden md:block">Para sua carreira</h1>
        </div> 
        <div className={`${athenevoyage.className}`}>
        <h1 className="text-white md:-mr-12 text-left px-16 md:px-6 -mt-28 md:-mt-0 md:text-center leading-none tracking-tighter text-[2.3rem] md:text-[2.55rem] lg:text-[3.13rem] lg:px-8 md:px-2  py-6">
        Como posso te ajudar a transparecer seu estilo autêntico
        </h1>
        </div>
        </div>  
        <div className="hidden md:block lg:ml-8 w-[220px] lg:w-[280px] h-[400px] lg:h-[440px] rounded-t-full rounded-b bg-[url('../assets/images/paravoce/paravocehero.png')] md:mx-4 bg-center bg-cover">
        </div>
        </div>     
      </section>
  );
};

export default Heropc;