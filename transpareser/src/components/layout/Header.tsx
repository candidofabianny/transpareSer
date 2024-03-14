"use client"

import Link from "next/link";
import { useState } from "react";
import Headroom from "react-headroom";
import {galabiyah, voigante } from "@/assets/fonts/fonts";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <Headroom>
      <header className="hidden lg:block fixed w-full top-0 bg-stickyblack/90">
        <nav className="w-full mx-auto flex items-center justify-center">
        <div className={`${galabiyah.className}`}>
        <ul className="flex items-center gap-4 md:gap-7 text-white ">
          <li>
            <Link href="/" className="font-loving-ambros hover:text-bordo transition-all duration-300 ease-in-out text-[1.08rem]">
              home
            </Link>
          </li>
          <li className="dropdown dropdown-hover my-4 md:my-5">
                <Link href="/para-voce" className="font-loving-ambros hover:text-bordo transition-all duration-300 ease-in-out text-[1.08rem]">para você</Link>
                <ul className="bg-bordo font-rosarivo text-[1rem] dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li><Link href="/consultoria-completa">consultoria completa</Link></li>
                  <li><Link href="/analise-de-coloracao">análise de coloração</Link></li>
                </ul>
              </li>
              <li className="dropdown dropdown-hover my-4 md:my-5">
                <Link href="/para-sua-carreira" className="font-loving-ambros hover:text-bordo transition-all duration-300 ease-in-out text-[1.08rem]">para sua carreira</Link>
                <ul className="bg-bordo font-rosarivo text-[1rem] dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li><Link href="/capacitacao-atendimento-humanizado">capacitação em atentimento humanizado</Link></li>
                </ul>
              </li>
          <li className={`${voigante.className}`}>
          <Link href="/" className="hover:text-bordo transition-all duration-300 ease-in-out text-[2.7rem]">
              TranspareSer </Link>
          </li>
          <li>
          <Link href="/para-sua-empresa" className="font-loving-ambros hover:text-bordo transition-all duration-300 ease-in-out text-[1.08rem]">
              para sua empresa </Link>
          </li>
          <li>
          <Link href="/contato" className="font-loving-ambros hover:text-bordo transition-all duration-300 ease-in-out text-[1.08rem]">
              contato </Link>
          </li>
          <li>
          <Link href="/sobre" className="font-loving-ambros hover:text-bordo transition-all duration-300 ease-in-out text-[1.08rem]">
              sobre </Link>
          </li>
        </ul> 
        </div> 
    </nav>
    <div className="bg-white w-full h-[3px]"></div>  
    </header>
    <header className="lg:hidden fixed w-full top-0 bg-stickyblack/70">
      <div className="flex items-center justify-center md:justify-around gap-6">
      <div className={`${voigante.className}`}>
          <Link href="/" className="text-white hover:text-bordo transition-all duration-300 ease-in-out text-[2.5rem]">
              TranspareSer </Link>
        </div>
          <div className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}>
            <span className="block h-0.5 w-8 bg-white"></span>
            <span className="block h-0.5 w-8 bg-white"></span>
            <span className="block h-0.5 w-8 bg-white"></span>
          </div>
        </div>
          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8 animate-jump-in animate-once animate-duration-[800ms] animate-delay-200 animate-ease-in-out"
              onClick={() => setIsNavOpen(false)} >
              <svg
                className="h-8 w-8 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <div className={`${galabiyah.className}`}>
            <ul className="flex flex-col items-center justify-between text-white text-[1rem] md:text-[1.3rem]">
              <li className="border-b border-gray-400 my-8">
                <a href="/">home</a>
              </li>
              <li className="dropdown dropdown-hover my-4 md:my-5">
                <Link href="/para-voce" className="border-b border-gray-400">para você</Link>
                <ul className="bg-stickyblack text-[1rem] dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li><Link href="/consultoria-completa">consultoria completa</Link></li>
                  <li><Link href="/analise-de-coloracao">análise de coloração</Link></li>
                </ul>
              </li>
              <li className="dropdown dropdown-hover my-4 md:my-5">
                <Link href="/para-sua-carreira" className="border-b border-gray-400">para sua carreira</Link>
                <ul className="bg-stickyblack text-[1rem] dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li><Link href="/capacitacao-atendimento-humanizado">capacitação em atentimento humanizado</Link></li>
                </ul>
              </li>
              <li className="border-b border-gray-400 my-8">
                <a href="para-sua-empresa">para sua empresa</a>
              </li>
              <li className="border-b border-gray-400 my-4 md:my-8">
                <a href="/contato">contato</a>
              </li>
              <li className="border-b border-gray-400 my-4 md:my-2">
                <a href="/sobre">sobre</a>
              </li>
            </ul>
            </div>
          </div> 
        <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: #040101;
        z-index: 10;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style> 
    <div className="bg-white w-full h-[2.5px]"></div>  
    </header>
    </Headroom>
  );
};

export default Header;