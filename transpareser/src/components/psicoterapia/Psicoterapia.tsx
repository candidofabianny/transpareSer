import React from "react";
import Link from "next/link";

const Psicoterapia = () => {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center w-full bg-[#F9F9F9] min-h-[400px] py-16 md:py-0 gap-2">  
         <div>
              <p className="text-[2.7rem] md:text-[3rem] lg:text-[3.3rem] pt-28 ml-8 md:ml-0 leading-10">Psicoterapia</p>
              <p className="text-black px-8 md:px-0 py-12 text-[1.3rem] md:max-w-[400px] lg:max-w-[500px]">revolucione sua relação com seu estilo, com seu guarda-roupas e consigo mesma</p>
           </div>
           <Link className="bg-[#BD4646] transition ease-in-out rounded-full text-white text-[1.55rem] px-10 py-4 place-self-center hover:bg-[#7E0505]" href="https://wa.me/message/XCU4MVPJDQJVO1">Agende a sua!</Link>
            </section>
  );
};

export default Psicoterapia;