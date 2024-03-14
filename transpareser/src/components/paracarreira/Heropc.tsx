import React from "react";
import { athenevoyage, autography } from "@/assets/fonts/fonts";

const Heropc = () => {
  return (
    <section className="bg-[url('../assets/images/paracarreira/bgcarreira.jpeg')] bg-cover bg-bottom flex flex-col items-center justify-center min-h-[605px] w-full">    
         <div className="bg-black/70 min-h-[605px] w-full flex flex-col md:flex-row items-center justify-center">
        <div className={`${autography.className}`}>
          <h1 className="text-[3.8rem] text-white text-left leading-7 pb-6 pt-28 md:hidden px-8 text-center">Para sua carreira</h1>
        </div> 
        <div className="md:hidden w-[220px] h-[380px] rounded-t-full rounded-b bg-[url('../assets/images/paravoce/paraCarreira.jpg')] bg-center bg-cover">
        </div>
        <div className="flex flex-col md:w-3/5 lg:w-2/4 md:items-center md:justify-center">
        <div className={`${autography.className}`}>
          <h1 className="lg:text-[4.5rem] text-[3.8rem] text-white text-center leading-7 mt-24 hidden md:block">Para sua carreira</h1>
        </div> 
        <div className={`${athenevoyage.className}`}>
        <h1 className="text-white px-6 text-center leading-none tracking-tighter text-[1.8rem] md:text-[2.2rem] lg:text-[2.8rem] py-6">
        Desenvolva sua vida profissional
        </h1>
        </div>
        </div>  
        <div className="hidden md:block lg:ml-8 w-[220px] lg:w-[250px] h-[400px] lg:h-[420px] rounded-t-full rounded-b bg-[url('../assets/images/paravoce/paraCarreira.jpg')] md:mx-4 bg-center bg-cover mt-10">
        </div>
        </div>     
      </section>
  );
};

export default Heropc;