import React from "react";
import { useState } from "react";
import { athenevoyage } from "@/assets/fonts/fonts";
import pinterest from 'src/assets/images/home/pinterest.png'
import gmail from 'src/assets/images/contato/gmail.png'
import instagram from 'src/assets/images/home/instagram.png'
import whatsapp from 'src/assets/images/contato/whatsapp.png'
import Link from "next/link";
import Image from "next/image";

const HeroContato = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <section className="bg-[url('../assets/images/contato/bgcontato.jpg')] bg-cover bg-left-top lg:bg-bottom flex flex-col items-center justify-center min-h-[605px] md:min-h-[505px] w-full">    
        <div className="bg-black/50 min-h-[605px] md:min-h-[505px] h-full w-full flex flex-col md:flex-row items-center justify-center gap-12 md:gap-0 text-white py-6">
          <div className="md:w-3/5">
          <div className={`${athenevoyage.className}`}>
          <h1 className="text-[3.15rem] md:text-[3.3rem] lg:text-[4rem] text-center md:text-left md:ml-8 lg:ml-20 md:-mt-12 leading-9">Entre em contato</h1>
         </div>
          <p className="hidden md:block text-left text-[1.5rem] lg:text-[1.7rem] lg:max-w-[570px] ml-8 lg:ml-20 pr-12 pt-8">Conheça nossas redes sociais ou entre em contato</p>
       </div>
        <ul className="flex justify-center items-center text-white gap-12 lg:gap-16 pt-6 pb-10 md:pb-4 md:mr-8 lg:mr-12 md:w-2/5">
        <Link href="https://wa.me/message/XCU4MVPJDQJVO1">
                <Image src={whatsapp} alt="redimensionar whatsapp" className="h-[35px] w-[35px] hover:scale-110">
                </Image>
              </Link>
        <Link href="https://www.pinterest.es/carol_saibert/">
                <Image src={pinterest} alt="redimensionar pinterest" className="h-[35px] w-[35px] hover:scale-110">
                </Image>
              </Link>
              <li className="dropdown dropdown-hover my-4 md:my-5">
              <Image src={instagram} alt="redimensionar instagram" className="h-[35px] w-[35px] hover:scale-110">
                </Image>
                <ul className="bg-stickyblack text-[1rem] dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li><Link href="https://www.instagram.com/carol_saibert/">Carol Saibert</Link></li>
                  <li><Link href="https://www.instagram.com/transpare_ser/">TranspareSer</Link></li>
                </ul>
              </li>
              <Link href="mailto:psicocarolsaibert@gmail.com">
              <Image src={gmail} alt="" className="h-[40px] w-[40px] hover:scale-110">
                </Image>
              </Link>
            </ul>
       <p className="md:hidden text-center text-[1.5rem] mx-4">Conheça nossas redes sociais ou entre em contato</p>
        </div>     
      </section>
  );
};

export default HeroContato;