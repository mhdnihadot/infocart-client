"use client";

import { useRef, useState, useEffect } from "react";
import Container from "../layout/Container";
import { SectionTitle, SectionSubtitle } from "@/components/ui/typography";

export default function Categories() {
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const desktopScrollRef = useRef<HTMLDivElement>(null);
  const [mobileLeftFog, setMobileLeftFog] = useState(false);
  const [mobileRightFog, setMobileRightFog] = useState(true);
  const [desktopLeftFog, setDesktopLeftFog] = useState(false);
  const [desktopRightFog, setDesktopRightFog] = useState(true);

  const handleMobileScroll = () => {
    if (mobileScrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = mobileScrollRef.current;
      setMobileLeftFog(scrollLeft > 0);
      setMobileRightFog(Math.ceil(scrollLeft) < scrollWidth - clientWidth);
    }
  };

  const handleDesktopScroll = () => {
    if (desktopScrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = desktopScrollRef.current;
      setDesktopLeftFog(scrollLeft > 0);
      setDesktopRightFog(Math.ceil(scrollLeft) < scrollWidth - clientWidth);
    }
  };

  useEffect(() => {
    handleMobileScroll();
    handleDesktopScroll();
    window.addEventListener("resize", handleMobileScroll);
    window.addEventListener("resize", handleDesktopScroll);
    return () => {
      window.removeEventListener("resize", handleMobileScroll);
      window.removeEventListener("resize", handleDesktopScroll);
    };
  }, []);

  const categories = [
    { name: "Barcode Printers", image: "/categories/barcode_printers_1787422691981.jpg" },
    { name: "Barcode Scanners", image: "/categories/barcode_scanners_1787422703737.jpg" },
    { name: "Cash Drawer", image: "/categories/cash_drawer_1787422717050.jpg" },
    { name: "Customer Display", image: "/categories/customer_display_1787422729252.jpg" },
    { name: "Cash Counter", image: "/categories/cash_counting_machine_1787422741619.jpg" },
    { name: "ID Card Printers", image: "/categories/id_card_printers_1787422753678.jpg" },
    { name: "Passport Scanners", image: "/categories/passport_scanners_1787422769818.jpg" },
    { name: "POS Terminals", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=400&fit=crop" },
    { name: "PDT Devices", image: "https://images.unsplash.com/photo-1601599561096-f87c95fff1e9?w=400&h=400&fit=crop" },
    { name: "Receipt Printer", image: "https://images.unsplash.com/photo-1598442037996-2679b3294326?w=400&h=400&fit=crop" },
    { name: "Price Checker", image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop" },
    { name: "Weight Scale", image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop" },
    { name: "Kiosk", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop" },
    { name: "Consumables", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop" },
  ];

  return (
    <section className="w-full bg-transparent">

      {/* ══════════════════════════════════════
          MOBILE ONLY  (hidden on md+)
      ══════════════════════════════════════ */}
      <div className="block md:hidden pt-10 pb-10">
        {/* Mobile Header */}
        <div className="flex items-center justify-between px-4 mb-5">
          <h2 className="text-[18px] font-bold text-slate-900 font-geist">Category</h2>
          <button className="flex items-center gap-1.5 text-[12px] font-medium text-[#3b82f6] font-geist hover:underline">
            See All
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>

        {/* Mobile Scroll — full-width, no clipping */}
        <div className="relative w-full">
          <div className={`absolute top-0 left-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none transition-opacity duration-300 ${mobileLeftFog ? "opacity-100" : "opacity-0"}`} />
          <div className={`absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none transition-opacity duration-300 ${mobileRightFog ? "opacity-100" : "opacity-0"}`} />
          <div
            ref={mobileScrollRef}
            onScroll={handleMobileScroll}
            className="flex overflow-x-auto gap-4 pb-2 snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {/* Left spacer — guaranteed 16px, matches px-4 on header */}
            <div style={{ minWidth: "16px", flexShrink: 0 }} />
            {categories.map((cat, i) => (
              <div key={i} className="flex flex-col items-center flex-shrink-0 snap-start cursor-pointer group">
                <div className="w-[80px] h-[80px] bg-[#f5f4f0] rounded-full mb-2 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:shadow-md">
                  <img src={cat.image} alt={cat.name} className="w-[75%] h-[75%] object-cover mix-blend-multiply group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="font-semibold font-geist text-slate-800 text-[10px] tracking-wide text-center leading-tight whitespace-nowrap">
                  {cat.name}
                </span>
                <span className="text-[#3b82f6] pt-1 font-geist text-[10px] font-medium text-center whitespace-nowrap transition-colors">
                  Shop Now
                </span>
              </div>
            ))}
            {/* Right spacer */}
            <div className="shrink-0 w-4" />
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          DESKTOP ONLY  (hidden on mobile)
      ══════════════════════════════════════ */}
      <div className="hidden md:block pt-20 pb-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          {/* Desktop Header — centred with soundwaves */}
          <div className="flex flex-col items-center justify-center text-center mb-6">
            <div className="flex items-center gap-4 mb-3">
              <svg width="70" height="24" viewBox="0 0 70 24" fill="none" stroke="currentColor" className="text-black">
                <line x1="0" y1="12" x2="35" y2="12" strokeWidth="1" stroke="currentColor" opacity="0.4" />
                <rect x="40" y="9" width="1.5" height="6" rx="0.5" fill="currentColor" stroke="none" opacity="0.8" />
                <rect x="44" y="5" width="1.5" height="14" rx="0.5" fill="currentColor" stroke="none" />
                <rect x="48" y="8" width="1.5" height="8" rx="0.5" fill="currentColor" stroke="none" opacity="0.8" />
                <rect x="52" y="3" width="1.5" height="18" rx="0.5" fill="currentColor" stroke="none" />
                <rect x="56" y="7" width="1.5" height="10" rx="0.5" fill="currentColor" stroke="none" opacity="0.8" />
                <line x1="61" y1="12" x2="70" y2="12" strokeWidth="1" stroke="currentColor" opacity="0.4" />
              </svg>
              <SectionTitle>Shop by Category</SectionTitle>
              <svg width="70" height="24" viewBox="0 0 70 24" fill="none" stroke="currentColor" className="text-black transform rotate-180">
                <line x1="0" y1="12" x2="35" y2="12" strokeWidth="1" stroke="currentColor" opacity="0.4" />
                <rect x="40" y="9" width="1.5" height="6" rx="0.5" fill="currentColor" stroke="none" opacity="0.8" />
                <rect x="44" y="5" width="1.5" height="14" rx="0.5" fill="currentColor" stroke="none" />
                <rect x="48" y="8" width="1.5" height="8" rx="0.5" fill="currentColor" stroke="none" opacity="0.8" />
                <rect x="52" y="3" width="1.5" height="18" rx="0.5" fill="currentColor" stroke="none" />
                <rect x="56" y="7" width="1.5" height="10" rx="0.5" fill="currentColor" stroke="none" opacity="0.8" />
                <line x1="61" y1="12" x2="70" y2="12" strokeWidth="1" stroke="currentColor" opacity="0.4" />
              </svg>
            </div>
            <SectionSubtitle>Find the perfect IT solutions for your business.</SectionSubtitle>
          </div>

          {/* Desktop Scroll Carousel */}
          <div className="relative w-full">
            <div className={`absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none transition-opacity duration-300 ${desktopLeftFog ? "opacity-100" : "opacity-0"}`} />
            <div className={`absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none transition-opacity duration-300 ${desktopRightFog ? "opacity-100" : "opacity-0"}`} />
            <div
              ref={desktopScrollRef}
              onScroll={handleDesktopScroll}
              className="flex overflow-x-auto gap-10 pb-8 snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              {categories.map((cat, i) => (
                <div key={i} className="flex flex-col items-center flex-shrink-0 snap-center cursor-pointer group w-[160px]">
                  <div className="w-[160px] h-[160px] bg-[#f7f7f9d2] rounded-full mb-5 flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:shadow-sm border border-transparent">
                    <img src={cat.image} alt={cat.name} className="w-[80%] h-[80%] object-cover mix-blend-multiply group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="font-semibold font-geist text-black text-[13px] tracking-wider capitalize mb-1 text-center line-clamp-1 group-hover:text-slate-700 transition-colors">
                    {cat.name}
                  </h3>
                  <span className="text-[#3b82f6] font-geist text-[12px] font-medium text-center transition-colors">
                    Shop Now
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
