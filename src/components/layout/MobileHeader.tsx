"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/layout/Container";
import myLogo from "@/assets/images/logo.svg";

export default function MobileHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`block lg:hidden fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "py-2.5 bg-[#02040a]/95 backdrop-blur-md shadow-[0_4px_30px_rgba(59,130,246,0.1)] border-b border-[#3b82f6]/20"
            : "py-5 bg-transparent border-b border-transparent"
        }`}
      >
        <Container>
          <div className="flex justify-between items-center w-full">
            {/* Mobile Menu Button */}
            <div className="flex items-center shrink-0 w-[85px]">
              <button
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-slate-300 hover:text-white transition-colors p-2 -ml-2 focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {menuOpen ? (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>

            {/* Mobile Logo */}
            <div className="flex flex-1 justify-center items-center">
              <Link href="/">
                <Image
                  src={myLogo}
                  alt="Infocart Logo"
                  className={`h-auto object-contain origin-center opacity-90 hover:opacity-100 transition-all duration-300 ${
                    isScrolled ? "w-24" : "w-32"
                  }`}
                  priority
                />
              </Link>
            </div>

            {/* Mobile Enquire Button */}
            <div className="flex items-center justify-end shrink-0 w-[85px]">
              <Link
                href="/services"
                className="font-geist px-3.5 py-1.5 rounded-full border border-white/20 bg-white/5 text-white text-[11px] font-semibold tracking-wide hover:bg-white/10 hover:border-white/30 transition-all whitespace-nowrap backdrop-blur-sm"
              >
                Services
              </Link>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#02040a]/98 backdrop-blur-2xl flex flex-col pt-24 px-8 pb-10 lg:hidden">
          <nav className="flex flex-col space-y-6 text-lg font-medium font-geist text-slate-200">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-white transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/services"
              onClick={() => setMenuOpen(false)}
              className="hover:text-white transition-colors"
            >
              Services & Solutions
            </Link>
            <Link
              href="/blogs"
              onClick={() => setMenuOpen(false)}
              className="hover:text-white transition-colors"
            >
              Blogs
            </Link>
            <Link
              href="/#categories"
              onClick={() => setMenuOpen(false)}
              className="hover:text-white transition-colors"
            >
              Products & Categories
            </Link>
            <Link
              href="/#faq"
              onClick={() => setMenuOpen(false)}
              className="hover:text-white transition-colors"
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-white transition-colors"
            >
              Contact Us
            </Link>
          </nav>

          <div className="mt-auto pt-8 border-t border-slate-800 flex flex-col gap-4">
            <a
              href="https://wa.me/97143411140"
              target="_blank"
              rel="noreferrer"
              className="w-full py-3 rounded-xl bg-[#25D366] text-slate-900 font-semibold text-center text-sm font-geist"
            >
              WhatsApp Us (+971 43411140)
            </a>
          </div>
        </div>
      )}
    </>
  );
}
