import Image from "next/image";
import HeroFeature from "./HeroFeature";
import Container from "@/components/layout/Container";

// ⚠️ Update this extension if you changed your image to a PNG!
import heroImage from "@/assets/images/banners/hero-image.webp";

export default function Hero() {
  return (
    <main className="flex-1 relative w-full overflow-hidden">
      
      {/* Modern Linear & Radial Color Mix Blending Background */}
      <div className="absolute inset-0 -z-10 bg-white">
        {/* Base subtle linear gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FAFBFF] via-white to-[#EEF2FC]"></div>
        
        {/* Blurred colorful orbs for mix blending effect */}
        <div className="absolute -top-[20%] -right-[10%] w-[80%] h-[80%] md:w-[60%] md:h-[80%] rounded-full bg-gradient-to-bl from-blue-200/40 to-indigo-200/20 blur-[100px] mix-blend-multiply pointer-events-none"></div>
        <div className="absolute bottom-[-10%] -left-[10%] w-[60%] h-[60%] md:w-[40%] md:h-[60%] rounded-full bg-gradient-to-tr from-cyan-100/40 to-blue-100/20 blur-[80px] mix-blend-multiply pointer-events-none"></div>
        <div className="absolute top-[30%] left-[20%] w-[40%] h-[40%] rounded-full bg-gradient-to-r from-purple-100/30 to-blue-100/30 blur-[80px] mix-blend-multiply pointer-events-none"></div>
      </div>

      <Container className="pt-12 md:pt-16 pb-20 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col items-start text-left z-10 pt-4">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-blue-100/50 shadow-sm mb-7">
              <div className="w-4 h-4 rounded-full bg-[#004EEB] text-white flex items-center justify-center shrink-0">
                <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"></path></svg>
              </div>
              <span className="text-[12px] md:text-[13px] font-bold text-[#004EEB]">Trusted IT Solutions for Smarter Business</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-[2.75rem] sm:text-[3.25rem] md:text-[4.2rem] font-extrabold text-black leading-[1.1] mb-6 tracking-tight">
              Powering Businesses <br className="hidden lg:block" />
              with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004EEB] to-[#3B82F6]">Smart IT Solutions</span>
            </h1>

            {/* Sub-description */}
            <p className="text-[1rem] md:text-[1.1rem] text-slate-600 max-w-lg mb-10 leading-relaxed font-medium">
              Infocart delivers innovative POS systems, software, and IT solutions to streamline your operations and grow your business.
            </p>

            {/* Feature Highlights Row */}
            <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-10 md:mb-12">
              <HeroFeature
                icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>}
                title="Reliable Products"
              />
              <HeroFeature
                icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>}
                title="Expert Support"
              />
              <HeroFeature
                icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>}
                title="Complete Solutions"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-gradient-to-r from-[#004EEB] to-[#003BBA] text-white text-[15px] font-bold hover:shadow-lg hover:shadow-blue-900/30 hover:-translate-y-0.5 transition-all">
                Explore Products
              </button>
              <button className="w-full sm:w-auto px-8 py-3.5 rounded-lg border-2 border-[#E2E8F0] text-[#004EEB] text-[15px] font-bold hover:border-[#004EEB] hover:bg-slate-50 transition-all">
                Contact Us
              </button>
            </div>
          </div>

          {/* Right Side Image */}
          {/* Ensured the image fits perfectly on mobile (w-full) and expands on desktop (lg:w-[125%]) */}
          <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[650px] flex items-center justify-center z-10 lg:pt-10">
            <Image
              src={heroImage}
              alt="Infocart POS Systems"
              className="object-contain w-full lg:w-[125%] lg:h-[125%] lg:max-w-none drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
              priority
            />
          </div>

        </div>
      </Container>
    </main>
  );
}
