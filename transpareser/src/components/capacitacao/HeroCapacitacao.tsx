import React from "react";
import { athenevoyage } from "@/assets/fonts/fonts";
import pinterest from 'src/assets/images/home/pinterest.png'
import gmail from 'src/assets/images/contato/gmail.png'
import instagram from 'src/assets/images/home/instagram.png'
import whatsapp from 'src/assets/images/contato/whatsapp.png'
import Link from "next/link";
import Image from "next/image";

const HeroCapacitacao = () => {
  return (
    <section id="home"
    className="bg-[url('../assets/images/contato/bgcontato.jpg')] bg-cover bg-left-top lg:bg-bottom flex flex-col items-center justify-center min-h-[605px] md:min-h-[505px] w-full">    
        <div className="bg-black/50 min-h-[605px] md:min-h-[505px] h-full w-full flex flex-col md:flex-row items-center justify-center gap-12 md:gap-0 text-white py-6">
          
        </div>     
      </section>
  );
};

export default HeroCapacitacao;