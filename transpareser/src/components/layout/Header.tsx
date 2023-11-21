"use client"

import Link from "next/link";
import Headroom from "react-headroom";

const Header = () => {
  return (
    <Headroom>
    <header className="w-full top-0">
    <nav className="w-full mx-auto flex items-center justify-center bg-stickyblack/50">
        <ul className="flex items-center gap-4 md:gap-7 text-white">
          <li>
            <Link href="/home" className="font-loving-ambros hover:text-protonred transition-all duration-300 ease-in-out text[1rem] lg:text-[1.2rem]">
              home
            </Link>
          </li>
          <li>
            <Link href="/para-voce" className="font-loving-ambros hover:text-protonred transition-all duration-300 ease-in-out text[1rem] lg:text-[1.2rem]">
              para voce
            </Link>
          </li>
          <li>
            <Link href="/para-sua-carreira" className="font-loving-ambros hover:text-protonred transition-all duration-300 ease-in-out text-[1rem] lg:text-[1.2rem]">
              para sua carreira
            </Link>
          </li>
          <li>
          <Link href="/transpareSer" className="font-voigante font-bold hover:text-protonred transition-all duration-300 ease-in-out text-[0.95rem] md:text[2rem] lg:text-[2.8rem]">
              TranspareSer
            </Link>
          </li>
          <li>
          <Link href="/para-sua-empresa" className="hover:text-protonred transition-all duration-300 ease-in-out text[1rem] lg:text-[1.2rem]">
              para sua empresa
            </Link>
          </li>
          <li>
          <Link href="/contato" className="hover:text-protonred transition-all duration-300 ease-in-out text[1rem] lg:text-[1.2rem]">
              contato
            </Link>
          </li>
          <li>
          <Link href="/sobre" className="hover:text-protonred transition-all duration-300 ease-in-out text[1rem] lg:text-[1.2rem]">
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