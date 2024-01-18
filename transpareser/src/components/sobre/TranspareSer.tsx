import React from "react";
import { athenevoyage, voigante, lovingambros, autography } from "@/assets/fonts/fonts";
import Link from "next/link";
import bghero from "/src/assets/images/sobre/bgtranspareser.png";

const TranspareSer = () => {
    return (
<div className="bg-[url('../assets/images/sobre/bgtranspareser.png')] bg-cover bg-center items-center min-h-[520px] h-full w-full">
        <div className="flex flex-col lg:flex-row gap-4 items-center md:items-start pt-40">
        <div className={`${voigante.className}`}>
         <h1 className="text-white text-[3.2rem] md:text-[3.7rem] md:pl-16">A TranspareSer</h1>
         </div>
         <p className="text-[1.4rem] md:text-[1.6rem] lg:text-[1.3rem] text-center lg:text-left lg:pt-28 text-white px-12 md:pr-4 md:max-w-[460px] lg:max-w-[410px]">Onde a psicologia e a moda se encontram para escrever o futuro, hoje.</p>
    </div>
</div>
    );
};

export default TranspareSer;