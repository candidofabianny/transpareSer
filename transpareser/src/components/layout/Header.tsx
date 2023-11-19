"use client"

import Link from "next/link";
import Headroom from "react-headroom";

const Header = () => {
  return (
    <Headroom>
    <header className="w-full top-0 bg-opacity-95 bg-black">
    <nav className="w-full mx-auto flex items-center justify-center">
        <ul className="flex items-center gap-4 md:gap-7">
          <li>
            <Link href="/ler" className="font-rosarivo text-white hover:text-red transition-all duration-300 ease-in-out text-[0.95rem] md:text[1.25rem] lg:text-[1.25rem]">
              home
            </Link>
          </li>
          <li>
            <Link href="/assistir" className="text-white hover:text-red transition-all duration-300 ease-in-out text-[0.95rem] md:text[1.25rem] lg:text-[1.25rem]">
              para voce
            </Link>
          </li>
          <li>
            <Link href="/sobre-nos" className="text-white hover:text-red transition-all duration-300 ease-in-out text-[0.9rem] lg:text-[1.25rem]">
              para sua carreira
            </Link>
          </li>
          <li>
          <Link href="/escutar" className="text-white hover:text-red transition-all duration-300 ease-in-out text-[0.95rem] md:text[1.25rem] lg:text-[2.8rem]">
              TranspareSer
            </Link>
          </li>
          <li>
          <Link href="/escutar" className="text-white hover:text-red transition-all duration-300 ease-in-out text-[0.95rem] md:text[1.25rem] lg:text-[1.25rem]">
              para sua empresa
            </Link>
          </li>
          <li>
          <Link href="/escutar" className="text-white hover:text-red transition-all duration-300 ease-in-out text-[0.95rem] md:text[1.25rem] lg:text-[1.25rem]">
              contato
            </Link>
          </li>
          <li>
          <Link href="/escutar" className="text-white hover:text-red transition-all duration-300 ease-in-out text-[0.95rem] md:text[1.25rem] lg:text-[1.25rem]">
              sobre
            </Link>
          </li>
        </ul>    
    </nav>
    <div className="bg-white w-full h-[5px]"></div>  
    </header>
    </Headroom>
  );
};

export default Header;