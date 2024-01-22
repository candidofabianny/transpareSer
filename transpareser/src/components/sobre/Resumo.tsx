import React from "react";
import sobre from "/src/assets/images/sobre/sobrets.png"
import pinterest from 'src/assets/images/home/pinterest.png'
import profile from 'src/assets/images/home/profile.png'
import instagram from 'src/assets/images/home/instagram.png'
import Image from "next/image";
import Link from "next/link";

const Resumo = () => {
  return (
    <section id="resumo"
    className="bg-[#F9F9F9] justify-center items-center flex flex-col w-full pt-16 pb-6 md:pb-12">    
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <p className="md:hidden text-[0.8rem] px-14">Somos especialistas em saúde mental e imagem pessoal, ajudando mulheres a transparecer seu estilo autêntico e consultoras de imagem a desenvolverem suas carreiras e apoiar suas clientes, tudo de forma atualizada e embasada.</p>
            <div className="hidden md:block pl-12 lg:pl-20 lg:max-w-[580px]">
            <p className="text-[1.05rem] lg:text-[1.3rem] pb-20">Somos especialistas em saúde mental e imagem pessoal, ajudando mulheres a transparecer seu estilo autêntico e consultoras de imagem a desenvolverem suas carreiras e apoiar suas clientes, tudo de forma atualiazada e embasada.</p>
            </div>
            <div className="flex justify-around p-8">
              <div className="py-10">
                <div className="pb-6">
                  <Link href="/pinterest">
                  <Image src={pinterest} alt="" className="h-[30px] w-[30px]">
                  </Image>
                </Link>
              </div>
              <div className="pb-6">
                <Link href="/pinterest">
                <Image src={profile} alt="" className="h-[30px] w-[30px]">
                  </Image>
                </Link>
              </div>
              <div>
                <Link href="/pinterest">
                <Image src={instagram} alt="" className="h-[30px] w-[30px]">
                  </Image>
                </Link>
              </div>
              </div>   
            </div>
              </div>
      </section>
  );
};

export default Resumo;