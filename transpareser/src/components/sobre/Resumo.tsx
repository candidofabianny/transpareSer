import React from "react";
import pinterest from 'src/assets/images/home/pinterest.png'
import whatsapp from 'src/assets/images/contato/whatsapp.png'
import instagram from 'src/assets/images/home/instagram.png'
import Image from "next/image";
import Link from "next/link";

const Resumo = () => {
  return (
    <section className="bg-[url('../assets/images/sobre/bgresumo.png')] bg-cover bg-bottom justify-center items-center flex flex-col h-full w-full py-10 md:py-20 lg:min-h-[470px]">    
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-white pb-6">
            <p className="md:hidden text-center text-[0.8rem] px-14">Somos especialistas em saúde mental e imagem pessoal, ajudando mulheres a transparecer seu estilo autêntico e consultoras de imagem a desenvolverem suas carreiras e apoiar suas clientes, tudo de forma atualizada e embasada.</p>
            <div className="hidden md:block md:max-w-[420px] lg:max-w-[540px]">
            <p className="text-[1rem] lg:text-[1.3rem]">Somos especialistas em saúde mental e imagem pessoal, ajudando mulheres a transparecer seu estilo autêntico e consultoras de imagem a desenvolverem suas carreiras e apoiar suas clientes, tudo de forma atualizada e embasada.</p>
            </div>
              <div>
                <div className="pb-6">
                  <Link href="https://www.pinterest.es/carol_saibert/">
                  <Image src={pinterest} alt="" className="h-[30px] w-[30px]">
                  </Image>
                </Link>
              </div>
              <div className="pb-6">
                <Link href="https://wa.me/message/XCU4MVPJDQJVO1">
                <Image src={whatsapp} alt="" className="h-[30px] w-[30px]">
                  </Image>
                </Link>
              </div>
              <div>
                <Link href="https://www.instagram.com/carol_saibert/">
                <Image src={instagram} alt="" className="h-[30px] w-[30px]">
                  </Image>
                </Link>
              </div>
              </div>   
              </div>
      </section>
  );
};

export default Resumo;