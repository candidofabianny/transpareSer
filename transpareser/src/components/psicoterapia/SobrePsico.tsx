import React from "react";
import sobre from "/src/assets/images/psicoterapia/sobrePsico.png"
import Image from "next/image";
import Link from "next/link";

const SobrePsicoDois = () => {
  return (
    <section className="bg-[#F9F9F9] justify-center items-center flex flex-col w-full pb-12">    
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10">
        <Image
            alt="gallery"
            className="hidden md:block ml-2 md:ml-12 h-[486px] w-[290px] lg:w-[300px] object-fill"
            src={sobre} />
            <p className="md:hidden text-[0.8rem] px-14">Aprenda a usar melhor o que já tem, a comprar com consciência e facilite sua rotina recebendo looks montados especialmente para você. Para você que:</p>
            <p className="md:hidden text-[0.8rem] px-14">Aprenda a usar melhor o que já tem, a comprar com consciência e facilite sua rotina recebendo looks montados especialmente para você. Para você que:</p>
            <div className="md:pl-2 lg:pl-8 lg:max-w-[580px]">
            <p className="hidden md:block text-[1.05rem] lg:text-[1.22rem] pb-8 lg:pb-12">Aprenda a usar melhor o que já tem, a comprar com consciência e facilite sua rotina recebendo looks montados especialmente para você. Para você que:</p>
            <p className="hidden md:block text-[1.05rem] lg:text-[1.22rem] pb-8 lg:pb-12">Aprenda a usar melhor o que já tem, a comprar com consciência e facilite sua rotina recebendo looks montados especialmente para você. Para você que:</p>
            <Image
            alt="gallery"
            className="md:hidden h-[505px] w-[310px] mx-auto mb-4 object-fill"
            src={sobre} />
               </div> 
             </div>
             <Link className="bg-[#8DFF92] transition ease-in-out rounded-full text-black text-[1.55rem] px-10 py-4 my-12 place-self-center hover:bg-[#D9D9D9]" href="https://wa.me/message/XCU4MVPJDQJVO1">Comece Aqui</Link>
      </section>
  );
};

export default SobrePsicoDois;