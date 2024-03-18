import React from "react";
import { voigante } from "@/assets/fonts/fonts";

const TranspareSer = () => {
    return (
<div className="bg-[url('../assets/images/sobre/herosobre.jpg')] bg-cover bg-center items-center min-h-[520px] w-full">
        <div className="bg-stickyblack/70 min-h-[520px] flex flex-col lg:flex-row gap-4 items-center md:items-start pt-40">
        <div className={`${voigante.className}`}>
         <h1 className="text-white text-[3rem] md:text-[3.7rem] md:pl-[70px] lg:pl-[180px]">A TranspareSer</h1>
         </div>
         <p className="text-[1.3rem] text-center lg:text-left lg:pt-28 text-white px-12 md:pr-4 lg:max-w-[410px]">unindo psicologia e moda em uma experiência incomparável</p>
    </div>
</div>
    );
};

export default TranspareSer;