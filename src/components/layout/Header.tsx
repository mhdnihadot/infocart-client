"use client";

import { useState, useEffect } from "react";
import Link from 'next/link';
import Image from 'next/image';
import myLogo from "@/assets/images/logo.svg";
import Container from "@/components/layout/Container";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    // Initialize the state on mount
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container>

      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
        ? "py-3.5 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
        : "py-5 md:py-6 bg-transparent border-b border-transparent"
        }`}>
        <div className="flex justify-between items-center w-full relative">

          {/* Left: Logo */}
          <div className="flex items-center shrink-0">
            <Link href="/">
              <Image src={myLogo} alt="Infocart Logo" className="w-[140px] md:w-[110px] h-auto object-contain origin-left" priority />
            </Link>
          </div>

          {/* Center: Navigation Menu */}
          <nav className="hidden lg:flex space-x-7 items-center justify-center absolute left-1/2 -translate-x-1/2">
            <Link href="/" className="text-[14px] font-bold text-slate-700 hover:text-[#004EEB] transition-colors">Home</Link>
            <div className="flex items-center gap-1.5 cursor-pointer text-[14px] font-bold text-slate-700 hover:text-[#004EEB] transition-colors group">
              Products
              <svg className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#004EEB] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path></svg>
            </div>
            <div className="flex items-center gap-1.5 cursor-pointer text-[14px] font-bold text-slate-700 hover:text-[#004EEB] transition-colors group">
              Solutions
              <svg className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#004EEB] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path></svg>
            </div>
            <Link href="#services" className="text-[14px] font-bold text-slate-700 hover:text-[#004EEB] transition-colors">Services</Link>
            <Link href="#about" className="text-[14px] font-bold text-slate-700 hover:text-[#004EEB] transition-colors">About Us</Link>
            <Link href="#blog" className="text-[14px] font-bold text-slate-700 hover:text-[#004EEB] transition-colors">Blog</Link>
            <Link href="#contact" className="text-[14px] font-bold text-slate-700 hover:text-[#004EEB] transition-colors">Contact Us</Link>
          </nav>

          {/* Right: Actions & Contact */}
          <div className="flex items-center gap-6 shrink-0">

            {/* Get a Quote Button */}
            <button className="hidden sm:block px-6 py-2.5 rounded-lg bg-[#004EEB] text-white text-[13px] font-extrabold tracking-wide hover:bg-[#003BBA] hover:shadow-lg hover:-translate-y-0.5 transition-all">
              Get a Quote
            </button>

            {/* WhatsApp Contact */}
            <a href="https://wa.me/97143411140" target="_blank" rel="noreferrer" className="hidden xl:flex items-center gap-2.5 group cursor-pointer">
              <svg className="w-8 h-8 text-[#25D366] hover:scale-110 transition-transform origin-center" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51h-.57c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span className="text-[14.5px] font-extrabold text-black tracking-tight group-hover:text-[#004EEB] transition-colors">+971 4 341 1140</span>
            </a>
          </div>
        </div>
      </header>
    </Container>

  );
}
