import React from "react";
import ig from "src/assets/images/consultoria/consultoriaimg.png"
import { athenevoyage, barcelony, orleymore } from "@/assets/fonts/fonts";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const HeroConsultoria = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isDragging) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(event.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));

    setSliderPosition(percent);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };
  return (
    <section id="home"
    className="flex flex-col justify-end w-full">  
    <div className="w-full relative" onMouseUp={handleMouseUp}>
      <div
        className="relative w-full max-h-[590px] aspect-[9/16] md:aspect-[70/45] m-auto overflow-hidden select-none"
        onMouseMove={handleMove}
        onMouseDown={handleMouseDown}
      >
      <div className="bg-[#971E1E] md:flex md:flex-row items-center justify-center pt-28 md:pt-12 lg:pt-24 text-center md:min-h-[580px] lg:md:min-h-[590px]">
              <div><div className={`${barcelony.className}`}>
              <p className="text-white text-[2.5rem] md:text-[3rem]">Consultoria Completa</p></div>
              <p className="hidden md:block text-white pt-8 pb-12 text-[1.28rem] px-6 md:max-w-[430px] lg:max-w-[670px]">texto introdutório sobre o transpareser e uma frase de impacto</p>
              <div className="hidden md:block">
              <div className={`${orleymore.className}`}>
              <Link className="bg-[#8F1717] transition ease-in-out rounded-full text-white text-[1.55rem] px-10 py-4 place-self-center hover:bg-[#BD4646]" href="">Adquira já</Link>
              </div>
              </div>
              </div>
              <p className="md:hidden text-white py-8 text-[1.28rem] px-6 md:px-10">texto introdutório sobre o transpareser e uma frase de impacto</p>
              <div>
                <Image src={ig} alt=""className="object-cover w-[220px] md:w-[310px] lg:w-[360px] h-[320px] md:h-[440px] lg:h-[500px] mx-auto"></Image>
                </div>
            </div>

        <div
          className="absolute top-0 left-0 right-0 w-full aspect-[9/16] md:aspect-[70/45] m-auto overflow-hidden select-none"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
         <div className="bg-[#1F1A1A] md:flex md:flex-row items-center justify-center pt-28 md:pt-12 lg:pt-24 text-center md:min-h-[580px] lg:md:min-h-[590px]">
              <div><div className={`${barcelony.className}`}>
              <p className="text-white text-[2.5rem] md:text-[3rem]">Consultoria Completa</p></div>
              <p className="hidden md:block text-white pt-8 pb-12 text-[1.28rem] px-6 md:max-w-[430px] lg:max-w-[670px]">texto introdutório sobre o transpareser e uma frase de impacto</p>
              <div className="hidden md:block">
              <div className={`${orleymore.className}`}>
              <Link className="bg-[#454242] transition ease-in-out rounded-full text-white text-[1.55rem] px-10 py-4 place-self-center hover:bg-[#BD4646]" href="">Adquira já</Link>
              </div>
              </div>
              </div>
              <p className="md:hidden text-white py-8 text-[1.28rem] px-6 md:px-10">texto introdutório sobre o transpareser e uma frase de impacto</p>
              <div>
                <Image src={ig} alt=""className="object-cover w-[220px] md:w-[310px] lg:w-[360px] h-[320px] md:h-[440px] lg:h-[500px] mx-auto"></Image>
                </div>
            </div>
        </div>
        <div
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
          style={{
            left: `calc(${sliderPosition}% - 1px)`,
          }}
        >
          <div className="bg-white absolute rounded-full h-3 w-3 -left-1 top-[calc(50%-5px)]" />
        </div>
      </div>
    </div>
      </section>
  );
};

export default HeroConsultoria;