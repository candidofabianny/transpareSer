import React from "react";
import { athenevoyage, voigante, lovingambros, autography } from "@/assets/fonts/fonts";
import Link from "next/link";
import bghero from "/src/assets/images/sobre/bgtranspareser.png";

const TranspareSer = () => {
    return (
<div className="bg-[url('../assets/images/sobre/bgtranspareser.png')] min-h-[300px] h-full w-full">
    <div className="flex justify-center items-center">
    <div className={`${voigante.className}`}>
        <h1 className="text-white text-[2rem]">TranspareSer</h1>
        <p>texto introdutório sobre o transpareser e uma frase de impacto</p>
        </div>
    </div>
</div>
    );
};

export default TranspareSer;