import React from "react";
import ebook from "/src/assets/images/paravoce/ebookdesafio.jpg"
import Image from "next/image";
import { catalinavillage } from "@/assets/fonts/fonts";
import Link from "next/link";

const Ebook = () => {
  return (
    <section className="bg-[#F9F9F9] justify-center items-center flex flex-col w-full py-12"> 
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4 pt-6 md:mt-0 text-black">
        <div className={`${catalinavillage.className}`}>
           <p className="md:hidden text-[2.7rem] text-center tracking-tighter">E-book desafio</p>
           <p className="md:hidden text-[2.7rem] text-center tracking-tighter leading-8 pb-4">da autestima</p>
           </div>
           <div className="hidden md:block px-6 lg:px-12 md:max-w-[420px] lg:max-w-[580px]">
            <div className={`${catalinavillage.className}`}>
            <p className="text-[3rem] lg:text-[3.9rem] text-left tracking-tighter leading-none pb-4">E-book Transpareser</p></div>
            <p className="text-[0.95rem] lg:text-[1.16rem] text-left pr-4 py-4">Firme consigo mesma o compromisso destes 20 dias de ações práticas para começar uma revolução de amor próprio e autenticidade na vida e no vestir</p>
            </div> 
            <Link href="https://pay.hotmart.com/P91231380B">
            <Image
            alt="gallery"
            className="w-[250px] lg:w-[80%] lg:h-[400px] -mt-4 md:mr-8 lg:mr-14 rounded-md hover:opacity-40"
            src={ebook}/>
            </Link>
             <p className="md:hidden text-[1rem] mx-8 max-w-[350px] pb-10 text-center">Firme consigo mesma o compromisso destes 20 dias de ações práticas para começar uma revolução de amor próprio e autenticidade na vida e no vestir</p>
             </div>
            <div className={`${catalinavillage.className}`}>
              <Link className="md:hidden bg-[#7E0505] transition ease-in-out rounded-full text-white text-[1.55rem] px-8 py-4 place-self-center hover:bg-[#BD4646]" href="https://pay.hotmart.com/P91231380B?bid=1712100526137">Compre Aqui</Link>
            </div>
      </section>
  );
};

export default Ebook;