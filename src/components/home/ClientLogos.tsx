import Image from "next/image";
import myLogo from "@/assets/images/logo.svg";
import Container from "@/components/layout/Container";

export default function ClientLogos() {
  // A clean array of mock professional logos mimicking the screenshot
  const logos = [
    // Your actual logo added to the infinite loop!
    <div key="0" className="flex items-center opacity-90 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
      <Image src={myLogo} alt="Infocart Logo" className="h-7 md:h-8 w-auto object-contain" />
    </div>,
    <div key="1" className="flex items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
      <div className="w-6 h-6 bg-green-600 flex items-center justify-center rounded-sm">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
      </div>
      <span className="text-[22px] font-black text-red-600 tracking-tighter">NESTO</span>
    </div>,
    <span key="2" className="text-[26px] font-extrabold text-fuchsia-600 tracking-tighter opacity-90 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
      viva
    </span>,
    <span key="3" className="text-[24px] font-bold text-red-600 tracking-tight opacity-90 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
      Géant
    </span>,
    <div key="4" className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
      <div className="flex flex-wrap w-6 h-6">
        <div className="w-3 h-3 border-2 border-green-500 rounded-full"></div>
        <div className="w-3 h-3 border-2 border-red-500 rounded-full"></div>
        <div className="w-3 h-3 border-2 border-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 border-2 border-green-500 rounded-full"></div>
      </div>
      <div className="flex flex-col">
        <span className="text-[14px] font-bold text-red-600 leading-none">AL MADINA</span>
        <span className="text-[8px] font-bold text-green-600 tracking-widest mt-0.5">HYPERMARKET</span>
      </div>
    </div>,
    <div key="5" className="flex flex-col items-center opacity-90 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
      <span className="text-[10px] font-bold text-[#0A1629] mb-[-4px]">زَم زَم</span>
      <span className="text-[20px] font-black text-[#0A1629] tracking-tight">ZAM ZAM</span>
    </div>,
    <div key="6" className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
      <div className="w-6 h-6 rounded-full bg-blue-100 border-2 border-[#1238A0] flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-orange-400"></div>
      </div>
      <span className="text-[22px] font-bold text-[#1238A0]">gratis</span>
    </div>,
    <span key="7" className="text-[24px] font-bold text-[#1238A0] opacity-90 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
      Amber
    </span>
  ];

  return (
    <div className="w-full py-16 bg-white border-t border-slate-100 overflow-hidden relative">
      <Container className="mb-10 flex items-center justify-between">
        {/* Left Arrow (Visual only for the screenshot aesthetic) */}
        <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
        </div>
        
        {/* Title */}
        <p className="text-center text-[12px] font-bold text-[#64748B] uppercase tracking-[0.15em]">
          We are partnered with more than 50+ companies around the globe
        </p>

        {/* Right Arrow */}
        <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
        </div>
      </Container>

      <div className="w-full overflow-hidden relative mt-8 mask-image-linear">
        {/* We use w-max so the width is exactly the size of all logos, making the 50% translation seamless */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {/* First set of logos */}
          <div className="flex items-center gap-20 px-10">
            {logos.map((logo, i) => <div key={`logo-1-${i}`} className="shrink-0">{logo}</div>)}
          </div>
          {/* Second identical set of logos for the seamless loop */}
          <div className="flex items-center gap-20 px-10" aria-hidden="true">
            {logos.map((logo, i) => <div key={`logo-2-${i}`} className="shrink-0">{logo}</div>)}
          </div>
        </div>
      </div>
    </div>
  );
}
